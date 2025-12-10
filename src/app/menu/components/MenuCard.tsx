"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { MenuItem } from "@/app/types/menu";
import { 
  Play ,
  ShoppingCart,
  Settings,
} from 'lucide-react'
import useMediaQuery from "@hooks/use-media-query";

interface MenuCardProps {
  item: MenuItem;
  currency: (amount: number) => string;
  addToCart: (item: MenuItem, quantity: number) => void;
  setPreviewItem: (item: MenuItem) => void;
}

const MenuCard: FC<MenuCardProps> = ({ item, currency, addToCart, setPreviewItem }) => {
  
  const isSmallScreen = useMediaQuery('(max-width: 480px)');
  const isVerySmallScreen = useMediaQuery('(max-width: 360px)');
  const isMediumScreen = useMediaQuery('(min-width: 481px)');

   // Get button text based on screen size
    const getButtonText = () => {
      if (isVerySmallScreen) {
        return item.type === "simple" ? "" : ""; // Icon only
      }
      if (isSmallScreen) {
        return item.type === "simple" ? "Add" : "Custom";
      }
      return item.type === "simple" ? "Add to Cart" : "Customize";
    };

    const shouldShowText = !isVerySmallScreen;
  
  return (
    <motion.div
      whileHover={{
        translateY: -4,
        boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
      }}
      className="bg-white rounded-lg overflow-hidden border shadow-sm transition-transform duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative w-full h-40 sm:h-44 md:h-36 lg:h-40 shrink-0">
        <Image
          src={item.thumbnail ?? "/menu/food_placeholder.png"}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 grow flex flex-col">
        {/* Top section: Name, description, and price */}
        <div className="grow">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-semibold text-sm sm:text-base line-clamp-2 grow">
              {item.name}
            </h3>
            
            <div className="text-right shrink-0 ml-2">
              <div className="text-sm font-semibold whitespace-nowrap">
                {item.type === "simple" && currency(item.basePrice ?? 0)}
                {item.type === "with-options" && (
                  <span className="text-xs text-gray-600">Choose</span>
                )}
                {item.type === "size-variants" && (
                  <span className="text-xs text-gray-600">Size</span>
                )}
                {item.type === "flavor-variants" && (
                  <span className="text-xs text-gray-600">Flavor</span>
                )}
              </div>
            </div>
          </div>

          {item.description && (
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom section: Buttons */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (item.type === "simple") addToCart(item, 1);
              else setPreviewItem(item);
            }}
            className="flex items-center justify-center gap-1.5 grow min-w-0"
            aria-label={item.type === "simple" ? "Add to Cart" : "Customize"}
          >
            {item.type === "simple" ? (
                <ShoppingCart className="h-3.5 w-3.5 shrink-0" />
              ) : (
                <Settings className="h-3.5 w-3.5 shrink-0" />
              )}
              {shouldShowText && (
                <span className="truncate">{getButtonText()}</span>
            )}
          </Button>

          <Button
            size="icon"
            className="bg-amber-500 hover:bg-amber-600 text-white shrink-0 h-9 w-9"
            onClick={() => setPreviewItem(item)}
            aria-label={`Preview ${item.name}`}
          >
            <Play className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;