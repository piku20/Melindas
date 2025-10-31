"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { VenueService } from "@/app/types/venue";

interface Props {
  services: VenueService[];
  onBook: (service: VenueService) => void;
}

export default function ServiceGrid({ services, onBook }: Props) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((svc) => (
        <ServiceCard key={svc.id} service={svc} onBook={onBook} />
      ))}
    </motion.div>
  );
}
