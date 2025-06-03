import { NextResponse } from "next/server";
import { updateProduct } from "@/app/lib/datacatalogue";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const routeParams = await params; 
  const productId = routeParams.id;

  const body = await request.json();
  const { title, category, price, stock, img_url } = body; 

  try {
    await updateProduct(productId, { title, category, price, stock, img_url, id_produk: productId });
    return NextResponse.json({ message: "Product updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}