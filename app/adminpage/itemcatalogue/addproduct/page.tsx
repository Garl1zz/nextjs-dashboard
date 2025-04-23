"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddItemForm() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ productName, category, pricing, stock, image });
  };

  const handleCancel = () => {
    setProductName("");
    setCategory("");
    setPricing("");
    setStock("");
    setImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-black mb-6">ADD ITEMS</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-lg mb-2">
            Upload Image
          </label>
          <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {image ? (
                <img
                src={URL.createObjectURL(image)}
                alt="Preview gambar"
                className="w-full h-full object-cover"
              />
              ) : (
                <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Product Name</label>
          <input
            className="border px-4 py-2"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Category</label>
          <input
            className="border px-4 py-2"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Pricing</label>
          <input
            className="border px-4 py-2"
            type="number"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Stock</label>
          <input
            className="border px-4 py-2"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Link href={"/adminpage/itemcatalogue"}>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
            >
              CANCEL
            </button>
          </Link>

          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
