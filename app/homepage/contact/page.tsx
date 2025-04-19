"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  nama: string;
  nomorHP: string;
  email: string;
  pesan: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    nomorHP: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    alert("Pesan berhasil dikirim!");
    // Reset form
    setFormData({
      nama: "",
      nomorHP: "",
      email: "",
      pesan: "",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-[#981827]">Hubungi Kami</h1>

        <div>
          <label className="block">Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Nomor HP</label>
          <input
            type="tel"
            name="nomorHP"
            value={formData.nomorHP}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Deskripsi Pesan</label>
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#981827] text-white py-2 rounded hover:bg-[#7c1320]"
        >
          Kirim
        </button>
      </form>
    </main>
  );
}
