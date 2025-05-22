import { useState } from "react";
import styles from "./addANewTask.module.css";
import AddButton from "../buttons/addButton/AddButton";
import CrossButton from "../buttons/crossButton/CrossButton";
import { useTranslation } from "react-i18next";
import userimg from "./../../images/user.png";

const AddANewTask = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [worker, setWorker] = useState([]);

  const clickCrossHandler = () => {
    setDate("");
    setTitle("");
    setImage("");
    setDescription("");
    setWorker("");
    // gnal taskbar
  };
  const clickHandler = (e) => {
    console.log(date, title, description, worker);
    // uxarkel backend
  };
  return (
    <>
      <div className={styles.addANewTaskConteiner}>
        <div className={styles.addANewTask}>
          <div className={styles.crossButton}>
            <div className={styles.date}>
              <div>
                <input
                  className={styles.dataInput}
                  type="date"
                  value={date}
                  min="2025-01-01"
                  max="2026-01-01"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <h4 className={styles.statusInput}>Status:TODO</h4>
              </div>
            </div>

            <CrossButton
              size={24}
              bgcolor={"#e7e1f5"}
              clickHandler={clickCrossHandler}
            />
          </div>
          <div>
            <input
              className={styles.titleInput}
              type="text"
              id="title"
              value={title}
              placeholder="Add title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <input
            className={styles.inputImage}
            name="image"
            placeholder={t("image")}
            type="url"
            accept=".jpg, .jpeg, .png"
            alt=""
            onChange={(e) => setImage(e.target.value)}
          /> */}
          <div className={styles.imgdescriptions}>
            <img
              className={styles.image}
              src="https://i.etsystatic.com/12950649/r/il/f7adc9/4544402562/il_570xN.4544402562_5y21.jpg"
              alt="U"
            />
            <textarea
              type="text"
              id="description"
              value={description}
              placeholder="Add descriptions"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className={styles.userLine}>
            <img className={styles.user} src={userimg} alt="U" />
            <input
              className={styles.userInput}
              type="text"
              id="worker"
              value={worker}
              placeholder="Add workers"
              name="worker"
              onChange={(e) => setWorker(e.target.value)}
            />{" "}
          </div>

          <div className={styles.add}>
            <AddButton clickHandler={clickHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddANewTask;
