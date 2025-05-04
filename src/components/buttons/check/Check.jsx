import checkImg from "./../../../images/check.png";
import styles from "./check.module.css";
const Check = (props) => {
  return (
    <>
      <button className={styles.checkButton} onClick={props.addNewCalumnName}>
        <img className={styles.checkImg} src={checkImg} alt="V" />
      </button>
    </>
  );
};

export default Check;
