import { useState } from "react";
import Product from "../types/productType";

export default function ProductCard({ product }: { product: Product }) {


    return <div className="product-card border-2 rounded-[10px] border-black p-2 h-auto flex flex-col items-center gap-2">
        <section id="productHeader" className="w-full">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-[10px]" />
        </section>
        <section id="productBody" className="w-full">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-xl font-semibold">US${product.price.toFixed(2)}</p>
            <article className="flex justify-around items-center">
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <p className="text-sm text-gray-500">SKU: {product.id}</p>
            </article>
        </section>
    </div>
};