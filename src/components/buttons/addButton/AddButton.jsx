import styles from "./addButton.module.css";
import { useTranslation } from "react-i18next";

const AddButton = ({ clickHandler }) => {
    const {t} = useTranslation();
    return (
        <>
            <button className={styles.addButton} onSubmit={clickHandler}>
            {t("add")}
            </button>
        </>
    )
}

export default AddButton;