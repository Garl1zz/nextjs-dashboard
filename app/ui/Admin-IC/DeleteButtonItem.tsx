'use client';

import { deleteDataCatalogue } from "@/app/lib/data1";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

interface DeleteButtonByIdProps {
  id_produk: string;
}

export default function DeleteButtonById({ id_produk }: DeleteButtonByIdProps) {
  const router = useRouter(); 
  const [isPending, startTransition] = useTransition(); 

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteDataCatalogue(id_produk);
        router.refresh(); 
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Failed to delete product. Please try again.");
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`bg-red-500 hover:bg-gray-600 text-white py-1 px-3 rounded-sm ${
        isPending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <TrashIcon className="w-5 h-5" />
    </button>
  );
}

