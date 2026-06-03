import styles from "./Menu.module.css";
import menuOptionPlaceholder from "../../assets/menu-option-placeholder.svg";

export function Menu() {
    return (
        <>
            <nav className={styles.menuNav}>
                <a href="#" className={styles.menuOptionLink}>
                    <img src={menuOptionPlaceholder} className={styles.menuOptionIcon} alt="Menu option placeholder" />
                </a>
                <a href="#" className={styles.menuOptionLink}>
                    <img src={menuOptionPlaceholder} className={styles.menuOptionIcon} alt="Menu option placeholder" />
                </a>
                <a href="#" className={styles.menuOptionLink}>
                    <img src={menuOptionPlaceholder} className={styles.menuOptionIcon} alt="Menu option placeholder" />
                </a>
                <a href="#" className={styles.menuOptionLink}>
                    <img src={menuOptionPlaceholder} className={styles.menuOptionIcon} alt="Menu option placeholder" />
                </a>
            </nav>
        </>
    );
}