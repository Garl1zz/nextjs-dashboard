import Image from "next/image";
import { alice } from "@/app/ui/fonts";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaCoins,
  FaBoxes, // Impor ikon FaBoxes untuk total produk di stock
} from "react-icons/fa";

// Data produk contoh untuk analitik
// const products = [
//   { id: 1, name: "BeanBags Juggling Balls", price: 20000, quantitySold: 30, instock: 12 },
//   { id: 2, name: "Contact Juggling Balls", price: 70000, quantitySold: 20, instock: 35 },
//   { id: 3, name: "MMX Juggling Balls", price: 150000, quantitySold: 25, instock: 61 },
//   { id: 4, name: "Russian Juggling Balls", price: 45000, quantitySold: 15, instock: 39 },
//   { id: 5, name: "Square Juggling Balls", price: 35000, quantitySold: 10, instock: 28 },
//   { id: 6, name: "Stage Juggling Balls", price: 50000, quantitySold: 12, instock: 36 },
// ];

// Fungsi untuk menghitung total keseluruhan produk di stock
// const jumlahTotalProduct = (products) => {
//   return products.reduce((acc, product) => acc + product.instock, 0);
// };

// // Fungsi untuk menghitung metrik lainnya
// const calculateMetrics = (products) => {
//   const totalProducts = products.length;
//   const totalRevenue = products.reduce((acc, product) => acc + product.price * product.quantitySold, 0);
//   const bestSellingProduct = products.reduce((prev, current) => (prev.quantitySold > current.quantitySold ? prev : current), products[0]);

//   return {
//     totalProducts,
//     totalRevenue,
//     bestSellingProduct,
//   };
// };

export default async function Dashboard() {
  // Menghitung metrik
  // const { totalProducts, totalRevenue, bestSellingProduct } = calculateMetrics(products);
  // const totalStock = jumlahTotalProduct(products);

  return (
    <main className={`${alice.className} min-h-screen bg-white p-1`}>
      <h1 className="text-3xl font-bold mb-6">DASHBOARD ANALITICS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
"
        >
          <div>
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <button className="text-sm hover:underline">
              check here -&gt;{" "}
            </button>
            <h2 className="text-3xl font-bold">24</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaMoneyBillWave />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-indigo-500 via-blue-600 to-blue-800
"
        >
          <div>
            <h3 className="text-lg font-semibold">Produk Terlaris</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">50</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaChartLine />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-purple-500 via-fuchsia-600 to-pink-600
"
        >
          <div>
            <h3 className="text-lg font-semibold">Jumlah Produk</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaBoxes />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600
"
        >
          <div>
            <h3 className="text-lg font-semibold">Order per Day</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">14</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-85">
            <FaCoins />
          </div>
          {/* <section className="mt-10 text-left w-full pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">STATISTIC SALES</h2>
            <Image
              src="/grafik.png"
              alt="Sales Statistics"
              width={10000}
              height={600}
              className="rounded-md shadow-md w-full h-auto"
            />
          </section> */}
        </div>
      </div>
      <section className="mt-10 text-left w-full pl-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">STATISTIC SALES</h2>
        <Image
          src="/grafik.png"
          alt="Sales Statistics"
          width={500}
          height={250}
          className="rounded-md shadow-md w-full h-auto"
        />
      </section>


    </main>
    // <main className={`${alice.className} min-h-screen bg-white p-6`}>
    //   <h1 className="text-4xl font-extrabold mb-10 text-gray-900">DASHBOARD ANALITIK</h1>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {/* Total Product */}
    //     <div className="relative p-6 rounded-xl text-white h-44 flex flex-col justify-between shadow-lg" style={{ backgroundColor: "#FF9F00" }}>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-2">Jenis Produk</h3>
    //         <h2 className="text-4xl font-bold">{totalProducts}</h2>
    //       </div>
    //       <div className="absolute bottom-6 right-6 text-7xl opacity-90">
    //         <FaBoxOpen />
    //       </div>
    //     </div>

    //     {/* Total Produk di Stock */}
    //     <div className="relative p-6 rounded-xl text-white h-44 flex flex-col justify-between shadow-lg" style={{ backgroundColor: "#007bff" }}>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-2">Total Produk</h3>
    //         <h2 className="text-4xl font-bold">{totalStock}</h2>
    //       </div>
    //       <div className="absolute bottom-6 right-6 text-7xl opacity-90">
    //         <FaBoxes />
    //       </div>
    //     </div>

    //     {/* Total Revenue */}
    //     <div className="relative p-6 rounded-xl text-white h-44 flex flex-col justify-between shadow-lg" style={{ backgroundColor: "#1e40af" }}>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
    //         <h2 className="text-4xl font-bold">${totalRevenue.toFixed(2)}</h2>
    //       </div>
    //       <div className="absolute bottom-6 right-6 text-7xl opacity-90">
    //         <FaDollarSign />
    //       </div>
    //     </div>

    //     {/* Produk Paling Banyak Terjual */}
    //     <div className="relative p-6 rounded-xl text-white h-44 flex flex-col justify-between shadow-lg" style={{ backgroundColor: "#6a1b9a" }}>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-2">Produk Terlaris</h3>
    //         <h2 className="text-3xl font-bold">{bestSellingProduct.name}</h2>
    //         <p className="text-lg opacity-80">Terjual: {bestSellingProduct.quantitySold} unit</p>
    //       </div>
    //       <div className="absolute bottom-6 right-6 text-7xl opacity-90">
    //         <FaShoppingBag />
    //       </div>
    //     </div>

    //     {/* Order per Day */}
    //     <div className="relative p-6 rounded-xl text-white h-44 flex flex-col justify-between shadow-lg" style={{ backgroundColor: "#2e7d32" }}>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-2">Order per Day</h3>
    //         <h2 className="text-4xl font-bold">14</h2>
    //       </div>
    //       <div className="absolute bottom-6 right-6 text-7xl opacity-85">
    //         <FaShoppingCart />
    //       </div>
    //     </div>
    //   </div>

    //   <section className="mt-12 text-left max-w-4xl mx-auto">
    //     <h2 className="text-3xl font-bold mb-6">Statistik Penjualan</h2>
    //     <Image
    //       src="/grafik.png"
    //       alt="Statistik Penjualan"
    //       width={800}
    //       height={400}
    //       className="rounded-lg shadow-lg"
    //     />
    //   </section>
    // </main>
  );
}