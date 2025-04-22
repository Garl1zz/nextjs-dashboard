

export const items = [
    {
        id: 1,
        name: "Square Juggling Balls",
        category: "Balls",
        price: "Rp. 35.000",
        stock: 1,
        imageUrl: "/juggling-balls.png",
    },
    {
        id: 2,
        name: "BeanBags Juggling Balls",
        category: "Balls",
        price: "Rp. 20.000",
        stock: 14,
        imageUrl: "/products/beanbags-juggling-balls.png",
    },
    {
        id: 3,
        name: "Stage Juggling Balls",
        category: "Balls",
        price: "Rp. 50.000",
        stock: 24,
        imageUrl: "/products/stage-juggling-balls.png",
    },
    {
        id: 4,
        name: "Russian Juggling Balls",
        category: "Balls",
        price: "Rp. 45.000",
        stock: 7,
        imageUrl: "/products/russian-juggling-balls.png",
    },
    {
        id: 5,
        name: "Contact Juggling Balls",
        category: "Balls",
        price: "Rp. 70.000",
        stock: 10,
        imageUrl: "/products/contact-juggling-balls.png",
    },
    {
        id: 6,
        name: "MMX Juggling Balls",
        category: "Balls",
        price: "Rp. 150.000",
        stock: 5,
        imageUrl: "/products/MMX-juggling-balls.png",
    },

];

export function getProductById(id: number) {
    return items.find((item) => item.id === id);
}
