import '../assets/header.css';

export default function Header({ title, children, ...props }) {
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