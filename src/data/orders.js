export const orders = [
    {
        id: "ORD-2026-001",
        date: "2026-02-10",
        status: "Delivered",
        total: 215.00,
        items: [
            {
                name: "Classic Silk Blouse",
                image: "https://images.unsplash.com/photo-1551163943-3f6a2a4b3c1c?q=80&w=2574&auto=format&fit=crop",
                quantity: 1,
                price: 120.00
            },
            {
                name: "High-Waist Wide Leg Trousers",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2574&auto=format&fit=crop",
                quantity: 1,
                price: 95.00
            }
        ],
        deliveryEstimation: "Delivered on Feb 14, 2026"
    },
    {
        id: "ORD-2026-002",
        date: "2026-02-13",
        status: "Processing",
        total: 145.00,
        items: [
            {
                name: "Floral Wrap Dress",
                image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2574&auto=format&fit=crop",
                quantity: 1,
                price: 145.00
            }
        ],
        deliveryEstimation: "Arrives by Feb 20, 2026"
    }
];
