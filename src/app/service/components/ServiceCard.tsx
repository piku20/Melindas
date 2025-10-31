"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VenueService } from "@/app/types/venue";
import { Users, Clock } from "lucide-react";

interface Props {
  service: VenueService;
  onBook: (service: VenueService) => void;
}

export default function ServiceCard({ service, onBook }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all max-w-sm mx-auto"
    >
      {/* 📸 Image */}
      <div className="relative h-56 sm:h-60 md:h-64">
        <Image
          src={
            service.images && service.images.length > 0
              ? `/service/${service.images[0]}`
              : "/service/placeholder.jpg"
          }
          alt={service.name}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {service.category.toUpperCase()}
        </div>

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-amber-700 font-semibold text-lg px-3 py-1.5 rounded-xl shadow border border-amber-100">
          ₱
          {service.pricing.amount.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          <span className="text-xs text-gray-600 font-normal">
            {" "}
            / {service.pricing.period}
          </span>
        </div>
      </div>

      {/* 🧾 Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 leading-snug">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {service.description}
        </p>

        {/* Key Info */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-800 mb-3">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-600" />
            <span>
              {service.capacity.min}-{service.capacity.max}{" "}
              {service.capacity.unit}
            </span>
          </div>

          {service.type !== "hotel-room" && (
            <>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>
                  ₱
                  {service?.duration?.extensionFee?.toLocaleString("en-PH", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  / {service?.duration?.extensionUnit ?? "hour"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Inclusions */}
        {service.inclusions && service.inclusions.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-amber-700 mb-1">
              Inclusions
            </h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-0.5">
              {service.inclusions.slice(0, 3).map((inc, idx) => (
                <li key={idx}>{inc.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Button
          onClick={() => onBook(service)}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium py-2.5 rounded-lg shadow-md transition-all"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}
