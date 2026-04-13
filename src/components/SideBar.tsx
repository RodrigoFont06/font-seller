import { useState, useEffect } from "react";


export default function SideBar() {
    const [categories, setCategories] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className='bg-[#5E778C]/30 backdrop-blur-[1px] flex justify-center items-baseline h-screen w-1/8 shadow p-4'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-white font-bold text-2xl text-center'>Categories</h2>
                <ul className="">
                    <li className="text-white hover:text-blue-300 w-full flex justify-between" onClick={() => setIsOpen(!isOpen)}>
                        <button className='text-left'>Components</button>
                        <p>{isOpen ? '-' : '+'}</p>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </aside>
    )
}