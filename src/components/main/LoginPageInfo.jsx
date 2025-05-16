/* This is a component that has two components embedded within it: icon and login*/

import IconInAccount from "./IconInAccount"
import LoginForm from "./LoginForm"
import styles from "./Main.module.css"

function LoginPageInfo(){
    return(
        <>
        <div className={styles.box2}>
          <IconInAccount/>
          <LoginForm/>
        </div>
        </>
    )
}

export default LoginPageInfo