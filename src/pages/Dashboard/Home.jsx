import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaSearch,
  FaTools,
  FaBolt,
  FaBroom,
  FaPaintBrush,
  FaChevronRight,
} from "react-icons/fa";

import toolsBg from "../../images/tools.png";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { name: "Electrician", icon: <FaBolt /> },
    { name: "Plumber", icon: <FaTools /> },
    { name: "Cleaning", icon: <FaBroom /> },
    { name: "Painting", icon: <FaPaintBrush /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${toolsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 50, y: -30 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -50, y: 30 }}
        transition={{ duration: 2 }}
        className="absolute bottom-32 right-24 w-56 h-56 rounded-full bg-indigo-500/20 blur-2xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl text-center"
        >
          <h1 className="text-5xl font-extrabold drop-shadow-md">
            FixItNow — Your Neighborhood Service Hub
          </h1>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Book trusted electricians, plumbers, cleaners, and repair experts in minutes.
            Smart. Fast. Nearby.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center bg-white/15 border border-white/20 px-4 py-3 rounded-xl backdrop-blur-xl w-full sm:w-72">
              <FaMapMarkerAlt className="text-orange-300 text-xl mr-3" />
              <input
                type="text"
                placeholder="Enter your location"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
              />
            </div>

            <div className="flex items-center bg-white/15 border border-white/20 px-4 py-3 rounded-xl backdrop-blur-xl w-full sm:w-72">
              <FaSearch className="text-indigo-300 text-xl mr-3" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
              />
            </div>

            <button
              className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r 
              from-orange-500 to-purple-600 hover:scale-105 transition shadow-lg"
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Popular Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-300">
            Popular Services Near You
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/service/${s.name.toLowerCase()}`)}
                className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 
                p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition text-center"
              >
                <div className="text-5xl text-orange-300 mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="text-gray-300 mt-1 text-sm">
                  Trusted professionals available near you.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-300">
            How FixItNow Works
          </h2>

          <div className="grid gap-10 md:grid-cols-3 text-center">
            {[
              {
                step: "1",
                title: "Search Services",
                desc: "Find nearby electricians, plumbers, cleaners, and more.",
              },
              {
                step: "2",
                title: "Book Instantly",
                desc: "Choose a timeslot and confirm your service.",
              },
              {
                step: "3",
                title: "Get it Done",
                desc: "A verified expert arrives and completes the job.",
              },
            ].map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 rounded-2xl"
              >
                <div className="text-4xl font-extrabold text-orange-400 mb-3">
                  {w.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                <p className="text-gray-300">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 mb-20">
          <button
            onClick={() => navigate("/register")}
            className="px-10 py-4 text-xl rounded-xl text-white font-bold 
            bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-110 transition shadow-xl flex items-center gap-3 mx-auto"
          >
            Get Started <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
