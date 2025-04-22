import { getProductById } from "@/app/lib/datacatalogueballs";
import EditItemClient from "../page";

export default function EditProductPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const product = getProductById(id);

    if (!product) {
        return <div className="text-red-500 text-center mt-10">Product not found</div>;
    }

    return <EditItemClient initialProduct={product} />;
}