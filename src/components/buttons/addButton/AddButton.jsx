import styles from "./addButton.module.css";
import { useTranslation } from "react-i18next";

const AddButton = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <button className={styles.addButton} onClick={props.clickHandler}>
        {t("add")}
      </button>
    </>
  );
};

export default AddButton;
