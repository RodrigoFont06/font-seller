import '../assets/header.css';

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

export default function Header({ title, children, ...props }: HeaderProps) {
    return (
        <header {...props}>
            <h1>{title}</h1>
            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            </ul>
        </header>
    )
}