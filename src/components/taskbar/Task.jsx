import { useState } from "react";
import Check from "../buttons/check/Check";
import PlusButton from "../buttons/pluse/PlusButton";
import styles from "./taskbar.module.css";

const Task = (props) => {
  const [taskName, setTaskname] = useState("");
  const [clickCheked, setClickCheked] = useState(false);
  function addNewCalumnName() {
    return setClickCheked(true);
  }

  return (
    <>
      <div className={styles.task}>
        {(!clickCheked && (
          <div className={styles.taskName}>
            <form>
              <input
                value={taskName}
                onChange={(e) => setTaskname(e.target.value)}
              />
            </form>
            <Check addNewCalumnName={addNewCalumnName} />
          </div>
        )) ||
          (clickCheked && (
            <div className={styles.taskName}>
              <p>{taskName}</p> <PlusButton addNewCalumn={props.addNewCalumn} />
            </div>
          ))}
      </div>
    </>
  );
};
export default Task;
