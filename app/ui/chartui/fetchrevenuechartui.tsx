import { fetchTransactions } from "@/app/lib/datatransactions";
import { TransactionChart } from "@/app/lib/datachart";
import RevenueSalesChart from "./revenuesales";

export default async function Fetchdatachart() {
    const transaction = await fetchTransactions();
    const ChartData = TransactionChart(transaction);
    return <RevenueSalesChart data={ChartData}/>
    
}