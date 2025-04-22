import { Client } from '@neondatabase/serverless';

export interface ProductTransaction {
  customer_number: string;
  name: string;
  category: string;
  price: number;
  sales: number;
}

export async function fetchTransactions(): Promise<ProductTransaction[]> {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const query = `
      SELECT customer_name, phone_number, category, pricing, sales_amount
      FROM transactions
    `;
    
    const { rows } = await client.query(query);
    
   
    const transactions: ProductTransaction[] = rows.map((row: any) => ({
      customer_number: row.phone_number,
      name: row.customer_name,
      category: row.category,
      price: row.pricing,
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