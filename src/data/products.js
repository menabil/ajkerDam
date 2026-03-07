// Product data for BazaarPrice BD
export const products = [
    {
        id: 1,
        nameBn: "আলু",
        nameEn: "Potato",
        category: "vegetables",
        unit: "কেজি",
        currentPrice: 25,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 22 },
            { date: "2024-01-02", price: 23 },
            { date: "2024-01-03", price: 25 },
            { date: "2024-01-04", price: 24 },
            { date: "2024-01-05", price: 25 }
        ]
    },
    {
        id: 2,
        nameBn: "টমেটো",
        nameEn: "Tomato",
        category: "vegetables",
        unit: "কেজি",
        currentPrice: 45,
        image: "https://images.unsplash.com/photo-1546470427-e9e826f4d29c?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 40 },
            { date: "2024-01-02", price: 42 },
            { date: "2024-01-03", price: 45 },
            { date: "2024-01-04", price: 43 },
            { date: "2024-01-05", price: 45 }
        ]
    },
    {
        id: 3,
        nameBn: "পেঁপে",
        nameEn: "Papaya",
        category: "fruits",
        unit: "পিস",
        currentPrice: 35,
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 30 },
            { date: "2024-01-02", price: 32 },
            { date: "2024-01-03", price: 35 },
            { date: "2024-01-04", price: 33 },
            { date: "2024-01-05", price: 35 }
        ]
    },
    {
        id: 4,
        nameBn: "গরুর মাংস",
        nameEn: "Beef",
        category: "meat",
        unit: "কেজি",
        currentPrice: 550,
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 520 },
            { date: "2024-01-02", price: 530 },
            { date: "2024-01-03", price: 550 },
            { date: "2024-01-04", price: 540 },
            { date: "2024-01-05", price: 550 }
        ]
    },
    {
        id: 5,
        nameBn: "রুই মাছ",
        nameEn: "Rui Fish",
        category: "fish",
        unit: "কেজি",
        currentPrice: 320,
        image: "https://images.unsplash.com/photo-1534043464124-3be572bd7746?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 300 },
            { date: "2024-01-02", price: 310 },
            { date: "2024-01-03", price: 320 },
            { date: "2024-01-04", price: 315 },
            { date: "2024-01-05", price: 320 }
        ]
    },
    {
        id: 6,
        nameBn: "দুধ",
        nameEn: "Milk",
        category: "dairy",
        unit: "লিটার",
        currentPrice: 75,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 70 },
            { date: "2024-01-02", price: 72 },
            { date: "2024-01-03", price: 75 },
            { date: "2024-01-04", price: 73 },
            { date: "2024-01-05", price: 75 }
        ]
    },
    {
        id: 7,
        nameBn: "চাল",
        nameEn: "Rice",
        category: "grains",
        unit: "কেজি",
        currentPrice: 65,
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9aefacd9?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 60 },
            { date: "2024-01-02", price: 62 },
            { date: "2024-01-03", price: 65 },
            { date: "2024-01-04", price: 63 },
            { date: "2024-01-05", price: 65 }
        ]
    },
    {
        id: 8,
        nameBn: "আদা",
        nameEn: "Ginger",
        category: "spices",
        unit: "কেজি",
        currentPrice: 180,
        image: "https://images.unsplash.com/photo-1618375569909-3c8616cf09ae?w=300",
        priceHistory: [
            { date: "2024-01-01", price: 170 },
            { date: "2024-01-02", price: 175 },
            { date: "2024-01-03", price: 180 },
            { date: "2024-01-04", price: 178 },
            { date: "2024-01-05", price: 180 }
        ]
    }
];

// Categories mapping
export const categories = {
    fruits_vegetables: "ফলমূল ও সবাজি",
    electronics: "ইলেকট্রনিক্স",
    ramadan: "রমজান পণ্য",
    traditional_food: "ঐতিহ্যবাহী খাবার",
    meat_poultry: "মাংস ও পোলট্রি",
    watches: "ঘড়ি",
    cosmetics: "প্রসাধনী",
    clothing: "পোশাক ও ফ্যাশন",
    toys: "খেলনা",
    home_garden: "বাড়ি ও বাগান",
    digital: "ডিজিটাল ডাউনলোড",
    other: "অন্যান্য"
};