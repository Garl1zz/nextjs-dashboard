import { Client } from '@neondatabase/serverless';

export interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}

export async function fetchProductsData(): Promise<Product[]> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

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
  } catch (error: any) {
    console.error('Error fetching products:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      details: error.detail,
    });
    throw new Error('Failed to fetch products data: ' + (error.message || 'Unknown error'));
  } finally {
    await client.end();
  }
}

export async function getProductById(name: string): Promise<Product | null> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const query = `
      SELECT name, category, pricing, stock
      FROM item_catalogue
      WHERE LOWER(name) = LOWER($1)
    `;
    const { rows } = await client.query(query, [name]);

    if (rows.length === 0) {
      console.log(`Product not found: ${name}`);
      return null;
    }

    return {
      title: rows[0].name,
      category: rows[0].category,
      price: rows[0].pricing,
      stock: rows[0].stock,
    };
  } catch (error: any) {
    console.error('Error fetching product by name:', {
      name,
      message: error.message,
      stack: error.stack,
      code: error.code,
      details: error.detail,
    });
    throw new Error('Failed to fetch product: ' + (error.message || 'Unknown error'));
  } finally {
    await client.end();
  }
}

export async function updateProduct(originalName: string, updatedProduct: Product): Promise<void> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const query = `
      UPDATE item_catalogue
      SET name = $1, category = $2, pricing = $3, stock = $4
      WHERE LOWER(name) = LOWER($5)
    `;
    await client.query(query, [
      updatedProduct.title,
      updatedProduct.category,
      updatedProduct.price,
      updatedProduct.stock,
      originalName,
    ]);
  } catch (error: any) {
    console.error('Error updating product:', {
      originalName,
      updatedProduct,
      message: error.message,
      stack: error.stack,
      code: error.code,
      details: error.detail,
    });
    throw new Error('Failed to update product: ' + (error.message || 'Unknown error'));
  } finally {
    await client.end();
  }
}