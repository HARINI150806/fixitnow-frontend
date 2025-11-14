import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaTools, FaShower, FaWrench, FaHome } from "react-icons/fa";
import tools from "../../images/tools.png";

export default function Home() {
  const categories = [
    { name: "Electrician", icon: <FaBolt /> },
    { name: "Plumber", icon: <FaShower /> },
    { name: "Carpenter", icon: <FaTools /> },
    { name: "General Repair", icon: <FaWrench /> },
    { name: "Home Services", icon: <FaHome /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND MATCHING LOGIN PAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${tools})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* NAVBAR - SAME COLORFUL AESTHETIC */}
      <header className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-20">
        <div className="flex items-center space-x-2 text-white">
          <div className="relative w-10 h-10">
            <FaHome className="text-white w-full h-full" />
            <FaWrench className="text-purple-400 w-5 h-5 absolute bottom-0 right-0" />
          </div>
          <span className="text-2xl font-bold drop-shadow-lg">FixItNow</span>
        </div>

        <div className="flex gap-4">
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
          Home Repairs, Fast & Reliable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-lg mt-4 max-w-2xl opacity-90 drop-shadow-lg"
        >
          Trusted electricians, plumbers, carpenters & home service professionals – just a few clicks away.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <Link
            to="/login"
            className="px-10 py-3 text-lg rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-xl hover:scale-110 transition"
          >
            Get Started (Login Required)
          </Link>
        </motion.div>

        {/* ICONS ROW - MATCHING LOGIN PAGE STYLE */}
        <div className="flex space-x-8 mt-16 text-white text-4xl drop-shadow-xl">
          <FaBolt className="hover:text-indigo-300 transition" />
          <FaWrench className="hover:text-indigo-300 transition" />
          <FaTools className="hover:text-indigo-300 transition" />
          <FaShower className="hover:text-indigo-300 transition" />
          <FaHome className="hover:text-indigo-300 transition" />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="relative z-10 py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-white drop-shadow mb-8">
          Popular Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center bg-white/20 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-xl hover:bg-white/30 hover:scale-105 transition cursor-pointer"
            >
              <div className="text-4xl text-white">{cat.icon}</div>
              <p className="text-white mt-3 font-semibold">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVIDER CTA */}
      <section className="relative z-10 py-20 text-center">
        <h3 className="text-3xl font-bold text-white drop-shadow mb-4">
          Are You a Service Provider?
        </h3>
        <p className="text-white opacity-90 max-w-lg mx-auto mb-6">
          Join FixItNow to connect with real customers and grow your business quickly.
        </p>

        <Link
          to="/signup"
          className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:scale-110 transition shadow-lg"
        >
          Become a Provider
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-8 text-white opacity-80">
        © 2025 FixItNow. All rights reserved.
      </footer>

    </div>
  );
}
