"use client";

import { FC, useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuItem } from "@/app/types/menu";
import { RadioGroup, RadioGroupItem } from "@ui/radio-group";
import { Label } from "@ui/label";
import { motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ItemPreviewModalProps {
  item: MenuItem;
  onClose: () => void;
  addToCart: (item: MenuItem, quantity: number) => void;
}

const ItemPreviewModal: FC<ItemPreviewModalProps> = ({
  item,
  onClose,
  addToCart,
}) => {
  if (!item) return null;

  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const price = useMemo(() => {
    if (item.type === "simple") return item.basePrice ?? 0;
    if (item.variants && selectedVariant) {
      const variant = item.variants.find((v) => v.name === selectedVariant);
      return variant?.price ?? item.basePrice ?? 0;
    }
    return item.basePrice ?? 0;
  }, [item, selectedVariant]);

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="
          max-w-3xl w-full p-0 overflow-hidden rounded-2xl shadow-2xl
          bg-white md:flex md:flex-col
        "
      >
        <VisuallyHidden>
          <DialogTitle>{item.name}</DialogTitle>
        </VisuallyHidden>
        
        {/* 🖼️ Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden"
        >
          <Image
            src={item.image ?? item.thumbnail ?? "/menu/placeholder.jpg"}
            alt={item.name}
            fill
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            priority
          />
          {/* 🔹 Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          {/* 🔹 Floating Title */}
          <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {item.name}
            </h2>
            {item.basePrice && (
              <p className="text-lg text-amber-300 font-bold mt-1">
                ₱{price.toFixed(2)}
              </p>
            )}
          </div>
        </motion.div>

        {/* 🧾 Content Section */}
        <div className="px-5 sm:px-8 py-6 bg-white">
          {/* Description */}
          {item.description && (
            <DialogHeader>
              <DialogDescription className="text-gray-600 leading-relaxed">
                {item.description}
              </DialogDescription>
            </DialogHeader>
          )}

          {/* 💰 Price (for small screens where title overlays image) */}
          <div className="md:hidden mt-3 mb-4 text-xl font-bold text-amber-600">
            ₱{price.toFixed(2)}
          </div>

          {/* 🧩 Variants */}
          {item.variants && item.variants.length > 0 && (
            <div className="mt-4 mb-5">
              <h4 className="font-semibold text-gray-800 mb-3">
                Choose {item.variantLabel ?? "Option"}:
              </h4>
              <RadioGroup
                onValueChange={setSelectedVariant}
                value={selectedVariant ?? ""}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {item.variants.map((variant) => (
                  <Label
                    key={variant.name}
                    htmlFor={variant.name}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 cursor-pointer transition-all ${
                      selectedVariant === variant.name
                        ? "border-amber-500 bg-amber-50 ring-1 ring-amber-400"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        id={variant.name}
                        value={variant.name}
                        className="text-amber-600"
                      />
                      <span className="text-sm sm:text-base font-medium">
                        {variant.name}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-gray-600">
                      ₱{variant.price.toFixed(2)}
                    </span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* 🛒 Add to Cart Button */}
          <div className="mt-6 border-t pt-5">
            <Button
              className="w-full py-3 text-base bg-amber-500 hover:bg-amber-600 transition-colors"
              onClick={() => {
                addToCart(item, 1);
                onClose();
              }}
              disabled={
                item.variants && item.variants.length > 0 && !selectedVariant
              }
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemPreviewModal;
