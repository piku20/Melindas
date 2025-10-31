"use client";

import { useState, useEffect } from "react";
import { useMenuFilter } from "@hooks/useMenuFilter";
import CategoryBar from "./components/CategoryBar";
import MenuGrid from "./components/MenuGrid";
import SearchBar from "./components/SearchBar";
import { menu } from "./data/MENU";
import ItemPreviewModal from "./components/ItemPreviewModal";
import { MenuItem, CartItem } from "@/app/types/menu";
import CartSidebar from "./components/CartSidebar";
import { ShoppingCart } from "lucide-react";

export default function MenuPage() {
  const {
    activeCategory,
    setActiveCategory,
    query,
    setQuery,
    visibleItems,
  } = useMenuFilter(menu);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🛒 Add to Cart function
  const addToCart = (item: MenuItem, quantity: number) => {
    const variant =
      item.variants && item.variants.length > 0 ? item.variants[0].name : undefined;

    const price =
      item.type === "simple"
        ? item.basePrice ?? 0
        : item.variants?.find((v) => v.name === variant)?.price ?? 0;

    const newCartItem: CartItem = {
      itemId: item.id,
      itemName: item.name,
      selectedVariant: variant,
      quantity,
      price,
      image: item.image ?? item.thumbnail ?? "/menu/placeholder.jpg",
      categoryId: activeCategory,
    };

    setCart((prev) => [...prev, newCartItem]);
    console.log("🛒 Added to cart:", newCartItem);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-1 pb-10 relative">
      {/* Search Bar */}
      <section className="container mx-auto px-4 mt-4 mb-1">
        <SearchBar query={query} setQuery={setQuery} />
      </section>

      {/* Category Bar */}
      <CategoryBar
        categories={[{ id: "all", name: "All" }, ...menu.map((c) => ({ id: c.id, name: c.name }))]}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Menu Grid */}
      <section className="container mx-auto px-4">
        <MenuGrid
          items={visibleItems}
          currency={(amt) => `₱${amt.toFixed(2)}`}
          addToCart={addToCart}
          setPreviewItem={setPreviewItem}
        />
      </section>

      {/* Floating Cart Button (Mobile only) */}
      {!isLargeScreen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 bg-amber-500 text-white rounded-full p-4 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
          {cart.length > 0 && (
            <span className="ml-1 text-sm font-semibold">({cart.length})</span>
          )}
        </button>
      )}

      {/* Sidebar Cart */}
      <CartSidebar
        cart={cart}
        open={cartOpen || isLargeScreen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => alert("Proceeding to checkout...")}
      />

      {/* Item Preview Modal */}
      {previewItem && (
        <ItemPreviewModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
          addToCart={addToCart}
        />
      )}
    </main>
  );
}
