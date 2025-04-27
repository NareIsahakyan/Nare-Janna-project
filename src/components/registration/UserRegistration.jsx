import CrossButton from "../buttons/crossButton/CrossButton";
import styles from "./registration.module.css";
function clickHandler() {

}

const UserRegistration = () => {

    return (
        <div className={styles.userRegistrationConteiner}>
            <div className={styles.userRegistration}>
            <div className={styles.crossButton}>
                <CrossButton size={24} bgcolor={"#e7e1f5"} clickHandler={clickHandler} />
            </div>
            </div>
           
        </div>

    )
}

export default UserRegistration;