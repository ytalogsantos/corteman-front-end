import styles from "./Heading.module.css";

type HeadingProps = {
    children: React.ReactNode
    color?: "blue" | "cyan"
}

export function Heading({ children, color = "cyan" }: HeadingProps) {
    return (
        <h1 className={`${styles[color]}`}>
            {children}
        </h1>
    );
}