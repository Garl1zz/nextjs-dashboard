"use client";

import { useState } from "react";
import { addTransactions } from "@/app/lib/actionscreate";
import Link from "next/link";
import { alice } from "@/app/ui/fonts";

export default function AddTransactionForm() {
  const [customerName, setCustomerName] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState("");
  const [totalHarga, setTotalHarga] = useState("");
  const [salesAmount, setSalesAmount] = useState("");
  const [idTransaksi, setIdTransaksi] = useState("");
  const [idProduk, setIdProduk] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !customerName ||
      !tanggalTransaksi ||
      !totalHarga ||
      !salesAmount ||
      !idProduk
    ) {
      alert("Harap isi semua box.");
      return;
    }

    const totalHargaValue = parseFloat(totalHarga);
    const amountValue = parseInt(salesAmount);

    if (isNaN(totalHargaValue) || isNaN(amountValue)) {
      alert("Total harga dan jumlah harus berupa angka valid.");
      return;
    }

    const result = await addTransactions({
      customerName,
      tanggalTransaksi,
      totalHarga: totalHargaValue,
      salesAmount: amountValue,
      id_transaksi: idTransaksi || undefined,
      idProduk,
    });

    if (result.success) {
      alert("Transaksi berhasil ditambahkan!");
      handleCancel();
    } else {
      alert("Gagal menambahkan transaksi: " + result.error);
    }
  };

  const handleCancel = () => {
    setCustomerName("");
    setTanggalTransaksi("");
    setTotalHarga("");
    setSalesAmount("");
    setIdTransaksi("");
    setIdProduk("");
  };

  return (
    <div className={`${alice.className} bg-gray-100 min-h-screen p-10`}>
      <h1 className="text-3xl font-black mb-6">ADD TRANSACTIONS</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium">ID Transaksi</label>
          <input
            className="border px-4 py-2"
            type="text"
            value={idTransaksi}
            onChange={(e) => setIdTransaksi(e.target.value)}
            placeholder="opsional"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Nama Pelanggan</label>
          <input
            className="border px-4 py-2"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">ID Produk</label>
          <input
            className="border px-4 py-2"
            type="text"
            value={idProduk}
            onChange={(e) => setIdProduk(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Tanggal Transaksi</label>
          <input
            className="border px-4 py-2"
            type="date"
            value={tanggalTransaksi}
            onChange={(e) => setTanggalTransaksi(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Jumlah</label>
          <input
            className="border px-4 py-2"
            type="number"
            value={salesAmount}
            onChange={(e) => setSalesAmount(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Total Harga</label>
          <input
            className="border px-4 py-2"
            type="number"
            value={totalHarga}
            onChange={(e) => setTotalHarga(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Link href={"/adminpage/transactions"}>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
            >
              CANCEL
            </button>
          </Link>

          <Link href={"/adminpage/transactions"}>
            <button
              type="submit"
              className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded"
            >
              ADD
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
