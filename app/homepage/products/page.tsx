import { Suspense } from 'react';
import Tablehome from "@/app/ui/itemcatalogue/table";

export default async function ProductsPage() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
        <Tablehome />
      </Suspense>
    </div>
  );
}
