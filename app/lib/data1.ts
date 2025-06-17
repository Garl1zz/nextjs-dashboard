"use server"
import { stackServerApp } from '@/stack';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';


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
    WHERE 
    name ILIKE ${`%${query}%`} OR
    category ILIKE ${`%${query}%`} OR
    pricing ::text ILIKE ${`%${query}%`} OR
    stock::text ILIKE ${`%${query}%`} OR
    id_produk :: text ILIKE ${`%${query}%`} OR
    img_url ILIKE ${`%${query}%`}
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

export async function fetchDataCataloguePages(query: string) {
  try {
    
    const data = await sql`SELECT COUNT (*)
    FROM item_catalogue 
    WHERE
      name ILIKE ${`%${query}%`} OR
      category ILIKE ${`%${query}%`} OR
      pricing ::text ILIKE ${`%${query}%`} OR
      stock::text ILIKE ${`%${query}%`} OR
      id_produk :: text ILIKE ${`%${query}%`} OR
      img_url ILIKE ${`%${query}%`}
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
    // Get transaction details before deleting (to restore stock)
    const transaction = await sql`
      SELECT sales_amount, id_produk 
      FROM transactions 
      WHERE id_transaksi = ${id_transaksi}
    `;
    
    if (transaction.length > 0) {
      // Delete the transaction
      await sql`DELETE FROM transactions WHERE id_transaksi = ${id_transaksi}`;
      
      // Restore the stock
      await sql`
        UPDATE item_catalogue 
        SET stock = stock + ${transaction[0].sales_amount}
        WHERE id_produk = ${transaction[0].id_produk}
      `;
    }
    
    revalidatePath("adminpage/transactions");
    return { success: true };
  } catch (error){
    console.error("Delete Error:", error)
    return { success: false, error: error };
  }
}

export async function addTransactions(data: {
  customerName: string;
  tanggalTransaksi: string;
  totalHarga: number;
  salesAmount: number;
  id_transaksi?: string;
  idProduk: string;
}) {
  try {
    
    const stockCheck = await sql`
      SELECT stock, name 
      FROM item_catalogue 
      WHERE id_produk = ${parseInt(data.idProduk)}
    `;
    
    if (stockCheck.length === 0) {
      return {
        success: false,
        error: 'Produk tidak ditemukan'
      };
    }
    
    if (stockCheck[0].stock < data.salesAmount) {
      return {
        success: false,
        error: `Stok tidak mencukupi! Stok tersedia: ${stockCheck[0].stock}`
      };
    }
    

    if (data.id_transaksi) {
      await sql`
        INSERT INTO transactions (
          id_transaksi,
          customer_name,
          tanggal_transaksi,
          total_harga,
          sales_amount,
          id_produk
        ) VALUES (
          ${data.id_transaksi},
          ${data.customerName},
          ${data.tanggalTransaksi},
          ${data.totalHarga},
          ${data.salesAmount},
          ${parseInt(data.idProduk)}
        )
      `;
    } else {
      await sql`
        INSERT INTO transactions (
          customer_name,
          tanggal_transaksi,
          total_harga,
          sales_amount,
          id_produk
        ) VALUES (
          ${data.customerName},
          ${data.tanggalTransaksi},
          ${data.totalHarga},
          ${data.salesAmount},
          ${parseInt(data.idProduk)}
        )
      `;
    }
    
  
    // update stock - kurangi sales amount
    await sql`
      UPDATE item_catalogue 
      SET stock = stock - ${data.salesAmount}
      WHERE id_produk = ${parseInt(data.idProduk)}
    `;
    
    const newStock = await sql`
      SELECT stock 
      FROM item_catalogue 
      WHERE id_produk = ${parseInt(data.idProduk)}
    `;
    
   
    revalidatePath('/adminpage/transactions');
    revalidatePath('/adminpage/item-catalogue');
    
    return {
      success: true,
      message: 'Transaksi berhasil ditambahkan!',
      remainingStock: newStock[0].stock
    };
    
  } catch (error) {
    console.error('Error in addTransactions:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal menambahkan transaksi'
    };
  }
}

// Manual stock update
export async function UpdateStocks(
  id_produk: string,
  newStock: number
) {
  try {
    
    const result = await sql`
      UPDATE item_catalogue 
      SET stock = ${newStock}
      WHERE id_produk = ${id_produk}
      RETURNING stock, name
    `;
    
    if (result.length === 0) {
      return {
        success: false,
        error: 'Produk tidak ditemukan'
      };
    }
    
    revalidatePath('/adminpage/item-catalogue');
    
    return {
      success: true,
      message: `Stok ${result[0].name} berhasil diupdate menjadi ${result[0].stock}`,
      newStock: result[0].stock
    };
    
  } catch (error) {
    console.error('Error updating stock:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal update stok'
    };
  }
}

//  ADJUST STOCK (add and subtract)
export async function AdjustStock(
  id_produk: string,
  adjustment: number,
  type: 'add' | 'subtract'
) {
  try {
    
    const currentStock = await sql`
      SELECT stock, name 
      FROM item_catalogue 
      WHERE id_produk = ${id_produk}
    `;
    
    if (currentStock.length === 0) {
      return {
        success: false,
        error: 'Produk tidak ditemukan'
      };
    }
   
    const newStock = type === 'add' 
      ? currentStock[0].stock + adjustment
      : currentStock[0].stock - adjustment;
    
    if (newStock < 0) {
      return {
        success: false,
        error: 'Stok tidak boleh negatif'
      };
    }
    

    await sql`
      UPDATE item_catalogue 
      SET stock = ${newStock}
      WHERE id_produk = ${id_produk}
    `;
    
    revalidatePath('/adminpage/item-catalogue');
    
    return {
      success: true,
      message: `Stok ${currentStock[0].name} berhasil ${type === 'add' ? 'ditambah' : 'dikurangi'} ${adjustment}. Stok sekarang: ${newStock}`,
      previousStock: currentStock[0].stock,
      newStock: newStock
    };
    
  } catch (error) {
    console.error('Error adjusting stock:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal adjust stok'
    };
  }
}

export async function GetLowStockProducts(threshold: number = 10) {
  try {
    const products = await sql`
      SELECT 
        id_produk,
        name,
        category,
        stock,
        pricing
      FROM item_catalogue
      WHERE stock <= ${threshold}
      ORDER BY stock ASC, name ASC
    `;
    
    return products;
  } catch (error) {
    console.error('Error getting low stock products:', error);
    return [];
  }
}