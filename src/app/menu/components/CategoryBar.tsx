"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface CategoryBarProps {
  categories: { id: string; name: string }[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  setQuery?: (q: string) => void; // ✅ optional prop
}

const CategoryBar: FC<CategoryBarProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  setQuery,
}) => {
  return (
    <motion.div
      className="sticky top-1 z-30 bg-white/70 backdrop-blur-md py-3 border-b border-gray-200 flex flex-wrap justify-center gap-2 px-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {categories.map((c) => {
        const active = c.id === activeCategory;
        return (
          <button
            key={c.id}
            onClick={() => {
              setActiveCategory(c.id);
              if (setQuery) setQuery(""); // ✅ reset search when category changes
            }}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              active
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : "bg-white text-gray-700 hover:bg-amber-50 border-gray-200"
            }`}
          >
            {c.name}
          </button>
        );
      })}
    </motion.div>
  );
};

export default CategoryBar;
