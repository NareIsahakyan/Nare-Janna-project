import JN from "../../imeges/JN.png"
import styles from "./Header.module.css"
function Logo(){
    return(
        <>
        <div className={styles.box}>
        <img src={JN} alt="Logo" className={styles.Logo}></img>
        </div>
        </>
    )
}

export default Logo