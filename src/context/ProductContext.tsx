import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect, createContext, ReactNode } from "react";
import Product from '../types/productType';

interface ProductContextType {
    products: Product[],
    loading: boolean,
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];

                setProducts(data);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    )
}