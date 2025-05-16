/*Here the header component is created, which contains the logo component and the language component.*/ 

import styles from "./Header.module.css"
import Language from "./Language";
import Logo from "./Logo";


function Header() {

    return (
        <div className={styles.header}>
            <Logo />
            <Language/>
        </div>

    )
}

export default Header;