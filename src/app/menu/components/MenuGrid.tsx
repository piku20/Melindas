import { FC } from "react";
import { MenuItem } from "@/app/types/menu";
import MenuCard from "./MenuCard";
import EmptyState from "./EmptyState";

interface MenuGridProps {
  items: MenuItem[];
  currency: (amount: number) => string;
  addToCart: (item: MenuItem, qty: number) => void;
  setPreviewItem: (item: MenuItem) => void;
}

const MenuGrid: FC<MenuGridProps> = ({ items, currency, addToCart, setPreviewItem }) => {
  if (!items || items.length === 0)
    return (
      <EmptyState
        title="No items found 🍽️"
        description="We couldn't find any menu items here. Try selecting another category or search again."
      />
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          currency={currency}
          addToCart={addToCart}
          setPreviewItem={setPreviewItem}
        />
      ))}
    </div>
  );
};

export default MenuGrid;