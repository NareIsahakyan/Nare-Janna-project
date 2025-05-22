import { useState } from "react";
import Check from "../buttons/check/Check";
import styles from "./taskbar.module.css";

const AddingNewTaskbarWName = ({ addNewCalumn, isAdd }) => {
  const [taskName, setTaskname] = useState("");

  function addNewCalumnName() {
    return isAdd(false);
  }
  return (
    <>
      <div className={styles.task}>
        <div className={styles.taskName}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewCalumn(taskName);
            }}
          >
            <input
              value={taskName}
              onChange={(e) => setTaskname(e.target.value)}
            />
          </form>

          <Check addNewCalumnName={addNewCalumnName} />
        </div>

        <div className={styles.taskAddings}></div>
      </div>
    </>
  );
};

export default AddingNewTaskbarWName;
