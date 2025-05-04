import PlusButton from "../buttons/pluse/PlusButton";
import styles from "./taskbar.module.css";
import { useTranslation } from "react-i18next";

const NewTaskbarAdd = ({ clickHandler }) => {
  const { t } = useTranslation();
  function clickHandler() {}
  return (
    <>
      <div className={styles.newTaskbarAdd}>
        <div>
          <p>{t("newTaskbar")}</p>
        </div>
        <div>
          <PlusButton clickHandler={clickHandler} />
        </div>
      </div>
    </>
  );
};
export default NewTaskbarAdd;
