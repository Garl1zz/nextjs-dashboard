"use server"
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

const sql = neon(process.env.DATABASE_URL!);
const ITEMS_PER_PAGE = 6

export async function TotalRevenue() {
    const data = await sql`
    SELECT SUM(total_harga) as total from transactions`;
    return data;
}

export async function ProdukTerlaris() {
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
  const data = await sql`
    SELECT * FROM item_catalogue 
    WHERE name ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
  `;
  return data;
}

export async function FilteredTransactions(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql`
      SELECT 
        t.id_transaksi AS transaction_id, 
        t.customer_name AS name, 
        t.id_produk AS id_product, 
        TO_CHAR(t.tanggal_transaksi, 'YYYY-MM-DD') AS date_bought, 
        t.sales_amount AS sales, 
        t.total_harga AS total_price,
        i.name AS product_name
      FROM transactions t
      JOIN item_catalogue i ON t.id_produk = i.id_produk
      WHERE 
        t.customer_name ILIKE ${`%${query}%`} 
        OR TO_CHAR(t.tanggal_transaksi, 'YYYY-MM-DD') ILIKE ${`%${query}%`}
        OR i.name ILIKE ${`%${query}%`}
        OR t.id_produk ILIKE ${`%${query}%`}
        OR CAST(t.total_harga AS TEXT) ILIKE ${`%${query}%`}
        OR CAST(t.sales_amount AS TEXT) ILIKE ${`%${query}%`}
        ORDER BY tanggal_transaksi desc
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered transactions.');
  }
}

export async function fetchTransactionsPages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM transactions
    JOIN item_catalogue ON transactions.id_produk = item_catalogue.id_produk
    WHERE
      item_catalogue.name ILIKE ${`%${query}%`} OR
      item_catalogue.id_produk ILIKE ${`%${query}%`} OR
      transactions.total_harga::text ILIKE ${`%${query}%`} OR
      transactions.tanggal_transaksi::text ILIKE ${`%${query}%`} OR
      transactions.sales_amount :: text ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages > 0 ? totalPages : 1; 
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of transactions.');
  }
}

export async function deleteDataCatalogue(id_produk: string){
  try{
    const data = await sql`DELETE FROM item_catalogue WHERE id_produk = ${id_produk}`;
    revalidatePath("adminpage/itemcatalogue");
    return data;
  } catch (error){
    console.error("Delete Error:", error)
  }
}

export async function deleteDataTransactions(id_transaksi: string){
  try{
    const data = await sql`DELETE FROM transactions WHERE id_transaksi = ${id_transaksi}`;
    revalidatePath("adminpage/transactions");
    return data;
  } catch (error){
    console.error("Delete Error:", error)
  }
}