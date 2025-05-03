import CrossButton from "../buttons/crossButton/CrossButton";
import styles from "./registration.module.css";
import AddButton from "../buttons/addButton/AddButton";
import AddUserInfo from "./AddUserInfo";
import { useTranslation } from "react-i18next";




const UserRegistration = () => {
    function clickCrossHandler() {

    };
    
    function clickAddHandler() {
    
    };
  const {t} = useTranslation();
    return (
        <div className={styles.userRegistrationConteiner}>
            <div className={styles.userRegistration}>
                <div className={styles.crossButton}>
                    <CrossButton size={24} bgcolor={"#e7e1f5"} clickHandler={clickCrossHandler} />
                </div>
                <h2>{t("addNewUser")}</h2>
                <div>
                    <AddUserInfo/>
                </div>
                <div className={styles.addButton}>
                    <AddButton clickHandler={clickAddHandler}/>
                </div>
            </div>

        </div>

    )
}

export default UserRegistration;