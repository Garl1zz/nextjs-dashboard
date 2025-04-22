"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const items = [
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

export default function EditItem() {
    const [product, setProduct] = useState({
        name: "Square Juggling Balls",
        category: "Juggling Balls",
        price: "Rp. 35.000",
        stock: 10,
        imageUrl: "/juggling-balls.png", // Pastikan file ada di /public
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        alert("Item edited successfully!");
        // Logic simpan ke backend atau state global
    };

    const handleCancel = () => {
        // Logic cancel
        alert("Cancelled");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-gray-200 p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-center text-2xl font-bold mb-6 border-b pb-2 text-black">
                    EDIT ITEMS
                </h1>
                <div className="space-y-4">
                    <Field label="Product Name">
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="input"
                        />
                    </Field>
                    <Field label="Category">
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            readOnly
                            className="input bg-gray-300 cursor-not-allowed"
                        />
                    </Field>
                    <Field label="Pricing">
                        <input
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="input"
                        />
                    </Field>
                    <Field label="Stock">
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="input"
                        />
                    </Field>
                    <Field label="Foto Menu">
                        <div className="border border-gray-400 p-2 bg-white flex justify-center">
                            <Image
                                src={product.imageUrl}
                                alt="Product"
                                width={150}
                                height={150}
                            />
                        </div>
                    </Field>
                </div>
                <div className="flex justify-end mt-6 space-x-4">
                    <Link href={"/adminpage/itemcatalogue"}>
                        <button
                            onClick={handleCancel}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold"
                        >
                            CANCEL
                        </button>
                    </Link>

                    <button
                        onClick={handleEdit}
                        className="bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500 font-bold"
                    >
                        EDIT
                    </button>
                </div>
            </div>
        </div>
    );
}

const Field = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => (
    <div className="flex items-center">
        <div className="w-40 text-right pr-4 text-sm font-semibold text-gray-700">
            {label}
        </div>
        <div className="flex-1">{children}</div>
    </div>
);
