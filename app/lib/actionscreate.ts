// "use server"
// import { neon } from '@neondatabase/serverless';

// const sql = neon(process.env.DATABASE_URL!);

// export async function addProduct(data: {
//     productName: string;
//     category: string;
//     pricing: number;
//     stock: number;
// }) {
//     try {
//         const result = await sql`
//       INSERT INTO item_catalogue (name, category, pricing, stock)
//       VALUES (${data.productName}, ${data.category}, ${data.pricing}, ${data.stock})
//       RETURNING *;
//     `;
//         return { success: true, data: result[0] };
//     } catch (error) {
//         console.error("Failed to add product:", error);
//         return { success: false, error: "Database error" };
//     }
// }

"use server"
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function addProduct(data: {
    productName: string;
    category: string;
    pricing: number;
    stock: number;
    id_produk?: string; // Menambahkan id_produk sebagai opsional
}) {
    try {
        const result = await sql`
      INSERT INTO item_catalogue (name, category, pricing, stock, id_produk)
      VALUES (${data.productName}, ${data.category}, ${data.pricing}, ${data.stock}, ${data.id_produk || null})
      RETURNING *;
    `;
        return { success: true, data: result[0] };
    } catch (error) {
        console.error("Failed to add product:", error);
        return { success: false, error: "Database error" };
    }
}

export async function addTransactions(data: {
    id_transaksi?: string;
    customerName: string;
    tanggalTransaksi: string;
    totalHarga: number;
    salesAmount: number;
    idProduk: string;
}) {
    try {
        const result = await sql`
        INSERT INTO transactions (id_transaksi, customer_name, tanggal_transaksi, sales_amount, total_harga, id_produk)
        VALUES (${data.id_transaksi || null}, ${data.customerName}, ${data.tanggalTransaksi}, ${data.salesAmount}, ${data.totalHarga}, ${data.idProduk})
        RETURNING *;
      `;      
        return { success: true, data: result[0] };
    } catch (error) {
        console.error("Failed to add transactions", error);
        return { success: false, error: "Database error" };
    }
}