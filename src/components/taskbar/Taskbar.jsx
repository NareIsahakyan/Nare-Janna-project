import { useState } from "react";
import NewTaskbarAdd from "./NewTaskbarAdd";
import styles from "./taskbar.module.css";
import { useTranslation } from "react-i18next";
const Taskbar = () => {
  const { t } = useTranslation();
  const projetName = "Projet Name";
  const [columns, setColumns] = useState([]);
  console.log(columns);
  function addNewCalumn() {
    const columnToAdd = {
      id: generatedId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  function generatedId() {
    return Math.floor(Math.random() * 1001);
    //գեներացնենք 0-1000 միջակայքում ռանդոմ թիվ
  }

  return (
    <>
      <div className={styles.taskbarConteiner}>
        <div className={styles.taskbar}>
          <div style={{ position: "fixed", width: "94%" }}>
            <div className={styles.taskbarDatas}>
              <div className={styles.projectData}>
                <h3>{projetName}</h3>
                <progress value={50} max={100} />
              </div>

              <div>
                <NewTaskbarAdd addNewCalumn={addNewCalumn} />
              </div>
            </div>
          </div>

          <div className={styles.taskbarTools}>
            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />

            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />
            <NewTaskbarAdd />
          </div>
        </div>
      </div>
    </>
  );
};
export default Taskbar;
