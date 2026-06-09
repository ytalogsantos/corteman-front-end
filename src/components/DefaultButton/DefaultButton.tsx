import styles from "./DefaultButton.module.css";

type DefaultButtonProps = {
    icon?: string,
    text: string,
    color?: "cyan" | "red",
} & React.ComponentProps<"button">;

export function DefaultButton({ id, icon, text, color = "cyan", onClick, ...props }: DefaultButtonProps) {
    return (
        <>
            <button id={id} value={text} onClick={onClick} className={`${styles.defaultButton} ${styles[color]}`}>
                {text}
                {icon && <img src={icon} className={styles.defaultButtonIcon} />}
            </button>
        </>
    );
} 