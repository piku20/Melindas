"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@ui/button";
import Nav from "@components/navigation/Nav";
import Event from "@components/home/Event";

// --- Simple types ---
type Service = { title: string; desc: string; icon?: string };

const services: Service[] = [
  { title: "Dine In & Takeaway", desc: "Fresh local cuisine, quick service and comfortable indoor dining." },
  { title: "Outdoor Seating", desc: "Garden and poolside seating — perfect for families and events." },
  { title: "Event Hosting", desc: "Weddings, birthdays and corporate get-togethers. Full catering available." },
];

const menuHighlights = [
  { name: "Grilled Sea Bass", price: "₱520", desc: "Locally caught - grilled to perfection" },
  { name: "Adobo Sampler", price: "₱320", desc: "Classic Filipino flavor with a modern twist" },
  { name: "Mango Float", price: "₱180", desc: "Signature dessert — fresh mango and cream" },
];

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white text-gray-900 antialiased">
    
      

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Melindas Resort & Restaurant</h2>
            <p className="mt-4 text-lg text-gray-700">A cozy, scenic escape on Circumferential Road — where great food, warm hospitality and unforgettable celebrations meet.</p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#menu" className="px-4 py-2 rounded-md bg-amber-500 text-white inline-block">See Menu</a>
              <a href="#gallery" className="px-4 py-2 rounded-md border border-gray-200 inline-block">View Gallery</a>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>📍 Circumferential Road, Brgy. Songco, Borongan, Philippines, 6800</li>
              <li>📞 +63 917 135 8558 • ✉️ melindasresortandrestaurant@gmail.com</li>
              <li>⏰ Closed now • Price range: ££</li>
            </ul>
          </motion.div>

          <motion.div initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-72 md:h-96">
              <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop" alt="Resort hero" fill style={{ objectFit: 'cover' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold">About Melindas</h3>
            <p className="mt-4 text-gray-600">Founded on April 1, 2018 (formerly Melinda's Farm), Melindas Resort & Restaurant offers fresh local cuisine, friendly service and multiple event spaces including garden and poolside seating.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-4 py-12">
        <h4 className="text-xl font-semibold mb-6">What we offer</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article key={i} whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-gradient-to-br from-white to-amber-50 border border-gray-100 shadow">
              <h5 className="font-bold">{s.title}</h5>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-semibold">Menu Highlights</h4>
            <a href="menu" className="text-sm underline">Full menu (PDF)</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuHighlights.map((m, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-white border shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="font-semibold">{m.name}</h6>
                    <p className="text-sm text-gray-600">{m.desc}</p>
                  </div>
                  <div className="text-sm font-bold">{m.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event */}
      <Event
        images = {images}
      />

      {/* Testimonials / Callout */}
      <section className="py-12 bg-gradient-to-r from-amber-100 to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="rounded-2xl p-8 md:p-12 shadow-lg bg-white">
            <h5 className="text-xl font-semibold">Host your next celebration with us</h5>
            <p className="mt-3 text-gray-600">Weddings, birthdays, reunions — we handle catering, decorations and a seamless guest experience. Contact our events team to plan your special day.</p>
            <div className="mt-4">
              <a href="#contact" className="px-4 py-2 rounded-md bg-amber-500 text-white inline-block">Plan an Event</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Reservation */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold">Contact & Reservations</h4>
            <p className="mt-2 text-gray-600">Call or email to reserve a table or inquire about events.</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Address: Circumferential Road, Brgy. Songco, Borongan, Philippines, 6800</li>
              <li>Phone: +63 917 135 8558</li>
              <li>Email: melindasresortandrestaurant@gmail.com</li>
              <li>Open hours: Closed now (update in admin)</li>
            </ul>

            <div className="mt-6">
              <form className="grid grid-cols-1 gap-3">
                <input type="text" placeholder="Your name" className="input input-bordered w-full p-3 rounded-md border" />
                <input type="email" placeholder="Your email" className="input input-bordered w-full p-3 rounded-md border" />
                <textarea placeholder="Message / reservation details" className="input input-bordered w-full p-3 rounded-md border h-32" />
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-amber-500 text-white">Send message</button>
                  <a href="tel:+639171358558" className="px-4 py-2 rounded-md border">Call now</a>
                </div>
              </form>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow h-80 relative">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Borongan%20Philippines&output=embed"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Melindas Resort & Restaurant • Circumferential Road, Brgy. Songco, Borongan, Philippines
        </div>
      </footer>
    </main>
  );
}
