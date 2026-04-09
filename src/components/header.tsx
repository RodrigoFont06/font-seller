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
            <h1>{title}</h1>
            <ul>
                <li><LinkComponent href="" clases={"links"}><i className="person bi bi-person-fill"></i></LinkComponent></li>
                <li><SearchBar /></li>
            </ul>
        </header>
    )
}