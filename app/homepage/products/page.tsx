import { Suspense } from 'react';
import Tablehome from "@/app/ui/itemcatalogue/table";
import Search from '@/app/ui/forum-user/Search';
import { alice } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import { fetchProductsData } from '@/app/lib/datacatalogue';

export default async function ProductsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const itemsPerPage = 6;

  const allItems = await fetchProductsData();
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const paginatedItems = allItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <>
      <div className={`mb-4 ${alice.className}`}>
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search Product..." />
        </Suspense>
      </div>

      <div className="w-full">
        <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
          <Tablehome />
        </Suspense>
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
  ;
}
