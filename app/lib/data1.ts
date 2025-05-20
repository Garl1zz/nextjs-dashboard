"use server"
import { neon } from '@neondatabase/serverless';


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