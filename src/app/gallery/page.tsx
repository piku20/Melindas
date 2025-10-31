"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-3 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
          Our Gallery
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore the serene beauty of Melindas Resort & Restaurant ✨
        </p>
      </div>

      {/* ===== Responsive Grid ===== */}
      <div
        className="
          columns-2 sm:columns-3 md:columns-4 xl:columns-5
          gap-3 md:gap-4 space-y-3 md:space-y-4
        "
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* ===== Image Lightbox ===== */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white hover:text-amber-400 transition"
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[80vh] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images[selectedIndex]}
                alt={`Selected image ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;