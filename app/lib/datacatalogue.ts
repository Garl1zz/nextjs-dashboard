import { Client } from '@neondatabase/serverless';

export interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}

export async function fetchProductsData(): Promise<Product[]> {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const query = `
      SELECT name, category, pricing, stock
      FROM item_catalogue
    `;
    
    const { rows } = await client.query(query);
    
    const products: Product[] = rows.map((row: any) => ({
      title: row.name,        
      category: row.category, 
      price: row.pricing,     
      stock: row.stock,       
    }));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products data');
  } finally {
    await client.end();
  }
}   