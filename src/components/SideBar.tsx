import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from "react";

export default function SideBar() {
    const [categories, setCategories] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

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
        <aside className='bg-[#5E778C]/30 backdrop-blur-[1px] flex justify-center items-baseline h-screen w-1/8 shadow p-4'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-white font-bold text-2xl text-center'>Categories</h2>
                <ul className="">
                    <li className="text-white hover:text-blue-300 w-full flex justify-between" onClick={() => setIsOpen(!isOpen)}>
                        <button className='text-left'>Components</button>
                        <p>{isOpen ? '-' : '+'}</p>
                    </li>
                    <li className={`text-white/80 text-[15px] ${isOpen ? 'block' : 'hidden'}`}>
                        Hola
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </aside>
    )
}