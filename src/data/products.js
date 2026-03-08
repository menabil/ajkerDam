// Product data for Ajker Dam
import prod1 from '../assets/products/product1.svg';
import prod2 from '../assets/products/product2.svg';
import prod3 from '../assets/products/product3.svg';
import prod4 from '../assets/products/product4.svg';
import prod5 from '../assets/products/product5.svg';
import prod6 from '../assets/products/product6.svg';
import prod7 from '../assets/products/product7.svg';
import prod8 from '../assets/products/product8.svg';

export const products = [
    {
        id: 1,
        nameBn: "আলু",
        nameEn: "Potato",
        category: "fruits_vegetables",
        unit: "কেজি",
        currentPrice: 25,
        image: prod1,
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
        category: "fruits_vegetables",
        unit: "কেজি",
        currentPrice: 45,
        image: prod2,
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
        category: "fruits_vegetables",
        unit: "পিস",
        currentPrice: 35,
        image: prod3,
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
        category: "meat_poultry",
        unit: "কেজি",
        currentPrice: 550,
        image: prod4,
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
        category: "meat_poultry",
        unit: "কেজি",
        currentPrice: 320,
        image: prod5,
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
        category: "traditional_food",
        unit: "লিটার",
        currentPrice: 75,
        image: prod6,
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
        category: "traditional_food",
        unit: "কেজি",
        currentPrice: 65,
        image: prod7,
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
        category: "traditional_food",
        unit: "কেজি",
        currentPrice: 180,
        image: prod8,
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