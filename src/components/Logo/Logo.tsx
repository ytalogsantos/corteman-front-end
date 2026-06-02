import styles from "./Logo.module.css";
import logoPlaceholder from "../../assets/app-logo-placeholder.svg"

export function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <a href="#" className={styles.logoLink}>
                    <img src={logoPlaceholder} className={styles.logoImage} alt="Logo placeholder" />
                    <span>CORTEMAN</span>
                </a>
            </div>
        </>
    );
}