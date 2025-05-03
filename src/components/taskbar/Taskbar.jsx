import NewTaskbarAdd from "./NewTaskbarAdd";
import styles from "./taskbar.module.css";
import { useTranslation } from "react-i18next";
const Taskbar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.taskbarConteiner}>
        <div className={styles.taskbar}>
          <div className={styles.taskbarDatas}>
            <div>
              <h1>Project Name</h1>
            </div>

            <div>
              <NewTaskbarAdd />
            </div>
          </div>

          <div className={styles.taskbarTools}></div>
        </div>
      </div>
    </>
  );
};
export default Taskbar;
