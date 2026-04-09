import '../assets/header.css';
import React, {useState} from 'react';
import LinkComponent from './linkComponent';
import SearchBar from './searchBar';

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
    

    return (
        <header className='flex justify-around items-center h-25 bg-black/30  backdrop-blur-[1px]'>
            <h1 className='text-[2.5rem] text-white fontSeller font-semibold'>{title}</h1>
            <ul className='flex items-center gap-8'>
                <li><LinkComponent href="" clases={"links"}><i className="person bi bi-person-fill"></i></LinkComponent></li>
                <li><SearchBar /></li>
            </ul>
        </header>
    )
}