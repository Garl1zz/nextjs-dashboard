import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    
    
    const products = await sql`
      SELECT 
        id_produk as id,
        name,
        pricing as price,
        stock
      FROM item_catalogue
      WHERE stock > 0
      ORDER BY name ASC
    `;
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}