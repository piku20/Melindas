"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

const FloatingCartButton: FC<FloatingCartButtonProps> = ({ itemCount, onClick }) => {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Button
        onClick={onClick}
        size="lg"
        className="rounded-full shadow-lg relative flex items-center gap-2"
      >
        <ShoppingBag className="w-5 h-5" />
        Cart
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </motion.div>
  );
};

export default FloatingCartButton;
