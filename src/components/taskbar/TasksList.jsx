import { useState } from "react";
import Check from "../buttons/check/Check";
import PlusButton from "../buttons/pluse/PlusButton";
import styles from "./taskbar.module.css";
// import columns from "../../taskbarDatas/column.json";
import { useDrag, useDrop } from "react-dnd";
import ATask from "./../tasklist/ATask";

const TasksList = ({ tasks, setTasks, addingNewTask, columns }) => {
  const [task, SetTask] = useState({
    id: "",
    name: "",
    status: "",
  });
  const addtaskData = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      const list = [...prev, task];
      return list;
    });
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    console.log("droped", id);
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.is === id) {
          return { ...t, status: status };
        }
        return t;
      });
      return mTasks;
    });
  };

  return (
    <>
      <div
        ref={drop}
        className={`${styles.task}
         " ${isOver ? { bacgroundColor: "broun", height: "200px" } : ""}"`}
      >
        {columns.map((column) => {
          return (
            <div key={column.id}>
              <div className={styles.taskName}>
                <p>{column.title}</p>
                <PlusButton addtaskData={addtaskData} />
              </div>
              <div ref={drag} className={styles.taskAddings} key={column.id}>
                {tasks.map((task) => {
                  <ATask task={task} key={task.id} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TasksList;
