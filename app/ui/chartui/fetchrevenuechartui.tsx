import { fetchTransactions } from "@/app/lib/datatransactions";
import { TransactionChart } from "@/app/lib/datachart";
import { RevenueChartSkeleton } from "../skeletons";
import RevenueSalesChart from "./revenuesales";
import { Suspense } from "react";

export default async function Fetchdatachart() {
    const transaction = await fetchTransactions();
    const ChartData = TransactionChart(transaction);
    return <RevenueSalesChart data={ChartData}/>
    
}