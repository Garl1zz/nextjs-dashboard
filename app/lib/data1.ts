"use server"
import { neon } from '@neondatabase/serverless';


const ITEMS_PER_PAGE =6

export async function TotalRevenue() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT SUM(total_harga) as total from transactions`;
    return data;
}

export async function ProdukTerlaris() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`
        SELECT id_produk, SUM(sales_amount) AS total_produkpopuler
        FROM transactions
        GROUP BY id_produk
        ORDER BY total_produkpopuler DESC
        LIMIT 1
    `;
    return data;
}

export async function ProdukTerjual() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT ROUND(SUM(sales_amount)) AS total_terjual from transactions`;
    return data;
}

export async function Rata2Terjual() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT
    ROUND(AVG(sales_amount) / 2) * 2 AS rata_rata_terjual FROM transactions;

`;
    return data;
}

export async function FilteredCatalogue(
    query: string, 
    currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`
    SELECT * FROM item_catalogue 
    WHERE name ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
  `;
  return data;
}

export async function FilteredTransactions(
    query: string, 
    currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`
      SELECT 
      id_transaksi as transaction_id, 
      customer_name AS name, 
      id_produk AS id_product, 
      tanggal_transaksi AS date_bought, 
      sales_amount AS sales, 
      total_harga AS total_price 
      FROM transactions 
      WHERE customer_name ILIKE ${`%${query}%`} OR ${query} = ''
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
  return data;
}