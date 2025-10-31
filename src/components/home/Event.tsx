"use client";

import Image from "next/image";
import { FC } from "react";

interface Props{
    images: string[];
};

const Event:FC<Props> = ({
    images
}) => {
  

  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <h4 className="text-2xl font-semibold mb-8 text-gray-800 tracking-tight text-center">
        Memorable Events at Melinda’s Resort
      </h4>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            <Image
              src={`/event/${src}`}
              alt={`Event ${i + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
