"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: "",
    nomorHP: "",
    email: "",
    pesan: "",
  });

  return (
    <main className="w-full h-screen flex items-center justify-center bg-[#981827]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Data terkirim:", formData);
          alert("Pesan berhasil dikirim!");
          setFormData({
            nama: "",
            nomorHP: "",
            email: "",
            pesan: "",
          });
        }}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-[#981827]">
          Contact Us
        </h1>

        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Phone Number</label>
          <input
            type="tel"
            name="nomorHP"
            value={formData.nomorHP}
            onChange={(e) =>
              setFormData({ ...formData, nomorHP: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Message</label>
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={(e) =>
              setFormData({ ...formData, pesan: e.target.value })
            }
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#981827] text-white py-2 rounded hover:bg-[#7c1320]"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
