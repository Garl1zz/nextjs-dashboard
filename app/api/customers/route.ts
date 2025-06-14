import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    
   
    const customers = await sql`
      SELECT DISTINCT customer_name as name 
      FROM transactions 
      ORDER BY customer_name ASC
    `;
    
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}

// Dev Notes
// Get unique customer names from transactions table
// Might want to create a separate customers table in the future