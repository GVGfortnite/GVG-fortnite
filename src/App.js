import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';

function Home() {
  return (
    <div className="home p-10 text-center">
      <div className="logo-container animate-pulse mb-8">
        <img src="/logo.svg" alt="GVG Logo" className="mx-auto h-32 w-32 animate-spin-slow" />
        <h1 className="text-6xl font-extrabold tracking-wider text-green-400 drop-shadow-lg mt-4">GVG</h1>
        <p className="text-2xl mt-2 text-gray-300 italic">Good Vibes Gaming</p>
      </div>
      <p className="text-xl max-w-2xl mx-auto text-gray-200">
        Welcome to <span className="text-green-400 font-semibold">GVG</span> — a Fortnite Ballistics Clan built on dominance, loyalty, and positive energy. Our mission? Outplay, outlast, and outvibe.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="page p-8 text-gray-100 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-green-400">About GVG</h2>
      <p className="text-lg">
        Founded in 2025, <span className="font-semibold text-green-300">Good Vibes Gaming</span> is more than a clan — it's a community. We focus on high-level tactical play in Fortnite's Ballistics Mode while cultivating a positive, respectful team environment.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page p-8 text-gray-100 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border border-green-500 bg-black text-white rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border border-green-500 bg-black text-white rounded" />
        <textarea placeholder="Your Message" className="p-3 border border-green-500 bg-black text-white rounded"></textarea>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 rounded transition">Send</button>
      </form>
    </div>
  );
}

function Bio() {
  const members = [
    { name: "CryoMattyX", role: "Co-Owner", bio: "Clutch master, bringer of the GOOD VIBES, and fearless co-leader of GVG." },
    { name: "Havoc", role: "Co-Owner", bio: "Strategic genius with ice in his veins — co-leads with precision." },
    { name: "Clutchqueen (Halee)", role: "Chief of Staff", bio: "The heart of the team. Keeps the crew focused, organized, and thriving." }
  ];
  return (
    <div className="page p-6 text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-400">GVG Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="border-2 border-green-500 p-6 rounded-lg bg-gray-800 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-green-400">{m.name}</h3>
            <p className="italic text-gray-300">{m.role}</p>
            <p className="mt-2 text-gray-200">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="page p-8 text-center text-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-green-400">GVG Merch Coming Soon</h2>
      <p className="text-lg">Represent the crew in style — shirts, hoodies, and gear dropping soon. Stay tuned!</p>
    </div>
  );
}

function Gallery() {
  return <div className="page p-6 text-center text-gray-100">Coming soon: GVG’s sickest plays, highlight reels, and community clips!</div>;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
        <nav className="bg-gray-900 p-4 flex justify-center gap-6 text-lg font-semibold shadow-md border-b border-green-500">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About</Link>
          <Link to="/bio" className="hover:text-green-400 transition">Team</Link>
          <Link to="/gallery" className="hover:text-green-400 transition">Gallery</Link>
          <Link to="/shop" className="hover:text-green-400 transition">Shop</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <footer className="bg-gray-900 text-center text-sm text-gray-500 p-4 border-t border-gray-800">
          © {new Date().getFullYear()} GVG - Good Vibes Gaming. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
