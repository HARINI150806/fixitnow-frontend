import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Wrench, MapPin, MessageCircle, CheckCircle } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Electrician", icon: "⚡" },
    { name: "Plumber", icon: "🔧" },
    { name: "Carpenter", icon: "🪚" },
    { name: "Appliance Repair", icon: "🛠️" },
    { name: "Painter", icon: "🎨" },
    { name: "Mechanic", icon: "🚗" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-blue-600">FixItNow</h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
          >
            Signup
          </Link>
        </div>
      </header>

      {/* HERO SECTION WITH BACKGROUND */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091215367-59ab6a419c33?auto=format&fit=crop&w=1400&q=60')",
        }}
      >
        <div className="backdrop-blur-sm bg-black/40 p-10 rounded-xl max-w-3xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Fast, Trusted Home Service Providers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-xl opacity-90"
          >
            FixItNow connects you with nearby electricians, plumbers, carpenters, and repair experts.
          </motion.p>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/login"
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-gray-200"
            >
              Get Started (Login Required)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Popular Service Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer text-center"
            >
              <span className="text-4xl mb-2">{cat.icon}</span>
              <p className="font-semibold text-gray-700 mt-2">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white border-t">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How FixItNow Works
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: <MapPin size={45} />, title: "Find Services Near You", desc: "Discover trusted providers around your area." },
            { icon: <Wrench size={45} />, title: "Choose a Service", desc: "View reviews, pricing, & previous work." },
            { icon: <MessageCircle size={45} />, title: "Book & Connect", desc: "Login required for booking and live chat." },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md text-center"
            >
              <div className="text-blue-600 mx-auto">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { count: "10,000+", label: "Happy Customers" },
            { count: "1,000+", label: "Verified Providers" },
            { count: "25+", label: "Service Categories" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold">{stat.count}</h3>
              <p className="text-lg mt-2 opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Aarav", text: "FixItNow helped me find an electrician in minutes. Super fast service!" },
            { name: "Pooja", text: "The plumber I booked was professional and quick. Highly recommended!" },
            { name: "Rahul", text: "Great platform for home services. Transparent pricing and trusted providers." },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg rounded-xl"
            >
              <Star className="text-yellow-400 mb-3" size={30} />
              <p className="text-gray-700">"{review.text}"</p>
              <h4 className="font-semibold text-gray-900 mt-4">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVIDER CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Are You a Service Provider?</h2>
        <p className="mt-3 text-lg opacity-90">
          Join FixItNow and grow your business with verified customers.
        </p>

        <Link
          to="/signup"
          className="mt-8 inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200"
        >
          Become a Provider
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 FixItNow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
