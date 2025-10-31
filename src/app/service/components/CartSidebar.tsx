"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  cart: any[];
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartSidebar({ cart, open, onClose, onCheckout }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col"
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Bookings</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 && <p className="text-gray-500 text-sm">No bookings yet.</p>}
            {cart.map((item) => (
              <div key={item.serviceId + item.date} className="border rounded-lg p-3">
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-600">{item.date} at {item.time}</p>
                <p className="text-sm text-amber-600 font-semibold mt-1">₱{item.price}</p>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="p-4 border-t">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" onClick={onCheckout}>
                Checkout
              </Button>
            </div>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
