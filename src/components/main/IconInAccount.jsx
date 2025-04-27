import styles from "./Main.module.css"
import fac from "../../imeges/facebook.png"
import inst from "../../imeges/instagram.png"
import link from "../../imeges/linkedin.png"
function IconInAccount(){
    return(
        <>
        <div>
            <h1 className={styles.account}>Create an Account</h1>
            <div className={styles.icon}>
              <img src={fac} alt="Facebook" className={styles.icon1}></img>
              <img src={inst } alt ="inst" className={styles.icon1}></img>
              <img src={link} alt ="link" className={styles.icon1}></img>
            </div>
        </div>
        </>
    )
}

export default IconInAccount