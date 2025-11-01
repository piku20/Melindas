"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { MenuItem } from "@/app/types/menu";

interface MenuCardProps {
  item: MenuItem;
  currency: (amount: number) => string;
  addToCart: (item: MenuItem, quantity: number) => void;
  setPreviewItem: (item: MenuItem) => void;
}

const MenuCard: FC<MenuCardProps> = ({ item, currency, addToCart, setPreviewItem }) => {
  return (
    <motion.div
      whileHover={{
        translateY: -4,
        boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
      }}
      className="bg-white rounded-lg overflow-hidden border shadow-sm transition-transform duration-300"
    >
      <div className="relative w-full h-40 sm:h-44 md:h-36 lg:h-40">
        <Image
          src={item.thumbnail ?? "/menu/food_placeholder.png"}
          alt={item.name}
          fill
          className="object-cover"
           
        />
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
            {item.description && (
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            )}
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold">
              {item.type === "simple" && currency(item.basePrice ?? 0)}
              {item.type === "with-options" && <span className="text-xs text-gray-600">Choose</span>}
              {item.type === "size-variants" && <span className="text-xs text-gray-600">Size</span>}
              {item.type === "flavor-variants" && <span className="text-xs text-gray-600">Flavor</span>}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  if (item.type === "simple") addToCart(item, 1);
                  else setPreviewItem(item);
                }}
                className="text-xs"
              >
                {item.type === "simple" ? "Add" : "Customize"}
              </Button>

              <Button
                size="icon"
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => setPreviewItem(item)}
                aria-label={`Preview ${item.name}`}
              >
                ▶
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;