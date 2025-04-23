"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getProductById } from "@/app/lib/datacatalogue";
import { alice } from "@/app/ui/fonts";

interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}

export default function EditItemClient({ initialProduct }: any) {
  const router = useRouter();
  const [product, setProduct] = useState<Product>(
    initialProduct || { title: "", category: "", price: 0, stock: 0 }
  );

  const originalProduct = initialProduct;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev: Product) => {
      if (name === "price" || name === "stock") {
        return { ...prev, [name]: Number(value) };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleClearOnClick = (field: keyof Product) => {
    if (field !== "category") {
      setProduct((prev: Product) => ({
        ...prev,
        [field]: field === "title" ? "" : 0,
      }));
    }
  };

  const handleEdit = async () => {
    alert(`Item ${product.title} edited successfully!`);
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
              name="title"
              value={`Stage Juggling balls`}
              onChange={handleChange}
              className={`input w-full p-3 border border-gray-400 rounded ${alice.className}`}
            />
          </Field>
          <Field label="Category">
            <input
              name="category"
              value={`Balls`}
              readOnly
              className={`input w-full p-3 bg-gray-300 cursor-not-allowed border border-gray-400 rounded ${alice.className}`}
            />
          </Field>
          <Field label="Pricing (Rp)">
            <input
              type="number"
              name="price"
              value={50000}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={`input w-full p-3 border border-gray-400 rounded ${alice.className}`}
            />
          </Field>
          <Field label="Stock">
            <input
              type="number"
              name="stock"
              value={46}
              onChange={handleChange}
              min="0"
              className={`input w-full p-3 border border-gray-400 rounded ${alice.className}`}
            />
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
