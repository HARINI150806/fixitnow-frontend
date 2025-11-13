/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FiBell } from "react-icons/fi";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { BASE_URL } from "../services/api";

const ChatNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const { user } = useAuth();

  const stompClientRef = useRef(null);
  const subscriptionRef = useRef(null);
  const dropdownRef = useRef(null);
  const seenIds = useRef(new Set()); // Avoid duplicates

  useEffect(() => {
    fetchNotifications();
    connectWebSocket();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      disconnectWebSocket();
    };
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axiosInstance.get("/api/notifications/unread");

      const unique = response.data.filter(
        (n, i, arr) => i === arr.findIndex((x) => x.id === n.id)
      );

      setNotifications(unique);
      setUnreadCount(unique.length);

      unique.forEach((n) => seenIds.current.add(n.id));
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  /** ----------------------------------------------------
   *  CONNECT WEBSOCKET
   * ---------------------------------------------------- */
  const connectWebSocket = () => {
    const token = localStorage.getItem("token");
    if (!token) return console.error("No token for websocket");

    if (stompClientRef.current?.connected) return;

    try {
      const socket = new SockJS(`${BASE_URL}/ws`);
      const stompClient = Stomp.over(socket);

      stompClient.connect(
        { Authorization: `Bearer ${token}` },

        () => {
          console.log("WS Connected (notifications)");
          setIsConnected(true);
          stompClientRef.current = stompClient;

          const subscription = stompClient.subscribe(
            "/user/queue/notifications",
            (message) => {
              const notification = JSON.parse(message.body);

              // Avoid duplicates
              if (seenIds.current.has(notification.id)) return;

              seenIds.current.add(notification.id);

              setNotifications((prev) => [notification, ...prev]);
              setUnreadCount((prev) => prev + 1);

              playNotificationSound();
            }
          );

          subscriptionRef.current = subscription;
        },

        (error) => {
          console.error("WS error:", error);
          setIsConnected(false);
          setTimeout(connectWebSocket, 5000); // retry
        }
      );
    } catch (error) {
      console.error("WS connection failed:", error);
    }
  };

  const disconnectWebSocket = () => {
    subscriptionRef.current?.unsubscribe();
    stompClientRef.current?.disconnect();
    setIsConnected(false);
  };

  const playNotificationSound = () => {
    const audio = new Audio("/notification-sound.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  /** ----------------------------------------------------
   *  MARK AS READ
   * ---------------------------------------------------- */
  const markAsRead = async (id) => {
    try {
      await axiosInstance.put(`/api/notifications/${id}/read`);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Mark as read error:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await axiosInstance.put("/api/notifications/read-all");
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error("Failed to mark all read:", error);
    }
  };

  /** ----------------------------------------------------
   *  ON CLICK → OPEN CHAT OR ADMIN CHAT
   * ---------------------------------------------------- */
  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);

    const senderId = notification.senderId;
    const senderRole = notification.senderRole;
    const userRole = user?.role;

    // If the notification is from an ADMIN → open admin chat
    if (senderRole === "ADMIN") {
      console.log("Opening admin chat…");

      window.dispatchEvent(
        new CustomEvent("openAdminChat", { detail: { adminId: senderId } })
      );

      return;
    }

    // Other senders → open direct chat
    if (userRole === "PROVIDER") {
      localStorage.setItem("activeTab", "6");
      window.location.href = "/provider-dashboard";
    } else if (userRole === "ADMIN") {
      localStorage.setItem("activeTab", "4");
      window.location.href = "/admin-dashboard";
    } else {
      window.location.href = `/chat/${senderId}`;
    }
  };

  /** ----------------------------------------------------
   *  UTIL FUNCTIONS
   * ---------------------------------------------------- */
  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    const now = new Date();
    const diff = now - date;

    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return date.toLocaleDateString();
  };

  const truncateMessage = (msg, len = 40) =>
    msg?.length > len ? msg.slice(0, len) + "…" : msg;

  /** ----------------------------------------------------
   *  RENDER
   * ---------------------------------------------------- */
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        <FiBell className="text-2xl text-gray-700" />

        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}

        {isConnected && (
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border z-50 max-h-[500px] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <h3 className="font-bold text-lg">
              Notifications {unreadCount > 0 && `(${unreadCount})`}
            </h3>

            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="overflow-y-auto flex-1">
            {notifications.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <FiBell className="mx-auto text-5xl text-gray-300 mb-3" />
                <p>No new notifications</p>
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => handleNotificationClick(n)}
                  className={`p-4 border-b cursor-pointer transition ${
                    !n.isRead ? "bg-blue-50/50" : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                      {n.senderName?.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{n.senderName}</p>
                      <p className="text-sm text-gray-700">
                        {truncateMessage(n.messageContent)}
                      </p>
                      <p className="text-xs text-gray-400">{formatTime(n.sentAt)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t text-center">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  window.location.href = "/notifications";
                }}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatNotifications;
