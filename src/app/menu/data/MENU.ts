export const menu = [
  {
    id: "snacks",
    name: "Snacks",
    items: [
      {
        id: "half-loaf-bread",
        name: "Half Loaf Bread",
        basePrice: 55.00,
        image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "whole-loaf-bread",
        name: "Whole Loaf Bread",
        basePrice: 110.00,
        image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mojos",
        name: "Mojos",
        basePrice: 100.00,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "cheese-fries",
        name: "Cheese Fries",
        basePrice: 95.00,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "french-fries",
        name: "French Fries",
        basePrice: 90.00,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    items: [
      {
        id: "hamburger",
        name: "Hamburger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 60.00,
            description: "Burger only"
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 95.00,
            description: "Burger with French fries"
          }
        ]
      },
      {
        id: "egg-burger",
        name: "Egg Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 90.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 110.00
          }
        ]
      },
      {
        id: "cheese-burger",
        name: "Cheese Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 90.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 110.00
          }
        ]
      },
      {
        id: "bacon-egg",
        name: "Bacon and Egg",
        image: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 80.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 90.00
          }
        ]
      },
      {
        id: "bacon-cheese",
        name: "Bacon and Cheese",
        image: "https://images.unsplash.com/photo-1525059696034-4967a7290021?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1525059696034-4967a7290021?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 80.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 110.00
          }
        ]
      },
      {
        id: "ham-egg",
        name: "Ham and Egg",
        image: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 70.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 90.00
          }
        ]
      },
      {
        id: "ham-cheese",
        name: "Ham and Cheese",
        image: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1551504739-79a7d87a0ed7?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 80.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 100.00
          }
        ]
      },
      {
        id: "chicken-sandwich",
        name: "Chicken Sandwich",
        image: "https://images.unsplash.com/photo-1550507991-c0c67d59b74c?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1550507991-c0c67d59b74c?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 70.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 85.00
          }
        ]
      },
      {
        id: "tuna-sandwich",
        name: "Tuna Sandwich",
        image: "https://images.unsplash.com/photo-1559847844-5315695d62e4?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1559847844-5315695d62e4?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 70.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 85.00
          }
        ]
      },
      {
        id: "melindas-club-house",
        name: "Melindas Club House",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "with-options",
        options: [
          {
            id: "solo",
            name: "Solo",
            price: 170.00
          },
          {
            id: "with-fries",
            name: "With Fries",
            price: 190.00
          }
        ]
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "buko-shake",
        name: "Buko Shake",
        basePrice: 60.00,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mais-con-yelo",
        name: "Mais Con Yelo",
        basePrice: 80.00,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mango-shake",
        name: "Mango Shake",
        basePrice: 90.00,
        image: "https://images.unsplash.com/photo-1573555353261-41d2cc3077e7?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1573555353261-41d2cc3077e7?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "avocado-shake",
        name: "Avocado Shake",
        basePrice: 110.00,
        image: "https://images.unsplash.com/photo-1633687787602-5d3cbfa69961?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1633687787602-5d3cbfa69961?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "melindas-halo-halo",
        name: "Melindas Halo-Halo",
        basePrice: 120.00,
        image: "https://images.unsplash.com/photo-1562448078-86d07c7604b1?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1562448078-86d07c7604b1?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mango-graham-shake",
        name: "Mango Graham Shake",
        basePrice: 130.00,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "cakes",
    name: "Cake Slices",
    items: [
      {
        id: "carrot-walnut-cake",
        name: "Carrot Walnut Cake",
        basePrice: 170.00,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mango-cake",
        name: "Mango Cake",
        basePrice: 160.00,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "strawberry-cake",
        name: "Strawberry Cake",
        basePrice: 160.00,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "ube-cake",
        name: "Ube Cake",
        basePrice: 160.00,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "red-velvet-cake",
        name: "Red Velvet Cake",
        basePrice: 170.00,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "black-forest-cake",
        name: "Black Forest Cake",
        basePrice: 170.00,
        image: "https://images.unsplash.com/photo-1606890563442-258f61e8ac53?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1606890563442-258f61e8ac53?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "iced-tea",
        name: "Iced Tea",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mug",
            name: "Mug",
            price: 30.00
          },
          {
            id: "pitcher",
            name: "Pitcher",
            price: 100.00
          }
        ]
      },
      {
        id: "pink-lemonade",
        name: "Pink Lemonade",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mug",
            name: "Mug",
            price: 30.00
          },
          {
            id: "pitcher",
            name: "Pitcher",
            price: 100.00
          }
        ]
      },
      {
        id: "blue-lemonade",
        name: "Blue Lemonade",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mug",
            name: "Mug",
            price: 30.00
          },
          {
            id: "pitcher",
            name: "Pitcher",
            price: 100.00
          }
        ]
      },
      {
        id: "cucumber-lemonade",
        name: "Cucumber Lemonade",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mug",
            name: "Mug",
            price: 30.00
          },
          {
            id: "pitcher",
            name: "Pitcher",
            price: 100.00
          }
        ]
      },
      {
        id: "coke",
        name: "Coke",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mismo",
            name: "Mismo",
            price: 30.00
          },
          {
            id: "bottle-1.5",
            name: "1.5L Bottle",
            price: 100.00
          },
          {
            id: "bottle-1.75",
            name: "1.75L Bottle",
            price: 100.00
          }
        ]
      },
      {
        id: "sprite",
        name: "Sprite",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mismo",
            name: "Mismo",
            price: 30.00
          },
          {
            id: "bottle-1.5",
            name: "1.5L Bottle",
            price: 100.00
          },
          {
            id: "bottle-1.75",
            name: "1.75L Bottle",
            price: 100.00
          }
        ]
      },
      {
        id: "royal",
        name: "Royal",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "mismo",
            name: "Mismo",
            price: 30.00
          },
          {
            id: "bottle-1.5",
            name: "1.5L Bottle",
            price: 100.00
          },
          {
            id: "bottle-1.75",
            name: "1.75L Bottle",
            price: 100.00
          }
        ]
      }
    ]
  },
  {
    id: "veggies",
    name: "Veggies",
    items: [
      {
        id: "ampaiya-con-carne",
        name: "Ampaiya con Carne",
        basePrice: 240.00,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "chopsuey",
        name: "Chopsuey",
        basePrice: 240.00,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "mixed-veggies",
        name: "Mixed Veggies",
        basePrice: 220.00,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "chicken",
    name: "Chicken",
    items: [
      {
        id: "half-melindas-chicken",
        name: "Half Melindas Chicken",
        basePrice: 320.00,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "whole-melindas-chicken",
        name: "Whole Melindas Chicken",
        basePrice: 470.00,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "half-buttered-chicken",
        name: "Half Buttered Chicken",
        basePrice: 340.00,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "whole-buttered-chicken",
        name: "Whole Buttered Chicken",
        basePrice: 470.00,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "chicken-katsu",
        name: "Chicken Katsu",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1606755962773-d324e3833248?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1606755962773-d324e3833248?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "assorted-wings",
        name: "Assorted Wings",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "buffalo-wings",
        name: "Buffalo Wings",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple",
        description: "10 pieces"
      },
      {
        id: "garlic-parmesan-wings",
        name: "Garlic Parmesan Wings",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple",
        description: "10 pieces"
      },
      {
        id: "creamy-garlic-wings",
        name: "Creamy Garlic Wings",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple",
        description: "10 pieces"
      }
    ]
  },
  {
    id: "beef",
    name: "Beef",
    items: [
      {
        id: "beef-broccoli",
        name: "Beef Broccoli",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-caldereta",
        name: "Beef Caldereta",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-mushroom",
        name: "Beef Mushroom",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-onion",
        name: "Beef Onion",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-oyster",
        name: "Beef Oyster",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-steak",
        name: "Beef Steak",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "beef-bulalo",
        name: "Beef Bulalo",
        basePrice: 520.00,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      {
        id: "barn-i-special",
        name: "Barn-I Special",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "hotat-soup",
        name: "Hotat Soup",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "lomi-guisado",
        name: "Lomi Guisado",
        basePrice: 190.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "nido-mushroom-soup",
        name: "Nido Mushroom Soup",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pancit-bihon",
        name: "Pancit Bihon",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pancit-canton",
        name: "Pancit Canton",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "quid-egg-soup",
        name: "Quid Egg Soup",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "satanghon-soup",
        name: "Satanghon Soup",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "satanghon-guisado",
        name: "Satanghon Guisado",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f9c0?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      {
        id: "plain-rice",
        name: "Plain Rice",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "cup",
            name: "Cup",
            price: 25.00
          },
          {
            id: "small",
            name: "Small",
            price: 55.00
          },
          {
            id: "bucket",
            name: "Bucket",
            price: 110.00
          }
        ]
      },
      {
        id: "java-rice",
        name: "Java Rice",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "cup",
            name: "Cup",
            price: 40.00
          },
          {
            id: "small",
            name: "Small",
            price: 80.00
          },
          {
            id: "bucket",
            name: "Bucket",
            price: 160.00
          }
        ]
      },
      {
        id: "garlic-rice",
        name: "Garlic Rice",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "size-variants",
        variants: [
          {
            id: "cup",
            name: "Cup",
            price: 35.00
          },
          {
            id: "small",
            name: "Small",
            price: 70.00
          },
          {
            id: "bucket",
            name: "Bucket",
            price: 140.00
          }
        ]
      },
      {
        id: "yangchow-rice",
        name: "Yangchow Rice",
        basePrice: 205.00,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  },
  {
    id: "pork",
    name: "Pork",
    items: [
      {
        id: "fried-ribs",
        name: "Fried Ribs",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-barbeque",
        name: "Pork Barbeque",
        basePrice: 270.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "sizzling-sieig",
        name: "Sizzling Sieig",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-steak",
        name: "Pork Steak",
        basePrice: 320.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-sinigang",
        name: "Pork Sinigang",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "lechan-kawali",
        name: "Lechan Kawali",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "hoisin-spare-ribs",
        name: "Hoisin Spare Ribs",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "grilled-pork-belly",
        name: "Grilled Pork Belly",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "liempo",
        name: "Liempo",
        basePrice: 420.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-kare-kare",
        name: "Pork Kare Kare",
        basePrice: 520.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "crispy-pata",
        name: "Crispy Pata",
        basePrice: 620.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "fried-ribs-garlic-sauce",
        name: "Fried Ribs in Garlic Sauce",
        basePrice: 370.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-fish-sinuglaw",
        name: "Pork & Fish Sinuglaw",
        basePrice: 390.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      },
      {
        id: "pork-katsu",
        name: "Pork Katsu",
        basePrice: 290.00,
        image: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=500&auto=format&fit=crop&q=60",
        thumbnail: "https://images.unsplash.com/photo-1598515216475-e6949154f5c5?w=150&h=100&fit=crop&q=80&fm=webp",
        type: "simple"
      }
    ]
  }
];