import styles from "./Header.module.css"
import Language from "./Language";
import Logo from "./Logo";


function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.box}>
            <Logo />
            </div>
            <Language/>
        </div>

    )
}

export default Header;