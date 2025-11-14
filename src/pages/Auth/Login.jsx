import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaWrench,
  FaTools,
  FaBolt,
  FaShower,
} from "react-icons/fa";
import cleaning from "../../images/cleaning.png";
import plumbing from "../../images/plumbing.png";
import electrician from "../../images/electrician.png";
import painting from "../../images/painting.png";
import toolsBg from "../../images/tools.png";

const rustBrown = "#6e290c"; // matches login theme

const Home = ({ customer, onExploreClick }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!customer;

  const services = [
    { name: "Cleaning", img: cleaning },
    { name: "Plumbing", img: plumbing },
    { name: "Electrician", img: electrician },
    { name: "Painting", img: painting },
  ];

  return (
    <div className="relative min-h-screen text-gray-800 flex flex-col overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{ backgroundImage: `url(${toolsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
        <div className="relative w-10 h-10">
          <FaHome className="text-white w-full h-full" />
          <FaWrench className="text-black w-5 h-5 absolute bottom-0 right-0" />
        </div>
        <span className="text-white font-bold text-xl">FixItNow</span>
      </div>

      {/* Icons Row */}
      <div className="relative z-10 flex space-x-6 mb-4 mt-20 justify-center text-white text-3xl">
        <FaHome className="hover:text-orange-300 transition" />
        <FaWrench className="hover:text-orange-300 transition" />
        <FaTools className="hover:text-orange-300 transition" />
        <FaBolt className="hover:text-orange-300 transition" />
        <FaShower className="hover:text-orange-300 transition" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto mt-4 bg-white/10 backdrop-blur-xl shadow-2xl max-w-2xl p-10 rounded-2xl border border-white/20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Welcome {isLoggedIn ? customer?.name : "to FixItNow!"}
        </h1>

        <p className="text-white/90 mt-4 text-lg">
          {isLoggedIn
            ? "Find trusted professionals near you and get your tasks done easily."
            : "Login or Sign Up to access fast, reliable home services!"}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition transform hover:scale-105 bg-gradient-to-r from-indigo-500 to-purple-600"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition transform hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-700"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition transform hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-700"
            >
              Explore Services
            </button>
          )}
        </div>
      </motion.div>

      {/* Popular Services */}
      <div className="relative z-10 px-6 mt-16 pb-20">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow mb-10">
          Popular Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() =>
                navigate(`/service/${service.name.toLowerCase()}`)
              }
              className="cursor-pointer bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-white drop-shadow">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-lg text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">FixItNow</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Quick, reliable home services at your doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Help Center</li>
              <li>How it Works</li>
              <li>Safety</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Email: support@fixitnow.app</li>
              <li>Phone: +91 98765 43210</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="px-6 py-3 text-xs text-center text-gray-300">
            © {new Date().getFullYear()} FixItNow — All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
