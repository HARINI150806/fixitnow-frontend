import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaSearch,
  FaChevronRight,
  FaUserCircle,
} from "react-icons/fa";

// Your images
import toolsBg from "../../images/tools.png";
import cleaning from "../../images/cleaning.png";
import plumbing from "../../images/plumbing.png";
import electrician from "../../images/electrician.png";
import painting from "../../images/painting.png";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { name: "Cleaning", img: cleaning },
    { name: "Plumbing", img: plumbing },
    { name: "Electrician", img: electrician },
    { name: "Painting", img: painting },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${toolsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating glowing shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 60, y: -50 }}
        transition={{ duration: 1.5 }}
        className="absolute top-24 left-10 w-40 h-40 bg-orange-500/20 blur-2xl rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -40, y: 40 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-24 right-20 w-56 h-56 bg-purple-600/20 blur-3xl rounded-full"
      ></motion.div>

      {/* Header */}
      <div className="relative z-20 flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          FixIt<span className="text-orange-400">Now</span>
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-lg font-semibold bg-white/10 
            border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r 
            from-orange-500 to-purple-600 hover:scale-105 transition shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center backdrop-blur-2xl bg-white/10 border border-white/20 
          rounded-3xl p-10 shadow-xl"
        >
          <h1 className="text-5xl font-extrabold leading-snug drop-shadow-md">
            Fast, Trusted Home Services <br /> Near You
          </h1>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Book expert plumbers, electricians, cleaners & repair professionals in minutes.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center bg-white/15 border border-white/20 px-4 py-3 
            rounded-xl backdrop-blur-xl w-full sm:w-72">
              <FaMapMarkerAlt className="text-orange-300 text-xl mr-3" />
              <input
                type="text"
                placeholder="Enter your location"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
              />
            </div>

            <div className="flex items-center bg-white/15 border border-white/20 px-4 py-3 
            rounded-xl backdrop-blur-xl w-full sm:w-72">
              <FaSearch className="text-purple-300 text-xl mr-3" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
              />
            </div>

            <button
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r 
              from-orange-500 to-purple-600 hover:scale-105 transition shadow-lg"
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Popular Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-300">
            Popular Services
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                onClick={() => navigate(`/service/${s.name.toLowerCase()}`)}
                className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 
                rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-orange-300">{s.name}</h3>
                  <p className="text-gray-300 mt-1 text-sm">
                    Trusted professionals near you.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 mb-20">
          <button
            onClick={() => navigate("/register")}
            className="px-10 py-4 text-xl rounded-xl text-white font-bold 
            bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-110 
            transition shadow-xl flex items-center gap-3 mx-auto"
          >
            Get Started <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
