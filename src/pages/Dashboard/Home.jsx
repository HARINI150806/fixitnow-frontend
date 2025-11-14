import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

// Images
import toolsBg from "../../images/tools.png";
import cleaning from "../../images/cleaning.png";
import plumbing from "../../images/plumbing.png";
import electrician from "../../images/electrician.png";
import painting from "../../images/painting.png";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const services = [
    { name: "Cleaning", img: cleaning },
    { name: "Plumbing", img: plumbing },
    { name: "Electrician", img: electrician },
    { name: "Painting", img: painting },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${toolsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating effects */}
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

      {/* HEADER */}
      <div className="relative z-20 flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          FixIt<span className="text-orange-400">Now</span>
        </h1>

        {!isLoggedIn && (
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
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-12">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center backdrop-blur-2xl bg-white/10 border border-white/20 
          rounded-3xl p-10 shadow-xl"
        >
          <h1 className="text-5xl font-extrabold leading-snug drop-shadow-md">
            Find Trusted Services<br />
            Near You
          </h1>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Plumbers, electricians, cleaning experts — book instantly in your neighborhood.
          </p>

          {/* SEARCH BAR — SHOWN ONLY IF LOGGED IN */}
          {isLoggedIn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => navigate("/services")}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r 
                from-orange-500 to-purple-600 hover:scale-105 transition shadow-lg"
              >
                Explore Nearby Services
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* POPULAR SERVICES */}
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
                    Reliable, trained professionals ready to help.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 mb-20">
          <button
            onClick={() => navigate(isLoggedIn ? "/services" : "/register")}
            className="px-10 py-4 text-xl rounded-xl text-white font-bold 
            bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-110 
            transition shadow-xl flex items-center gap-3 mx-auto"
          >
            {isLoggedIn ? "Explore Services" : "Get Started"} <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
