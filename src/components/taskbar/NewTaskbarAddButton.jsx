import PlusButton from "../buttons/pluse/PlusButton";
import styles from "./taskbar.module.css";
import { useTranslation } from "react-i18next";

const NewTaskbarAddButton = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.newTaskbarAddButton}>
        <div>
          <p>{t("newTaskbar")}</p>
        </div>
        <div>
          <PlusButton addNewCalumn={props.addNewCalumn} />
        </div>
      </div>
    </>
  );
};

export default NewTaskbarAddButton;
