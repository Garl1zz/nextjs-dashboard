import { fetchProductsData } from "@/app/lib/datacatalogue";
import { alice } from "@/app/ui/fonts";

export default async function Table() {
    const productsData = await fetchProductsData();
    return (
        <div className="flex flex-col">
            <div className="bg-[#D9D9D9] grid grid-cols-4 ">
                <div className="m-1 text-2xl">Name</div>
                <div className="m-1 text-2xl">Category</div>
                <div className="m-1 text-2xl">Pricing</div>
                <div className="m-1 text-2xl">In Stock</div>
            </div>
            <div className="grid grid-cols-1">
                {productsData.map((item) => (
                    <div key={item.title}>
                        <div className={`text-xl ${alice.className}`}>{item.title}</div>
                        <div className={`text-xl ${alice.className}`}>{item.price}</div>
                        
                    </div>

                ))}
                
            </div>
        </div>
    )
}