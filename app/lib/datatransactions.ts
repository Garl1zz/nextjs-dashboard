import { Client } from '@neondatabase/serverless';

export interface ProductTransaction {
  transaction_id: string;
  name: string;
  date_bought: string;
  total_price: number;
  sales: number;
  id_product:string
}

export async function fetchTransactions(): Promise<ProductTransaction[]> {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const query = `
 SELECT 
  t.customer_name,
  t.id_transaksi,
  t.tanggal_transaksi,
  t.id_produk,
  ic.pricing,
  t.sales_amount,
  (ic.pricing * t.sales_amount) AS calculated_total_price
FROM 
  transactions t
JOIN 
  item_catalogue ic 
  ON t.id_produk = ic.id_produk;

`;

    
    const { rows } = await client.query(query);
    
   
    const transactions: ProductTransaction[] = rows.map((row: any) => ({
      transaction_id: row.id_transaksi,
      id_product: row.id_produk,
      name: row.customer_name,
      date_bought: row.tanggal_transaksi,
      total_price: row.calculated_total_price,
      sales: row.sales_amount,  
    }));

    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions data');
  } finally {
    await client.end();
  }
}