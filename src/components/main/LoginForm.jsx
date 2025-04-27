import { Link } from "react-router-dom"
import email from "../../imeges/email.png"
import key from "../../imeges/key.png"
import styles from "./Main.module.css"
function LoginForm(){
    return(
        <>
        <div>
            <h3 className={styles.h3}>Email</h3>
            <div className={styles.inputicon}>
                <img src={email} alt="email"   className={styles.img1}></img>
                <input type="email" placeholder="Enter your email" className={styles.input} />
            </div>
            <h3 className={styles.h3}>Password</h3>
            <div className={styles.inputicon}>
            <img src={key } alt="key "className={styles.img1} />
            <input type="password" placeholder="Enter your password" className={styles.input}  />
            </div>
         <button className={styles.button1}>Log in</button>
        </div>

        </>
    )
}

export default LoginForm