//TODO: This design is bad for small screens

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VenueService } from "@/app/types/venue";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface BookingPayload {
  serviceId: string;
  name: string;
  date: string;
  time: string;
  duration?: number;
  guests?: number;
  price: number;
}

interface Props {
  service: VenueService | null;
  open: boolean;
  onClose: () => void;
  onBook: (payload: BookingPayload) => void;
}

export default function BookingModal({ service, open, onClose, onBook }: Props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState<number>(
    service?.type === "hotel-room" ? 1 : service?.duration?.hours ?? 1
  );
  const [guests, setGuests] = useState<number>(service?.capacity?.min ?? 1);
  const [imageIndex, setImageIndex] = useState(0);
  const [errors, setErrors] = useState<{ date?: string; time?: string }>({});

  useEffect(() => {
    if (open) {
      setDate("");
      setTime("");
      setDuration(
        service?.type === "hotel-room" ? 1 : service?.duration?.hours ?? 1
      );
      setGuests(service?.capacity?.min ?? 1);
      setImageIndex(0);
      setErrors({});
    }
  }, [open, service]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImageIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight")
        setImageIndex((i) =>
          service ? (i + 1) % Math.max(1, service.images.length) : i
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, service, onClose]);

  if (!service) return null;

  const images =
    service.images && service.images.length
      ? service.images
      : ["/service/placeholder.jpg"];

  const nextImage = () => setImageIndex((i) => (i + 1) % images.length);
  const prevImage = () => setImageIndex((i) => (i - 1 + images.length) % images.length);

  const formattedMoney = (v: number) =>
    v.toLocaleString("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
    });

  const validateAndBook = () => {
    const e: { date?: string; time?: string } = {};
    if (!date) e.date = "Please choose a date";
    if (!time) e.time = "Please choose a time";
    setErrors(e);
    if (Object.keys(e).length) return;

    onBook({
      serviceId: service.id,
      name: service.name,
      date,
      time,
      duration: service.type === "hotel-room" ? undefined : duration,
      guests,
      price: service.pricing.amount,
    });
  };

  const totalPrice =
    service.type === "hotel-room"
      ? service.pricing.amount * (duration || 1)
      : service.pricing.amount;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="p-0 w-full md:max-w-5xl h-[95vh] md:h-auto md:max-h-[92vh] rounded-2xl overflow-hidden bg-white shadow-2xl"
      >
        <VisuallyHidden>
          <DialogTitle>{service.name}</DialogTitle>
        </VisuallyHidden>
        
        <div className="flex flex-col md:flex-row h-full">
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-100 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                                
                <Image
                  src={
                    service.images?.[imageIndex]
                      ? `/service/${service.images[imageIndex]}`
                      : "/service/placeholder.jpg"
                  }
                  alt={`${service.name} ${imageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:scale-105 transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:scale-105 transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-800" />
                </button>
              </>
            )}

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 bg-white/90 p-1.5 rounded-full shadow-md hover:scale-105 transition"
            >
              <X className="w-4 h-4 text-gray-800" />
            </button>
          </div>

          {/* RIGHT CONTENT SECTION - FIXED WITH SCROLLABLE CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col min-h-0 max-h-screen overflow-y-scroll">
            {/* Scrollable Content Area */}
            <div className="flex-1 max-h-[80vh] overflow-y-scroll p-5 md:p-6">
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{service.description}</p>

              {/* Capacity and Duration */}
              <div className="flex flex-wrap gap-2 mt-3 text-sm">
                <div className="bg-gray-50 border rounded-full px-3 py-1">
                  Capacity: {service.capacity.min}-{service.capacity.max}{" "}
                  {service.capacity.unit}
                </div>
                {service.duration && (
                  <div className="bg-gray-50 border rounded-full px-3 py-1">
                    Duration: {service.duration.hours} hrs
                  </div>
                )}
              </div>

              {/* Inclusions */}
              {service.inclusions?.length ? (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">Inclusions</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {service.inclusions.map((inc, i) => (
                      <li key={i}>
                        {inc.name}
                        {inc.description ? ` — ${inc.description}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Booking Form */}
              <div className="mt-5 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-700 font-medium">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 ${
                        errors.date
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-gray-200 focus:ring-amber-200"
                      }`}
                    />
                    {errors.date && (
                      <p className="text-rose-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-gray-700 font-medium">Time</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 ${
                        errors.time
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-gray-200 focus:ring-amber-200"
                      }`}
                    />
                    {errors.time && (
                      <p className="text-rose-500 text-xs mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Guests / Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.type !== "hotel-room" && (
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Duration (hrs)
                      </label>
                      <input
                        type="number"
                        value={duration}
                        min={1}
                        onChange={(e) =>
                          setDuration(Math.max(1, Number(e.target.value)))
                        }
                        className="mt-1 w-full rounded-md border px-3 py-2 text-sm border-gray-200 focus:ring-amber-200 focus:outline-none"
                      />
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-medium text-gray-700">
                      Guests
                    </label>
                    <input
                      type="number"
                      value={guests}
                      min={service.capacity.min}
                      max={service.capacity.max}
                      onChange={(e) =>
                        setGuests(
                          Math.min(
                            service.capacity.max,
                            Math.max(service.capacity.min, Number(e.target.value))
                          )
                        )
                      }
                      className="mt-1 w-full rounded-md border px-3 py-2 text-sm border-gray-200 focus:ring-amber-200 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="mt-5 border-t pt-4 text-sm text-gray-800">
                <div className="flex justify-between">
                  <span>Base price</span>
                  <span>{formattedMoney(service.pricing.amount)}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 mt-2">
                  <span>Total</span>
                  <span>{formattedMoney(totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* Sticky Footer - Always visible at bottom */}
            <div className="flex-shrink-0 border-t bg-white p-4 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Total</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formattedMoney(totalPrice)}
                </div>
              </div>
              <Button
                onClick={validateAndBook}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}