"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, X } from "lucide-react";

const CheckPrices = ({ onClose }: { onClose: () => void }) => {
  const [bookingType, setBookingType] = useState("room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="relative w-full rounded-2xl bg-white/95 shadow-2xl border border-gray-200 p-4 md:p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Check Prices & Availability
          </h2>
          <p className="text-sm text-gray-500">
            Plan your stay, dining, or event with ease 🌴
          </p>
        </div>

        {/* Booking Type Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-5">
          {[
            { label: "Room Stay", value: "room" },
            { label: "Restaurant Table", value: "table" },
            { label: "Event / Party", value: "event" },
          ].map((tab) => (
            <Button
              key={tab.value}
              variant={bookingType === tab.value ? "default" : "outline"}
              className={`text-xs md:text-sm ${
                bookingType === tab.value
                  ? "bg-amber-500 text-white"
                  : "hover:bg-amber-100"
              }`}
              onClick={() => setBookingType(tab.value)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          {/* Check In */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Check In</label>
            <div className="relative">
              <CalendarDays
                className="absolute left-2 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Check Out */}
          {bookingType === "room" && (
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Check Out</label>
              <div className="relative">
                <CalendarDays
                  className="absolute left-2 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
          )}

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Guests</label>
            <div className="relative">
              <Users className="absolute left-2 top-2.5 text-gray-400" size={18} />
              <input
                type="number"
                value={guests}
                min={1}
                max={10}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Rooms (only for room booking) */}
          {bookingType === "room" && (
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Rooms</label>
              <input
                type="number"
                value={rooms}
                min={1}
                max={5}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          )}

          {/* Event Type (if event) */}
          {bookingType === "event" && (
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Event Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Anniversary</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-end mt-2">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full lg:w-auto">
              Show Prices
            </Button>
          </div>
        </div>

        {/* Subtle Animated Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-gray-500 mt-4 text-center"
        >
          No charges applied until booking is confirmed.
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckPrices;