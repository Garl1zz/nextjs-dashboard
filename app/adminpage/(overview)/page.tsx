import { alice } from "@/app/ui/fonts";
import { FaMoneyBillWave, FaChartLine, FaCoins, FaBoxes } from "react-icons/fa";
import { fetchTransactions } from "@/app/lib/datatransactions";
import { TransactionChart } from "@/app/lib/datachart";
import RevenueSalesChart from "@/app/ui/chartui/revenuesales";

export default async function Dashboard() {
  const transaction = await fetchTransactions();
  const ChartData = TransactionChart(transaction);

  return (
    <main className={`${alice.className} min-h-screen bg-white p-1`}>
      <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          <div>
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <button className="text-sm hover:underline">
              check here -&gt;{" "}
            </button>
            <h2 className="text-3xl font-bold">6.130.000</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaMoneyBillWave />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-indigo-500 via-blue-600 to-blue-800">
          <div>
            <h3 className="text-lg font-semibold">Produk Terlaris</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">25</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaChartLine />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-purple-500 via-fuchsia-600 to-pink-600">
          <div>
            <h3 className="text-lg font-semibold">Jumlah Produk</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">92</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaBoxes />
          </div>
        </div>

        <div className="relative p-4 rounded text-white h-40 flex flex-col justify-between, bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600">
          <div>
            <h3 className="text-lg font-semibold">Order per Month</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">15 Items</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-85">
            <FaCoins />
          </div>
        </div>
      </div>
      <section className="mt-10 text-left">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full p-8">
            <RevenueSalesChart data={ChartData} />
          </div>
        </div>
      </section>
    </main>
  );
}