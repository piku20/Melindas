// Base Interfaces
export interface Pricing {
  amount: number;
  currency: string;
  period: string;
}

export interface Inclusion {
  name: string;
  description?: string;
}

export interface Capacity {
  min: number;
  max: number;
  unit: string;
}

// Discriminated Union Types
export interface BaseVenueService {
  id: string;
  name: string;
  description: string;
  pricing: Pricing;
  capacity: Capacity;
  inclusions: Inclusion[];
  restrictions?: string[];
  images: string[];
  category: "venue" | "accommodation" | "entertainment";
}

export interface FunctionHallService extends BaseVenueService {
  type: "function-hall";
  duration: {
    hours: number;
    extensionFee: number;
    extensionUnit: string;
  };
}

export interface HotelRoomService extends BaseVenueService {
  type: "hotel-room";
  roomType: "standard" | "premium" | "deluxe" | "family";
  bedConfiguration: string[];
  amenities: string[];
  duration?: never; // Hotel rooms don't have duration like function halls
}

export interface KTVRoomService extends BaseVenueService {
  type: "ktv-room";
  roomSize: "small" | "medium" | "large";
  duration: {
    hours: number;
    extensionFee: number;
    extensionUnit: string;
  };
  consumablesIncluded: boolean;
  consumablesAmount?: number;
  ktvCharge?: number;
}

// Union Type for all services
export type VenueService = FunctionHallService | HotelRoomService | KTVRoomService;

// Main Data Structure
export type VenueServices = VenueService[];