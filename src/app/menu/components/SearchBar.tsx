"use client";

import { FC, ChangeEvent } from "react";
import { Input } from "@ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  className?: string;
}

const SearchBar: FC<SearchBarProps> = ({ query, setQuery, className = "" }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <div
      className={
        "flex items-center gap-3 rounded-full px-3 py-2 bg-white border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-amber-300 transition-all " +
        className
      }
      role="search"
      aria-label="Search menu items"
    >
      <Search className="w-4 h-4 text-gray-400" />
      <Input
        value={query}
        onChange={handleChange}
        placeholder="Search for dishes, e.g., burger, halo-halo..."
        className="bg-transparent border-0 focus-visible:ring-0 placeholder:text-gray-400 text-sm"
        aria-label="Search menu"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          aria-label="Clear search"
          className="text-xs text-gray-500 ml-1 px-2 py-1 rounded-full hover:bg-gray-100 transition"
          title="Clear"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
