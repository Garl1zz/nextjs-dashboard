import { getProductById } from "@/app/lib/datacatalogue";
import EditItemClient from "@/app/adminpage/itemcatalogue/editproduct/page";

interface Product {
  id_produk: string;
  title: string;
  category: string;
  price: number;
  stock: number;
  img_url: string;
}

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EditProductPage({ params }: Props) {
  const editParams = await params;
  const productId = editParams.id;

  if (!productId || productId === "undefined") {
    return (
      <div className="text-red-500 text-center mt-10">
        Invalid product ID: {productId}
      </div>
    );
  }

  let product: Product | null = null;
  try {
    product = await getProductById(productId);
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to load product
      </div>
    );
  }
  if (!product) {
    return (
      <div className="text-red-500 text-center mt-10">
        Product not found: {productId}
      </div>
    );
  }

  return <EditItemClient initialProduct={product} />;
}

// export default async function EditProductPage({ params }: Props) {
//   const resolvedParams = await params;
//   const productId = resolvedParams.id;

//   let product: Product | null = null;
//   try {
//     product = await getProductById(productId);
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return (
//       <div className="text-red-500 text-center mt-10">
//         Failed to load product
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-red-500 text-center mt-10">Product not found</div>
//     );
//   }

//   return <EditItemClient initialProduct={product} />;
// }