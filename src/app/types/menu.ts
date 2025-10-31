// Interfaces for Menu Variants and Options
export interface MenuVariant {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuOption {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// Main Menu Item Interface
export interface MenuItem {
  id: string;
  name: string;
  basePrice?: number;
  image: string;
  thumbnail: string;
  type: "simple" | "with-options" | "size-variants" | "flavor-variants" | string; // remove string for production
  variants?: MenuVariant[];
  options?: MenuOption[];
  description?: string;
  variantLabel?: string;
}

// Menu Category Interface
export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// Main Menu Data Type
export type MenuData = MenuCategory[];

// Cart-related Interfaces
export interface CartItem {
  itemId: string;
  itemName: string;
  selectedOption?: string;
  selectedVariant?: string;
  quantity: number;
  price: number;
  image: string;
  categoryId: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Order-related Interfaces
export interface OrderItem {
  itemId: string;
  itemName: string;
  selectedOption?: string;
  selectedVariant?: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "ready" | "completed";
  createdAt: Date;
  customerName?: string;
  customerPhone?: string;
}

// Utility Types for Filtering/Searching
export type MenuItemType = MenuItem["type"];

export type CategoryId = 
  | "all"
  | "snacks"
  | "burgers-sandwiches"
  | "desserts"
  | "cakes"
  | "drinks"
  | "veggies"
  | "chicken"
  | "beef"
  | "noodles"
  | "rice"
  | "pork";
