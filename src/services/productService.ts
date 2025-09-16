import type { Product } from "../types/Product";

const API_URL = 'http://localhost:3000/api'; // Update this with your actual backend URL

const dummyProducts: Product[] = [
    {
        id: 1,
        title: "Wireless Noise-Canceling Headphones",
        price: 299.99,
        description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        category: "Electronics"
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        price: 199.99,
        description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
        category: "Electronics"
    },
    {
        id: 3,
        title: "Modern Coffee Table",
        price: 249.99,
        description: "Elegant wooden coffee table with metal accents, perfect for any living room.",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500",
        category: "Furniture"
    },
    {
        id: 4,
        title: "Organic Cotton T-Shirt",
        price: 29.99,
        description: "Comfortable and eco-friendly cotton t-shirt available in multiple colors.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        category: "Clothing"
    },
    {
        id: 5,
        title: "Professional DSLR Camera",
        price: 1299.99,
        description: "High-end digital camera with 24MP sensor and 4K video capabilities.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        category: "Electronics"
    },
    {
        id: 6,
        title: "Leather Laptop Bag",
        price: 79.99,
        description: "Stylish and durable leather bag for laptops up to 15 inches.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        category: "Accessories"
    }
];

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.warn('Failed to fetch products from API, falling back to dummy data:', error);
        return dummyProducts; // Return dummy data instead of throwing error
    }
};
