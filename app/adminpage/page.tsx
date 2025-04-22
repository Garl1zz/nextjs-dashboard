import Image from "next/image";
import { alice } from "../ui/fonts";
import { FaBoxOpen, FaComments, FaUsers, FaShoppingCart } from "react-icons/fa";
// import { fetchRevenue } from '@/app/lib/data';
// import RevenueChart from "../ui/chartui/revenue_chart";

export default function Dashboard() {
    // const revenue = await fetchRevenue();
    return (

        <main className={`${alice.className} min-h-screen bg-white p-1`}>
            <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Product */}
                <div
                    className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
                    style={{ backgroundColor: "#FF9F00" }}
                >
                    <div>
                        <h3 className="text-lg font-semibold">Total Product</h3>
                        <p className="text-sm">check here &gt;</p>
                        <h2 className="text-3xl font-bold">24</h2>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl opacity-90">
                        <FaBoxOpen />
                    </div>
                </div>

                {/* Testimonies */}
                <div
                    className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
                    style={{ backgroundColor: "#1e40af" }}
                >
                    <div>
                        <h3 className="text-lg font-semibold">Testimonies</h3>
                        <p className="text-sm">check here &gt;</p>
                        <h2 className="text-3xl font-bold">50</h2>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl opacity-90">
                        <FaComments />
                    </div>
                </div>

                {/* User Accounts */}
                <div
                    className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
                    style={{ backgroundColor: "#6a1b9a" }}
                >
                    <div>
                        <h3 className="text-lg font-semibold">User Accounts</h3>
                        <p className="text-sm">check here &gt;</p>
                        <h2 className="text-3xl font-bold">12</h2>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl opacity-90">
                        <FaUsers />
                    </div>
                </div>

                {/* Order per Day */}
                <div
                    className="relative p-4 rounded text-white h-40 flex flex-col justify-between"
                    style={{ backgroundColor: "#2e7d32" }}
                >
                    <div>
                        <h3 className="text-lg font-semibold">Order per Day</h3>
                        <p className="text-sm">check here &gt;</p>
                        <h2 className="text-3xl font-bold">14</h2>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl opacity-85">
                        <FaShoppingCart />
                    </div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <RevenueChart revenue={revenue} /> */}
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </div>
            <section className="mt-10 text-left">
            <div className="flex flex-col md:flex-row gap-6">
                <div>
                <h2 className="text-2xl font-bold mb-4">STATISTIC SALES</h2>
                <Image
                    src="/grafik.png"
                    alt="Sales Statistics"
                    width={660}
                    height={330}
                    className="rounded-md shadow"
                />
                </div>
                <div>
                <h2 className="text-2xl font-bold mb-4">ENGAGEMENT</h2>
                <Image
                    src="/grafik02.png"
                    alt="Engagement Statistics"
                    width={660}
                    height={330}
                    className="rounded-md shadow"
                />
                </div>
            </div>
            </section>

        </main>
    );
}