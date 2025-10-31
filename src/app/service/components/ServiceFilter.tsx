"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  query: string;
  setQuery: (v: string) => void;
  category: string;
  setCategory: (v: any) => void;
  categories: { id: string; name: string }[];
}

export default function ServiceFilter({
  query,
  setQuery,
  category,
  setCategory,
  categories,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-3 mb-6"
    >
      <Input
        type="text"
        placeholder="🔍 Search services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-80"
      />
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <Button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`rounded-full px-4 ${
              c.id === category ? "bg-amber-500 text-white" : "bg-white text-gray-700 border"
            }`}
            variant="outline"
          >
            {c.name}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
