import WebsiteinfomationBox from "./WebsiteinfomationBox"
import styles from "./Main.module.css"
import LoginPageInfo from "./LoginPageInfo"


function Main() {
    return (
        <>
        <div className={styles.main}>
       <WebsiteinfomationBox/>
       <LoginPageInfo/>
       </div>
        </>
    )
}

export default Main