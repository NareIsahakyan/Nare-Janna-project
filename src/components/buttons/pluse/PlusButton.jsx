import plusImg from "./../../../images/plus.png";
import styles from "./plusButton.module.css";
const PlusButton = (props) => {
  return (
    <>
      <button className={styles.PlusButton} onClick={props.addNewCalumn}>
        <img className={styles.plusImg} src={plusImg} alt="+" />
      </button>
    </>
  );
};

export default PlusButton;
