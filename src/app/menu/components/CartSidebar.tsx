"use client";

import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/app/types/menu";

interface CartSidebarProps {
  cart: CartItem[];
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartSidebar: FC<CartSidebarProps> = ({ cart, open, onClose, onCheckout }) => {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay for mobile */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/30 md:hidden"
          />

          {/* Sidebar / Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-lg">Your Order 🛒</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 && (
                <p className="text-gray-500 text-sm text-center mt-10">Your cart is empty.</p>
              )}
              {cart.map((item) => (
                <div
                  key={item.itemId + (item.selectedVariant ?? "")}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h4 className="font-medium text-sm">{item.itemName}</h4>
                    {item.selectedVariant && (
                      <p className="text-xs text-gray-500">{item.selectedVariant}</p>
                    )}
                    <p className="text-xs text-gray-600">x{item.quantity}</p>
                  </div>
                  <div className="text-sm font-semibold text-amber-600">
                    ₱{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between font-semibold mb-3">
                  <span>Total:</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600" onClick={onCheckout}>
                  Checkout
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;