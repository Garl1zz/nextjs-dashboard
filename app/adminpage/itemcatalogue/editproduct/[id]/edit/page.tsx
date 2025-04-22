import { getProductById } from "@/app/lib/datacatalogue";
import EditItemClient from "@/app/adminpage/itemcatalogue/editproduct/page"; // Corrected import path

// Define the Product type to match datacatalogue.ts
interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}

// Define the props type for a standard Next.js dynamic route
type Props = {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EditProductPage({ params }: Props) {
    const resolvedParams = await params;
    const productName = resolvedParams.name;

  
  let product: Product | null = null;
  try {
    product = await getProductById(productName);
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div className="text-red-500 text-center mt-10">Failed to load product</div>;
  }

  
  if (!product) {
    return <div className="text-red-500 text-center mt-10">Product not found</div>;
  }

  return <EditItemClient initialProduct={product} />;
}