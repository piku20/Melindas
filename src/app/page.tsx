"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@ui/button";
import Event from "@components/home/Event";

export default function Page() {
  const services = [
    { title: "Dine In & Takeaway", desc: "Fresh local cuisine, quick service, and comfortable indoor dining." },
    { title: "Outdoor Seating", desc: "Garden and poolside seating — perfect for families and events." },
    { title: "Event Hosting", desc: "Weddings, birthdays, and corporate events with full catering." },
  ];

  const menuHighlights = [
    { name: "Grilled Sea Bass", price: "₱520", desc: "Locally caught — grilled to perfection." },
    { name: "Adobo Sampler", price: "₱320", desc: "Classic Filipino flavor with a modern twist." },
    { name: "Mango Float", price: "₱180", desc: "Signature dessert — fresh mango and cream." },
  ];

  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[70vh] lg:h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
          alt="Resort hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-white max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            Melindas Resort & Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg lg:text-xl text-gray-100 max-w-2xl"
          >
            A cozy, scenic escape in Borongan — where great food, warm hospitality,
            and unforgettable celebrations meet.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">See Menu</Button>
            <Button 
              variant="outline" 
              className="border-white text-black hover:bg-white/10 hover:text-white"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            About Melindas
          </motion.h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Founded in April 2018 (formerly Melinda's Farm), our resort offers
            delicious local cuisine, exceptional service, and a tranquil setting
            with garden and poolside spaces for any occasion.
          </p>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h3 className="text-2xl font-semibold mb-10 text-center">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-8 bg-white rounded-2xl shadow hover:shadow-lg border border-gray-100 text-center"
              >
                <h4 className="font-bold text-lg text-amber-700">{s.title}</h4>
                <p className="mt-3 text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Menu Section ===== */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-semibold">Menu Highlights</h3>
            <a href="/menu" className="text-sm underline text-amber-600">
              View full menu →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-amber-50 shadow border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-gray-800">{m.name}</h5>
                    <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
                  </div>
                  <div className="font-bold text-amber-700">{m.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Events Gallery ===== */}
      <Event images={images} />

      {/* ===== Callout Section ===== */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <h4 className="text-2xl font-semibold">Host your next celebration with us 🎉</h4>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Weddings, birthdays, and reunions — we’ll handle catering, setup, and every detail for a perfect day.
            </p>
            <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white">
              Plan Your Event
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact & Reservations</h3>
            <p className="text-gray-600 mb-6">
              Call or email us to reserve a table or inquire about your next event.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>📍 Circumferential Road, Brgy. Songco, Borongan, Philippines</li>
              <li>📞 +63 917 135 8558</li>
              <li>✉️ melindasresortandrestaurant@gmail.com</li>
            </ul>

            <form className="mt-8 grid gap-3">
              <input type="text" placeholder="Your name" className="p-3 border rounded-md" />
              <input type="email" placeholder="Your email" className="p-3 border rounded-md" />
              <textarea placeholder="Message or reservation details" className="p-3 border rounded-md h-28" />
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Send Message</Button>
            </form>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
            <iframe
              title="Melindas location"
              src="https://www.google.com/maps?q=Borongan%20Philippines&output=embed"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-amber-50 py-6 border-t">
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Melindas Resort & Restaurant — Borongan, Philippines
        </div>
      </footer>
    </main>
  );
}
