"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded-full bg-muted p-6 mb-4">
        <UtensilsCrossed className="w-10 h-10 text-muted-foreground" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && <p className="text-muted-foreground mt-2 max-w-sm">{description}</p>}
    </motion.div>
  );
};

export default EmptyState;
