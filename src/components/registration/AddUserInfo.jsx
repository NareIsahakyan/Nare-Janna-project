import styles from "./registration.module.css";
import userimg from "./../../images/user.png"
import { useTranslation } from "react-i18next";

const AddUserInfo = () => {
  const {t} = useTranslation();
    return (
        <>
        <form action={""} >
        <label className={styles.aboutInput}>
        {t("fullName")}:<br/> <input formTarget="" className={styles.inputUserData} name="NameSurname" placeholder={t("fullName")} type="text"/>
      </label><br/>
      <label className={styles.aboutInput}>
      {t("image")}:<br/> <input className={styles.inputUserData} name="image" placeholder={t("image")} type="url" accept=".jpg, .jpeg, .png" alt={userimg}/>
      </label><br/>
      <label className={styles.aboutInput}>
      {t("email")}:<br/> <input className={styles.inputUserData} name="email" placeholder={t("email")} type="email"/>
      </label><br/>
      <label className={styles.aboutInput}>Do you agree to the terms?</label><br/>
    <label className={styles.aboutInput}><input type="radio" name="radio" value="yes" defaultChecked={true}/> Yes</label>
    <label className={styles.aboutInput}><input type="radio" name="radio" value="no" /> No</label>
        </form>
        </>
    )
}
export default AddUserInfo;