import { ProductTransaction } from "./datatransactions";

interface MonthlyData {
    name: string;
    revenue: number;
    sales: number;
}

export function TransactionChart(transactions: ProductTransaction[]): MonthlyData[] {
    const monthlyMap = new Map<string, { revenue: number; sales: number }>();
  
    transactions.forEach((tx) => {
      const date = new Date(tx.date_bought);
      const month = date.toLocaleString('default', { month: 'short' });
  
      if (!monthlyMap.has(month)) {
        monthlyMap.set(month, { revenue: 0, sales: 0 });
      }
  
      const current = monthlyMap.get(month)!;
      current.revenue += Number(tx.total_price);
      current.sales += Number(tx.sales);      
    });
  
    // Return in calendar order (Sep to Aug as per your image)
    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    return monthOrder
      .filter((month) => monthlyMap.has(month))
      .map((month) => ({
        name: month,
        revenue: monthlyMap.get(month)!.revenue,
        sales: monthlyMap.get(month)!.sales,
      }));
  }