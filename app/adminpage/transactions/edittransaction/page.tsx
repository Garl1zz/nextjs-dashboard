// import Image from "next/image";
// import { FaBoxOpen, FaComments, FaUsers, FaShoppingCart } from "react-icons/fa";
// // import { fetchRevenue } from '@/app/lib/data';
// // import RevenueChart from "../ui/chartui/revenue_chart";

// export default function Page() {
//     return <p>Edit Transaction Page</p>;
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getProductById } from "@/app/lib/datacatalogue";


// Define the Product interface to match datacatalogue.ts
interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}



export default function EditItemClient({ initialProduct }: any) {
  const router = useRouter();
  const [product, setProduct] = useState<Product>(initialProduct);

  const originalProduct = initialProduct;
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev : any) => ({...prev,[name]: value,}));
  };

  const handleEdit = async () => {
    alert(`Item ${product.title} edited successfully!`);
  };

  const handleCancel = () => {
    alert("Cancelled");
         router.push("/adminpage/transactions");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-center text-2xl font-bold mb-6 border-b pb-2 text-black">
          EDIT TRANSACTIONS
        </h1>

        
        <div className="space-y-4">
          <Field label="Name">
            <input
              name="title"
              value={product?.title}
              onChange={handleChange}
              className="input w-full p-3 border border-gray-400 rounded"
            />
          </Field>
          <Field label="Number">
            <input
              name="category"
              value={product?.category}
              onChange={handleChange}
            
              className="input w-full p-3 border border-gray-400 rounded"
            />
          </Field>
          <Field label="Category">
            <input
              type="number"
              name="price"
              value={product?.price}
              onChange={handleChange}
              step="0.01"
              min="0"
              className="input w-full p-3 border border-gray-400 rounded"
            />
          </Field>
          <Field label="Praicing">
            <input
              type="number"
              name="stock"
              value={product?.stock}
              onChange={handleChange}
              min="0"
              className="input w-full p-3 border border-gray-400 rounded"
            />
          </Field>
          <Field label="Amount">
            <input
              type="number"
              name="stock"
              value={product?.stock}
              onChange={handleChange}
              min="0"
              className="input w-full p-3 border border-gray-400 rounded"
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