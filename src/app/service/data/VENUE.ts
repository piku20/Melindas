import { VenueServices } from "@/app/types/venue";

export const venueServices: VenueServices = [
  // FUNCTION HALLS
  {
    id: "function-hall-small",
    type: "function-hall",
    name: "Small Function Hall",
    description: "Intimate function hall perfect for small gatherings and meetings",
    pricing: {
      amount: 6000.00,
      currency: "PHP",
      period: "8 hours"
    },
    capacity: {
      min: 20,
      max: 30,
      unit: "guests"
    },
    duration: {
      hours: 8,
      extensionFee: 500.00,
      extensionUnit: "hour"
    },
    inclusions: [
      { name: "Sound system with microphones" },
      { name: "Tables and chairs" },
      { name: "Projector" }
    ],
    restrictions: [],
    images: ["function_hall_small.png"],
    category: "venue"
  },

  {
    id: "function-hall-big",
    type: "function-hall",
    name: "Big Function Hall",
    description: "Spacious function hall suitable for medium-sized events and conferences",
    pricing: {
      amount: 8000.00,
      currency: "PHP",
      period: "8 hours"
    },
    capacity: {
      min: 50,
      max: 60,
      unit: "guests"
    },
    duration: {
      hours: 8,
      extensionFee: 800.00,
      extensionUnit: "hour"
    },
    inclusions: [
      { name: "Sound system with microphones" },
      { name: "Tables and chairs" },
      { name: "Projector" }
    ],
    restrictions: [],
    images: ["function_hall_big.png"],
    category: "venue"
  },

  {
    id: "garden-area",
    type: "function-hall",
    name: "Garden Area",
    description: "Spacious function hall suitable for medium-sized events and conferences",
    pricing: {
      amount: 10000.00,
      currency: "PHP",
      period: "8 hours"
    },
    capacity: {
      min: 100,
      max: 160,
      unit: "guests"
    },
    duration: {
      hours: 8,
      extensionFee: 1000.00,
      extensionUnit: "hour"
    },
    inclusions: [
      { name: "Sound system with microphones" },
      { name: "Tables and chairs" },
      { name: "Projector" }
    ],
    restrictions: [],
    images: ["garden_area.png"],
    category: "venue"
  },
  {
    id: "function-hall-grand",
    type: "function-hall",
    name: "Grand Function Hall",
    description: "Grand function hall ideal for large events, weddings, and corporate functions",
    pricing: {
      amount: 25000.00,
      currency: "PHP",
      period: "8 hours"
    },
    capacity: {
      min: 170,
      max: 200,
      unit: "guests"
    },
    duration: {
      hours: 8,
      extensionFee: 1500.00,
      extensionUnit: "hour"
    },
    inclusions: [
      { name: "Sound system with microphones" },
      { name: "Tables and chairs" },
      { name: "Projector" }
    ],
    restrictions: [],
    images: ["function_hall_grand.png"],
    category: "venue"
  },

  // HOTEL ROOMS
  {
    id: "hotel-standard",
    type: "hotel-room",
    name: "Standard Hotel Room",
    description: "Comfortable standard room with matrimonial/double bed",
    pricing: {
      amount: 2000.00,
      currency: "PHP",
      period: "per night"
    },
    capacity: {
      min: 2,
      max: 2,
      unit: "pax"
    },
    roomType: "standard",
    bedConfiguration: ["Matrimonial/Double Bed"],
    amenities: ["Breakfast included", "Pool access"],
    inclusions: [
      { name: "Breakfast" },
      { name: "Pool access" }
    ],
    restrictions: [],
    images: ["hotel_room_standard.png"],
    category: "accommodation"
  },
  {
    id: "hotel-premium",
    type: "hotel-room",
    name: "Premium Hotel Room",
    description: "Premium room with choice of double bed or twin single beds",
    pricing: {
      amount: 2000.00,
      currency: "PHP",
      period: "per night"
    },
    capacity: {
      min: 2,
      max: 2,
      unit: "pax"
    },
    roomType: "premium",
    bedConfiguration: ["Double Bed or Twin Single Bed"],
    amenities: ["Breakfast included", "Pool access"],
    inclusions: [
      { name: "Breakfast" },
      { name: "Pool access" }
    ],
    restrictions: [],
    images: ["hotel_room_premium.png"],
    category: "accommodation"
  },
  {
    id: "hotel-deluxe",
    type: "hotel-room",
    name: "Deluxe Hotel Room",
    description: "Spacious family room with multiple beds, perfect for groups",
    pricing: {
      amount: 2000.00,
      currency: "PHP",
      period: "per night"
    },
    capacity: {
      min: 2,
      max: 2,
      unit: "pax"
    },
    roomType: "deluxe",
    bedConfiguration: ["Twin Single Beds"],
    amenities: ["Breakfast included", "Pool access"],
    inclusions: [
      { name: "Breakfast" },
      { name: "Pool access" }
    ],
    restrictions: [],
    images: ["hotel_room_deluxe.png"],
    category: "accommodation"
  },
  {
    id: "hotel-family",
    type: "hotel-room",
    name: "Family Hotel Room",
    description: "Spacious family room with multiple beds, perfect for groups",
    pricing: {
      amount: 8000.00,
      currency: "PHP",
      period: "per night"
    },
    capacity: {
      min: 8,
      max: 8,
      unit: "pax"
    },
    roomType: "family",
    bedConfiguration: ["2 Double Deck Beds", "2 Double Beds"],
    amenities: ["Breakfast included", "Pool access"],
    inclusions: [
      { name: "Breakfast" },
      { name: "Pool access" }
    ],
    restrictions: [],
    images: ["hotel_room_family.png"],
    category: "accommodation"
  },

  // KTV ROOMS
  {
    id: "ktv-1",
    type: "ktv-room",
    name: "KTV Room 1",
    description: "Standard KTV room for small groups",
    pricing: {
      amount: 1800.00,
      currency: "PHP",
      period: "3 hours"
    },
    capacity: {
      min: 4,
      max: 6,
      unit: "pax"
    },
    duration: {
      hours: 3,
      extensionFee: 500.00,
      extensionUnit: "hour"
    },
    roomSize: "small",
    consumablesIncluded: true,
    consumablesAmount: 1500.00,
    ktvCharge: 300.00,
    inclusions: [
      { name: "KTV system" },
      { name: "Consumables credit: ₱1,500.00" }
    ],
    restrictions: ["Outside food and drinks are not allowed"],
    images: ["ktv1.png"],
    category: "entertainment"
  },
  {
    id: "ktv-2",
    type: "ktv-room",
    name: "KTV Room 2",
    description: "Standard KTV room for small groups",
    pricing: {
      amount: 1800.00,
      currency: "PHP",
      period: "3 hours"
    },
    capacity: {
      min: 4,
      max: 6,
      unit: "pax"
    },
    duration: {
      hours: 3,
      extensionFee: 500.00,
      extensionUnit: "hour"
    },
    roomSize: "small",
    consumablesIncluded: true,
    consumablesAmount: 1500.00,
    ktvCharge: 300.00,
    inclusions: [
      { name: "KTV system" },
      { name: "Consumables credit: ₱1,500.00" }
    ],
    restrictions: ["Outside food and drinks are not allowed"],
    images: ["ktv2.png"],
    category: "entertainment"
  },
  {
    id: "ktv-3-4-5",
    type: "ktv-room",
    name: "KTV Rooms 3, 4 & 5",
    description: "Large KTV rooms perfect for bigger groups and parties",
    pricing: {
      amount: 3500.00,
      currency: "PHP",
      period: "3 hours"
    },
    capacity: {
      min: 8,
      max: 12,
      unit: "pax"
    },
    duration: {
      hours: 3,
      extensionFee: 500.00,
      extensionUnit: "hour"
    },
    roomSize: "large",
    consumablesIncluded: true,
    consumablesAmount: 2800.00,
    ktvCharge: 700.00,
    inclusions: [
      { name: "KTV system" },
      { name: "Consumables credit: ₱2,800.00" }
    ],
    restrictions: ["Outside food and drinks are not allowed"],
    images: ["ktv3.png"],
    category: "entertainment"
  }
];