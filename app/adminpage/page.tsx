import Image from "next/image";
import { alice } from "../ui/fonts";
import {
  FaBoxOpen,
  FaComments,
  FaUsers,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { fetchTransactions } from "../lib/datatransactions";
import { TransactionChart } from "../lib/datachart";
import RevenueSalesChart from "../ui/chartui/revenuesales";

export default async function Dashboard() {
  const transaction = await fetchTransactions();
  const ChartData = TransactionChart(transaction);

  return (
    <main className={`${alice.className} min-h-screen bg-gradient-to-b from-white to-gray-100 p-1`}>
      <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
          style={{ backgroundColor: "#FF9F00" }}
        >
          <div>
            <h3 className="text-lg font-semibold">Total Product</h3>
            <button className="text-sm hover:underline">
              check here -&gt;{" "}
            </button>
            <h2 className="text-3xl font-bold">24</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaBoxOpen />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
          style={{ backgroundColor: "#1e40af" }}
        >
          <div>
            <h3 className="text-lg font-semibold">Testimonies</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">50</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaComments />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
          style={{ backgroundColor: "#6a1b9a" }}
        >
          <div>
            <h3 className="text-lg font-semibold">User Accounts</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-90">
            <FaUsers />
          </div>
        </div>

        <div
          className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
          style={{ backgroundColor: "#2e7d32" }}
        >
          <div>
            <h3 className="text-lg font-semibold">Order per Day</h3>
            <button className="text-sm hover:underline">
              check here -&gt;
            </button>
            <h2 className="text-3xl font-bold">14</h2>
          </div>
          <div className="absolute bottom-4 right-4 text-6xl opacity-85">
            <FaShoppingCart />
          </div>
        </div>
      </div>
      {/* <section className="mt-10 text-left">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full p-8">
          <RevenueSalesChart data={ChartData} />
          </div>
        </div>
      </section> */}
    </main>
  );
}