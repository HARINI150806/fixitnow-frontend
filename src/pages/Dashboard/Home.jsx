import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaTools, FaWrench, FaHome, FaStar, FaUserTie } from "react-icons/fa";

import tools from "../../images/tools.png";
import {
  getTopServices,
  getTopProviders,
  getAnalyticsSummary,
} from "../../services/api";

export default function Home() {
  const [topServices, setTopServices] = useState([]);
  const [topProviders, setTopProviders] = useState([]);
  const [analytics, setAnalytics] = useState({});

  // Fetch dynamic data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceRes = await getTopServices();
        setTopServices(serviceRes.data || []);

        const providerRes = await getTopProviders();
        setTopProviders(providerRes.data || []);

        const statsRes = await getAnalyticsSummary();
        setAnalytics(statsRes.data || {});
      } catch (err) {
        console.error("Failed to load home page data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${tools})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* NAVBAR */}
      <header className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-20">
        <div className="flex items-center space-x-2 text-white">
          <div className="relative w-10 h-10 drop-shadow-lg">
            <FaHome className="text-white w-full h-full" />
            <FaWrench className="text-purple-400 w-5 h-5 absolute bottom-0 right-0" />
          </div>
          <span className="text-2xl font-bold drop-shadow-lg">FixItNow</span>
        </div>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 text-white rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-white rounded-md bg-white/20 hover:bg-white/30 hover:scale-105 transition shadow-md backdrop-blur-sm"
          >
            Signup
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
        >
          Trusted Home Repairs, Anytime.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-lg mt-4 max-w-2xl opacity-90 drop-shadow-lg"
        >
          Fast and reliable professionals for all your home service needs.
          Book electricians, plumbers, carpenters, and more.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/login"
            className="px-10 py-3 text-lg rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-xl hover:scale-110 transition"
          >
            Get Started (Login Required)
          </Link>
        </motion.div>

        <div className="flex space-x-8 mt-16 text-white text-4xl drop-shadow-xl">
          <FaBolt className="hover:text-indigo-300 transition" />
          <FaWrench className="hover:text-indigo-300 transition" />
          <FaTools className="hover:text-indigo-300 transition" />
          <FaHome className="hover:text-indigo-300 transition" />
        </div>
      </section>

      {/* ANALYTICS SECTION */}
      <section className="relative z-20 py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Total Users", count: analytics.totalUsers || 0 },
            { label: "Total Services", count: analytics.totalServices || 0 },
            { label: "Bookings Completed", count: analytics.completedBookings || 0 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-white drop-shadow">{item.count}</h3>
              <p className="mt-2 text-white text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOP SERVICES */}
      <section className="relative z-20 py-12 px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
          Popular Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topServices.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <FaTools className="text-white text-4xl mb-3" />
              <h3 className="text-xl font-semibold text-white">{service.category}</h3>
              <p className="text-white/80 text-sm mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOP PROVIDERS */}
      <section className="relative z-20 py-12 px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
          Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topProviders.slice(0, 3).map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <FaUserTie className="text-white text-4xl mb-3" />
              <h3 className="text-xl font-semibold text-white">{provider.name}</h3>
              <p className="text-white/80">Rating: ⭐ {provider.averageRating || 0}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVIDER CTA */}
      <section className="relative z-20 py-20 text-center">
        <h3 className="text-3xl font-bold text-white drop-shadow mb-4">
          Are You a Service Provider?
        </h3>
        <p className="text-white opacity-90 max-w-lg mx-auto mb-6">
          Join FixItNow and earn more by connecting with real customers every day.
        </p>

        <Link
          to="/signup"
          className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:scale-110 transition shadow-lg"
        >
          Become a Provider
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 text-center py-8 text-white opacity-80">
        © 2025 FixItNow. All rights reserved.
      </footer>
    </div>
  );
}
