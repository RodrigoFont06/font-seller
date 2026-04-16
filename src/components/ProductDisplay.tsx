import { useEffect } from "react";
import ProductCard from "./ProductCard";
import Product from "../types/productType";

interface ProductDisplayProps {
    product: Product[],
}

export default function ProductDisplay({ product: p }: ProductDisplayProps) {
    

    return <>
        <ProductCard product={p}/>
    </>
}