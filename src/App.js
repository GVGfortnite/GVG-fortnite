
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <div className="p-6 text-center text-xl">Welcome to GVG - Good Vibes Gaming! We are a Fortnite Ballistics Clan dedicated to high-level gameplay, fun, and community. Check out what we’re about!</div>;
}

function About() {
  return <div className="p-6 text-lg">GVG (Good Vibes Gaming) is a competitive Fortnite Ballistics Mode clan focused on teamwork, skill, and spreading good vibes. Founded in 2025, we’ve quickly become known for our high energy, tactical gameplay, and welcoming community.</div>;
}

function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
}

function Bio() {
  const members = [
    { name: "CryoMattyX", role: "Founder & Team Captain", bio: "Clutch master and sniper demon." },
    { name: "NOTJAGS", role: "Sniper Specialist", bio: "One shot, one wipe." },
    { name: "CallMeKris", role: "Strategist & Talker", bio: "Talks big, plays bigger." }
  ];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((m, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{m.name}</h3>
            <p className="italic">{m.role}</p>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Shop() {
  return <div className="p-6 text-center">Merch shop coming soon! Stay tuned for GVG gear.</div>;
}

function Gallery() {
  return <div className="p-6 text-center">Gallery of clutch plays, wipeouts, and insane clips coming soon!</div>;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 flex justify-center gap-6 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/bio">Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}
