import React from "react";
import { Wrench, MapPin, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
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

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fast, Trusted Home Service Providers Near You
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Electricians, plumbers, carpenters, and repair experts at your fingertips.
          </p>

          <div className="mt-8">
            <Link
              to="/login"
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-gray-100"
            >
              Book Now (Login Required)
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Popular Service Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg border flex flex-col items-center cursor-pointer transition"
            >
              <span className="text-4xl mb-2">{cat.icon}</span>
              <p className="font-medium text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white border-t py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          How FixItNow Works
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center">
            <MapPin className="mx-auto text-blue-600" size={45} />
            <h3 className="font-semibold text-xl mt-4">1. Find Nearby Services</h3>
            <p className="text-gray-600 mt-2">
              Discover trusted service providers near your location.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center">
            <Wrench className="mx-auto text-blue-600" size={45} />
            <h3 className="font-semibold text-xl mt-4">2. Choose a Service</h3>
            <p className="text-gray-600 mt-2">
              View provider details, pricing, and customer reviews.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center">
            <MessageCircle className="mx-auto text-blue-600" size={45} />
            <h3 className="font-semibold text-xl mt-4">3. Book & Connect</h3>
            <p className="text-gray-600 mt-2">
              Login to chat and securely book service providers.
            </p>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-blue-700"
          >
            Get Started (Login Required)
          </Link>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Star size={60} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold">Trusted & Verified Professionals</h2>
          <p className="mt-4 text-lg opacity-90">
            Every provider is verified by our admin team to ensure safety & quality.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">&copy; 2025 FixItNow. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
