interface LinkComponentProps {
    href: string;
    children: React.ReactNode;
    clases?: string;
}

export default function LinkComponent({ href, children, clases }: LinkComponentProps) {
    return (
        <a href={href} className={clases}>
            {children}
        </a>
    )
}