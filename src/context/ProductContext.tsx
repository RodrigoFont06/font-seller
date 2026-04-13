import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect, createContext, ReactNode } from "react";
// Crear componente interfaz de Product[]

interface ProductContext {
    products: Product[],
    loading: boolean,
}

export const AppContext = createContext<ProductContext | undefined>(undefined);

export function ProductContext({ children }: { children: ReactNode }) {
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
        <AppContext.Provider value={{ products, loading }}>
            {children}
        </AppContext.Provider>
    )
}