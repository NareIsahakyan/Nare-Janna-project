import styles from "./aTask.module.css";
import tasklList from "../../taskbarDatas/task.json";

const ATask = ({ id, title, description, image, worcersIcons, date }) => {
  return (
    <>
      <div className={styles.aTask}>
        <h3>title:{title}</h3>
        <div style={{ textAlign: "center" }}>
          <img src={image} alt="" />
        </div>
        <h4>description:{description}</h4>
        <div className={styles.taskPart}>
          <div>
            <p>workers:{worcersIcons}</p>
          </div>
          <div>
            <p>01.02.2025{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ATask;
