

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function EditItemClient({ initialProduct }: { initialProduct: any }) {
    const router = useRouter();
    const [product, setProduct] = useState(initialProduct);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        alert(`Item ${product.id} edited successfully!`);
    };

    const handleCancel = () => {
        alert("Cancelled");
        router.push("/adminpage/itemcatalogue");
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
                            className="input w-full p-3 border border-gray-400 rounded"
                        />
                    </Field>
                    <Field label="Category">
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            readOnly
                            className="input w-full p-3 bg-gray-300 cursor-not-allowed border border-gray-400 rounded"
                        />
                    </Field>
                    <Field label="Pricing">
                        <input
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="input w-full p-3 border border-gray-400 rounded"
                        />
                    </Field>
                    <Field label="Stock">
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="input w-full p-3 border border-gray-400 rounded"
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
                    <button
                        onClick={handleCancel}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold"
                    >
                        CANCEL
                    </button>

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
    <div className="flex items-center mb-2">
        <div className="w-40 text-right pr-4 text-sm font-semibold text-gray-700">
            {label}
        </div>
        <div className="flex-1">{children}</div>
    </div>
);
