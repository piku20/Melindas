import { useMemo, useState } from "react";
import { MenuData, MenuItem } from "@/app/types/menu";

export const useMenuFilter = (menu: MenuData) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo<MenuItem[]>(() => {
    const q = query.trim().toLowerCase();

    const allItems = activeCategory === "all"
      ? menu.flatMap((c) => c.items)
      : menu.find((c) => c.id === activeCategory)?.items ?? [];

    return allItems.filter((it) => it.name.toLowerCase().includes(q));
  }, [menu, activeCategory, query]);

  return { activeCategory, setActiveCategory, query, setQuery, visibleItems };
};
