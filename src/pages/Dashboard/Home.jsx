import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import tools from "../../images/tools.png";
import plumbing from "../../images/plumbing.png";
import cleaning from "../../images/cleaning.png";
import electrician from "../../images/electrician.png";
import carpenter from "../../images/carpenter.png";
// import mechanic from "../../images/mechanic.png";
// import worker from "../../images/worker.png";

import {
  FaBolt,
  FaTools,
  FaHammer,
  FaHome,
  FaWrench,
  FaShower,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  const categories = [
    { name: "Plumbing", image: plumbing },
    { name: "Cleaning", image: cleaning },
    { name: "Electrician", image: electrician },
    { name: "Carpentry", image: carpenter },
    { name: "General Repair", image: tools },
    // { name: "Mechanic", image: mechanic },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${tools})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* NAVBAR */}
      <header className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-30">
        <div className="flex items-center space-x-3 text-white drop-shadow-lg">
          <FaHome className="text-white text-3xl" />
          <span className="text-2xl font-bold">FixItNow</span>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 text-white rounded-md bg-gradient-to-r 
              from-indigo-500 to-purple-600 hover:scale-105 transition shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-white rounded-md bg-white/20 
              hover:bg-white/30 hover:scale-105 transition shadow-md backdrop-blur-sm"
          >
            Signup
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
        >
          Fast & Trusted Home Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-lg mt-4 max-w-2xl opacity-90 drop-shadow-lg"
        >
          Electricians, Plumbers, Carpenters & Cleaners – your home service
          experts are just a tap away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/login"
            className="px-10 py-3 text-lg rounded-xl bg-gradient-to-r 
            from-purple-500 to-indigo-600 text-white font-semibold 
            shadow-xl hover:scale-110 transition"
          >
            Book a Service (Login Required)
          </Link>
        </motion.div>

        {/* FLOATING IMAGES */}
        <div className="absolute left-10 bottom-20 w-40 opacity-80">
          <motion.img
            src={plumbing}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div className="absolute right-10 bottom-28 w-40 opacity-80">
          <motion.img
            src={electrician}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="rounded-2xl shadow-xl"
          />
        </div>

      </section>

      {/* POPULAR SERVICES */}
      <section className="relative z-20 py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-white drop-shadow mb-8">
          Popular Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl 
                         hover:bg-white/30 hover:scale-105 shadow-xl cursor-pointer transition"
            >
              <img
                src={cat.image}
                className="h-20 w-full object-contain mx-auto"
              />
              <p className="text-white text-center mt-3 font-semibold">
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-20 py-16 px-6">
        <h3 className="text-3xl font-bold text-white text-center mb-10 drop-shadow">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          {[
            {
              title: "Choose a Service",
              image: electrician,
              desc: "Select the type of service you need.",
            },
            {
              title: "Login & Book",
              image: tools,
              desc: "Experience quick booking with verified professionals.",
            },
            {
              title: "Get It Fixed",
              image: plumbing,
              desc: "Sit back and relax while our experts handle the job.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl"
            >
              <img src={item.image} className="h-24 mx-auto rounded-lg" />
              <h4 className="text-white text-xl font-semibold mt-4">{item.title}</h4>
              <p className="text-white/80 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-20 py-16 text-center px-6">
        <h3 className="text-3xl font-bold text-white drop-shadow mb-10">
          Why Choose FixItNow?
        </h3>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            "Verified Professionals",
            "Fast Doorstep Service",
            "Secure Online Payments",
            "24×7 Customer Support",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20"
            >
              <FaStar className="text-yellow-300 text-4xl mx-auto" />
              <p className="text-white font-semibold mt-2">{text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-20 py-16 px-6">
        <h3 className="text-3xl font-bold text-white text-center mb-10 drop-shadow">
          What Our Users Say
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              text: "Plumber arrived exactly on time and fixed my issue quickly!",
              img: plumbing,
              name: "Priya S.",
            },
            {
              text: "Electrician was professional, friendly and fast.",
              img: electrician,
              name: "Raj K.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  className="h-16 w-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <p className="text-white">{item.text}</p>
                  <p className="text-white/70 text-sm mt-1">— {item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVIDER CTA */}
      <section className="relative z-20 py-20 text-center px-6">
        <img
          src={worker}
          className="h-40 mx-auto mb-6 opacity-80 drop-shadow-lg"
        />

        <h3 className="text-3xl font-bold text-white drop-shadow mb-4">
          Are You a Service Provider?
        </h3>
        <p className="text-white opacity-90 max-w-lg mx-auto mb-6">
          Join FixItNow to connect with real customers and grow your service business.
        </p>

        <Link
          to="/signup"
          className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
          text-white rounded-xl hover:scale-110 transition shadow-lg"
        >
          Become a Provider
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 text-center py-8 text-white opacity-80">
        © 2025 FixItNow — All Rights Reserved.
      </footer>
    </div>
  );
}
