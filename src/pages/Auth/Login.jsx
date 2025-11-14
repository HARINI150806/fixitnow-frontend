import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBroom,
  FaTools,
  FaBolt,
  FaPaintBrush,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

import toolsBg from "../../images/tools.png";

export default function Home({ customer }) {
  const navigate = useNavigate();
  const isLoggedIn = !!customer;

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${toolsBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl"
        >
          <h1 className="text-5xl font-bold drop-shadow-sm">
            {isLoggedIn ? `Welcome, ${customer.name}` : "FixItNow Services"}
          </h1>

          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
            Professional home services delivered by trusted experts — quick,
            reliable, and always nearby.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-6 py-3 rounded-lg font-semibold text-white 
                  bg-gradient-to-r from-indigo-500 to-purple-600 
                  hover:scale-105 transition shadow-lg"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="px-6 py-3 rounded-lg font-semibold text-white 
                  bg-gradient-to-r from-orange-500 to-orange-700 
                  hover:scale-105 transition shadow-lg"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/customer-dashboard")}
                className="px-6 py-3 rounded-lg font-semibold text-white 
                bg-gradient-to-r from-orange-500 to-orange-700 
                hover:scale-105 transition shadow-lg"
              >
                Go to Dashboard
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Popular Services */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Popular Services</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Cleaning", icon: <FaBroom /> },
            { name: "Repairs", icon: <FaTools /> },
            { name: "Electrical", icon: <FaBolt /> },
            { name: "Painting", icon: <FaPaintBrush /> },
          ].map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() =>
                navigate(`/service/${service.name.toLowerCase()}`)
              }
              className="cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20
              rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition"
            >
              <div className="text-orange-300 text-5xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose FixItNow?</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Verified Experts", icon: <FaShieldAlt /> },
            { title: "Quick Booking", icon: <FaClock /> },
            { title: "Top Rated", icon: <FaStar /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-orange-300 text-4xl mb-3">{item.icon}</div>
              <p className="text-lg font-medium text-white">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-xl text-center py-4 text-gray-300">
        © {new Date().getFullYear()} FixItNow — All Rights Reserved.
      </footer>
    </div>
  );
}
