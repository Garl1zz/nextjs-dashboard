"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import Image from "next/image";
import { alice } from "@/app/ui/fonts";

export default function DetailProductPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center text-white">Loading product details...</div>
      }
    >
      <ProductDetails />
    </Suspense>
  );
}

function ProductDetails() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const products = [
    {
      id: 1,
      title: "Square Juggling Balls",
      image: "/products/square-juggling-balls.png",
      price: "Rp 35.000",
      stok: 10,
      description:
        "Square Juggling Balls adalah pilihan sempurna untuk para pesulap dan penggemar sirkus. Dengan desain yang unik dan kualitas tinggi, bola ini memberikan pengalaman juggling yang luar biasa. Cocok untuk pemula maupun profesional, Square Juggling Balls akan membantu Anda mengasah keterampilan dan menambah keseruan dalam pertunjukan Anda.",
    },
    {
      id: 2,
      title: "BeanBags Juggling Balls",
      image: "/products/beanbags-juggling-balls.png",
      price: "Rp 20.000",
      stok: 5,
      description:
        "BeanBags Juggling Balls adalah pilihan ideal untuk para pesulap dan penggemar sirkus. Dengan desain yang ergonomis dan bahan berkualitas tinggi, bola ini memberikan kenyamanan dan kontrol yang luar biasa saat melakukan juggling. Cocok untuk semua tingkat keterampilan, BeanBags Juggling Balls akan meningkatkan performa Anda di atas panggung.",
    },
    {
      id: 3,
      title: "Stage Juggling Balls",
      image: "/products/stage-juggling-balls.png",
      price: "Rp 50.000",
      stok: 8,
      description:
        "Stage Juggling Balls adalah pilihan sempurna untuk pertunjukan di panggung. Dengan desain yang mencolok dan warna-warna cerah, bola ini akan menarik perhatian penonton Anda. Terbuat dari bahan berkualitas tinggi, Stage Juggling Balls memberikan kontrol yang baik dan daya tahan yang luar biasa. Cocok untuk pesulap dan penggemar sirkus yang ingin tampil menonjol di atas panggung.",
    },
    {
      id: 4,
      title: "Russian Juggling Balls",
      image: "/products/russian-juggling-balls.png",
      price: "Rp 45.000",
      stok: 7,
      description:
        "Russian Juggling Balls adalah pilihan yang sempurna untuk para pesulap dan penggemar sirkus. Dengan desain yang ergonomis dan bahan berkualitas tinggi, bola ini memberikan kenyamanan dan kontrol yang luar biasa saat melakukan juggling. Cocok untuk semua tingkat keterampilan, Russian Juggling Balls akan meningkatkan performa Anda di atas panggung.",
    },
    {
      id: 5,
      title: "Contact Juggling Balls",
      image: "/products/contact-juggling-balls.png",
      price: "Rp 70.000",
      stok: 3,
      description:
        "Contact Juggling Balls adalah pilihan sempurna untuk para pesulap dan penggemar sirkus. Dengan desain yang ergonomis dan bahan berkualitas tinggi, bola ini memberikan kenyamanan dan kontrol yang luar biasa saat melakukan juggling. Cocok untuk semua tingkat keterampilan, Contact Juggling Balls akan meningkatkan performa Anda di atas panggung.",
    },
    {
      id: 6,
      title: "MMX Juggling Balls",
      image: "/products/MMX-juggling-balls.png",
      price: "Rp 150.000",
      stok: 2,
      description:
        "MMX Juggling Balls adalah pilihan sempurna untuk para pesulap dan penggemar sirkus. Dengan desain yang ergonomis dan bahan berkualitas tinggi, bola ini memberikan kenyamanan dan kontrol yang luar biasa saat melakukan juggling. Cocok untuk semua tingkat keterampilan, MMX Juggling Balls akan meningkatkan performa Anda di atas panggung.",
    },
  ];

  const product = useMemo(() => products.find((p) => p.id === Number(productId)), [productId]);

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-20 max-h- mx-auto"
      style={{ backgroundColor: "#981827" }}
    >
      <h1 className={`${alice.className} text-4xl text-center mb-6 text-white`}>
        Detail Produk
      </h1>
      {product ? (
        <div
          className="bg-white rounded-lg shadow-lg p-16 max-h- mx-auto"
          style={{ backgroundColor: "lightgray" }}
        >
          <h2
            className={`${alice.className} text-3xl text-center mb-4 text-black`}
          >
            {product.title}
          </h2>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="mx-auto my-4 rounded-lg shadow-md"
          />
          <p
            className={`${alice.className} text-xl font-semibold text-center text-black`}
          >
            {product.price}
          </p>
          <p className={`${alice.className} text-lg text-center text-black`}>
            Stok: {product.stok}
          </p>
          <p className={`${alice.className} mt-4 text-black text-3xl`}>
            {product.description}
          </p>
        </div>
      ) : (
        <p className="text-center text-red-500 text-lg">
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  );
}
