import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from "react";

export default function SideBar() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesCollection = collection(db, "products");
            const categoriesSnapshot = await getDocs(categoriesCollection);
            const categoriesList = categoriesSnapshot.docs.map(doc => doc.data().category);
            setCategories(categoriesList);
        };

        fetchCategories();
    }, []);

    return (
        <aside className='bg-black/40 backdrop-blur-[1px] flex justify-center items-baseline h-screen w-1/8 shadow p-4'>
            <div>
                <h2 className='text-white font-bold text-2xl'>Categories</h2>
                <ul className="">
                    <li>
                        
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </aside>
    )
}