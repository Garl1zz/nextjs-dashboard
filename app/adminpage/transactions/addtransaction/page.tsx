"use client";

import { useState, useEffect } from "react";
import { addTransactions } from "@/app/lib/data1";
import Link from "next/link";
import { alice } from "@/app/ui/fonts";

// Type definitions
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Customer {
  name: string;
}

export default function AddTransactionForm() {
  const [customerName, setCustomerName] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState("");
  const [totalHarga, setTotalHarga] = useState("");
  const [salesAmount, setSalesAmount] = useState("");
  const [idTransaksi, setIdTransaksi] = useState("");
  const [idProduk, setIdProduk] = useState("");
  
  // New states for dropdowns
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch customers and products on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch unique customers (you'll need to create this API endpoint)
        const customersRes = await fetch('/api/customers');
        const customersData = await customersRes.json();
        setCustomers(customersData);

        // Fetch products from item_catalogue
        const productsRes = await fetch('/api/products');
        const productsData = await productsRes.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle product selection
  const handleProductChange = (productId: string) => {
    setIdProduk(productId);
    
    if (productId) {
      const product = products.find(p => p.id.toString() === productId);
      if (product) {
        setSelectedProduct(product);
        // Auto-calculate total price based on quantity
        if (salesAmount) {
          const total = product.price * parseInt(salesAmount);
          setTotalHarga(total.toString());
        }
      }
    } else {
      setSelectedProduct(null);
      setTotalHarga("");
    }
  };

  // Recalculate total when quantity changes
  const handleQuantityChange = (quantity: string) => {
    setSalesAmount(quantity);
    
    if (selectedProduct && quantity) {
      const total = selectedProduct.price * parseInt(quantity);
      setTotalHarga(total.toString());
    } else {
      setTotalHarga("");
    }
  };

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

    // Check stock availability
    if (selectedProduct && amountValue > selectedProduct.stock) {
      alert(`Stok tidak mencukupi! Stok tersedia: ${selectedProduct.stock}`);
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
      alert(
        `✓ Transaksi berhasil ditambahkan!\n` +
        `📦 Produk: ${selectedProduct?.name}\n` +
        `📉 Jumlah terjual: ${salesAmount}\n` +
        `📊 Sisa stok: ${result.remainingStock}`
      );
      handleCancel();
      // Refresh products to show updated stock
      const productsRes = await fetch('/api/products');
      const productsData = await productsRes.json();
      setProducts(productsData);
    } else {
      alert("❌ Gagal menambahkan transaksi: " + result.error);
    }
  };

  const handleCancel = () => {
    setCustomerName("");
    setTanggalTransaksi("");
    setTotalHarga("");
    setSalesAmount("");
    setIdTransaksi("");
    setIdProduk("");
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className={`${alice.className} bg-gray-100 min-h-screen p-10`}>
        <h1 className="text-3xl font-black mb-6">ADD TRANSACTIONS</h1>
        <p>Loading...</p>
      </div>
    );
  }

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
          <select
            className="border px-4 py-2"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          >
            <option value="">Pilih Pelanggan</option>
            {customers.map((customer, index) => (
              <option key={index} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Produk</label>
          <select
            className="border px-4 py-2"
            value={idProduk}
            onChange={(e) => handleProductChange(e.target.value)}
            required
          >
            <option value="">Pilih Produk</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - Rp {product.price.toLocaleString('id-ID')} (Stok: {product.stock})
              </option>
            ))}
          </select>
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
            onChange={(e) => handleQuantityChange(e.target.value)}
            min="1"
            max={selectedProduct ? selectedProduct.stock : undefined}
            required
          />
          {selectedProduct && (
            <small className="text-gray-600 mt-1">
              Stok tersedia: {selectedProduct.stock}
            </small>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Total Harga</label>
          <input
            className="border px-4 py-2 bg-gray-100"
            type="number"
            value={totalHarga}
            onChange={(e) => setTotalHarga(e.target.value)}
            readOnly
            required
          />
          <small className="text-gray-600 mt-1">
            Total harga dihitung otomatis
          </small>
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