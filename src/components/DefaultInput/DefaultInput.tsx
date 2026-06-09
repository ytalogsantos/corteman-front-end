import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
    id: string,
    labelText: string,
} & React.ComponentProps<"input">;

export function DefaultInput({type, id, labelText, ...props}: DefaultInputProps) {
    return (
        <div className={styles.defaultInputContainer}>
            <label className={styles.defaultInputLabel} htmlFor={id}>{labelText}</label>
            <input className={styles.defaultInput} type={type} id={id} {...props}/>
        </div>
    );
}