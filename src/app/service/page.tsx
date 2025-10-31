"use client";

import { useState, useMemo, useEffect } from "react";
import { venueServices } from "./data/VENUE";
import { VenueService } from "@/app/types/venue";
import { serviceImage } from "./utils/utils";
import BookingModal from "./components/BookingModal";
import CartSidebar from "./components/CartSidebar";
import ServiceFilter from "./components/ServiceFilter";
import ServiceGrid from "./components/ServiceGrid";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | "venue" | "accommodation" | "entertainment">("all");
  const [selectedService, setSelectedService] = useState<VenueService | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { id: "all", name: "All" },
    { id: "venue", name: "Venues" },
    { id: "accommodation", name: "Hotel Rooms" },
    { id: "entertainment", name: "KTV Rooms" },
  ];

  const filteredServices = useMemo(() => {
    return venueServices.filter((svc) => {
      const matchCategory = category === "all" || svc.category === category;
      const matchQuery = svc.name.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const handleBook = (service: VenueService) => {
    setSelectedService(service);
  };

  const confirmBooking = (booking: any) => {
    setCart((prev) => [...prev, booking]);
    setSelectedService(null);
    setCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Book Your Perfect Experience 🌴
        </h1>

        <ServiceFilter
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />

        <ServiceGrid services={filteredServices} onBook={handleBook} />
      </div>

      {/* Floating Cart for mobile */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white text-xl rounded-full p-4 shadow-lg z-50 md:hidden"
      >
        🛒
        {cart.length > 0 && (
          <span className="ml-1 text-sm font-semibold">({cart.length})</span>
        )}
      </button>

      <CartSidebar
        cart={cart}
        open={cartOpen || isLargeScreen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => alert("Proceeding to checkout...")}
      />

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          service={selectedService}
          open={true}
          onClose={() => setSelectedService(null)}
          onBook={confirmBooking}
        />
      )}
    </main>
  );
}
