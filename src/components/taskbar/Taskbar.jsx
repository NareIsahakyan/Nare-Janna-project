import { useEffect, useState } from "react";
import NewTaskbarAddButton from "./NewTaskbarAddButton";
import styles from "./taskbar.module.css";
import { useTranslation } from "react-i18next";
import TasksList from "./TasksList";
// import columns from "../../taskbarDatas/column.json";
import taskData from "../../taskbarDatas/task.json";
import AddingNewTaskbarWName from "./AddingNewTaskbarWName";

const Taskbar = () => {
  const { t } = useTranslation();
  const projetName = "Projet Name";

  const columns = [
    { id: 1, status: "Backlog", title: "Backlog" },
    { id: 2, status: "Todo", title: "Todo" },
    { id: 3, status: "Blocked", title: "Blocked" },
    { id: 4, status: "ToTest", title: "ToTest" },
    { id: 5, status: "Backlog", title: "Backlog" },
    { id: 6, status: "Todo", title: "Todo" },
    { id: 7, status: "Blocked", title: "Blocked" },
    { id: 8, status: "ToTest", title: "ToTest" },
  ];

  const [column, setColumn] = useState(columns);
  const [tasks, setTasks] = useState(taskData);
  const [count, setCount] = useState(0);
  const [addingNewTaskBar, setAddingNewTaskBar] = useState(false);
  const [addingNewTask, setAddingNewTask] = useState(false);

  console.log(columns);

  function addColumn() {
    return (
      <div>
        <AddingNewTaskbarWName
          addNewCalumn={(text) => addNewCalumn(text)}
          isAdd={(isadd) => setAddingNewTaskBar(isadd)}
        />
      </div>
    );
  }
  function addNewCalumn(text) {
    setCount(count + 1);
    setAddingNewTaskBar(true);
    useEffect(() => {
      setColumn((prev) => [
        ...prev,
        {
          id: column.length + count,
          title: { text },
          status: { text },
        },
      ]);
      console.log(columns);
    }, [addColumn]);
  }
  console.log(columns);
  return (
    <>
      <div className={styles.taskbarConteiner}>
        <div className={styles.taskbar}>
          <div style={{ position: "fixed", width: "94.0%" }}>
            <div className={styles.taskbarDatas}>
              <div className={styles.projectData}>
                <h3>{projetName}</h3>
                <progress value={50} max={100} />
              </div>

              <div>
                <NewTaskbarAddButton addNewCalumn={addNewCalumn} />
              </div>
            </div>
          </div>

          <div
            className={styles.taskbarTools}
            //  `${ addingNewTaskBar
            //     ? `${styles.taskbarTools1}`
            //     : `${styles.taskbarTools}`
            // `}
          >
            {
              <TasksList
                tasks={tasks}
                setTasks={setTasks}
                key={tasks.status}
                addingNewTask={addingNewTask}
                columns={columns}
              />
            }
            {addingNewTaskBar && addColumn()}
          </div>
        </div>
      </div>
    </>
  );
};
export default Taskbar;
