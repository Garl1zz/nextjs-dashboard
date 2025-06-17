import { stackServerApp } from "@/stack";
import { FaMoneyBillWave, FaChartLine, FaCoins, FaBoxes } from "react-icons/fa";
import { alice } from '../fonts';
import { ProdukTerjual, ProdukTerlaris, Rata2Terjual, TotalRevenue } from "@/app/lib/data1";
import Link from "next/link";

export default async function Cards (){
  const data = await TotalRevenue();
  const totalRevenue = data[0]?.total || 0;

  const popularproduct = await ProdukTerlaris();
  const mostPopular = popularproduct[0]?.total_produkpopuler || 0;

  const totalproduct = await ProdukTerjual();
  const soldproduct = totalproduct[0]?.total_terjual || 0;

  const rata2terjual = await Rata2Terjual();
  const avgsold = rata2terjual[0]?.rata_rata_terjual || 0;

  
    return (
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          <div>
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <Link href={'/adminpage/transactions'}>
            <button className="text-sm hover:underline">
              check here -&gt;{" "}
            </button>
            </Link>
            <h2 className="text-3xl font-bold">{totalRevenue}</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaMoneyBillWave />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-indigo-500 via-blue-600 to-blue-800">
          <div>
            <h3 className="text-lg font-semibold">Produk Terlaris</h3>
            <Link href={'/adminpage/transactions'}>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            </Link>
            <h2 className="text-3xl font-bold">{mostPopular} Items</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaChartLine />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-purple-500 via-fuchsia-600 to-pink-600">
          <div>
            <h3 className="text-lg font-semibold">Jumlah Produk</h3>
            <Link href={'/adminpage/transactions'}>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            </Link>
            <h2 className="text-3xl font-bold">{soldproduct} Items</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaBoxes />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600">
          <div>
            <h3 className="text-lg font-semibold">Order per Month</h3>
            <Link href={'/adminpage/transactions'}>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            </Link>
            <h2 className="text-3xl font-bold">{avgsold} Items</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-85">
            <FaCoins />
          </div>
        </div>
      </div>
    )
}

