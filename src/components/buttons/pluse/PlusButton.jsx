import plusImg from "./../../../images/plus.png";
import styles from "./plusButton.module.css";
const PlusButton = ({ clickHandler }) => {
  return (
    <>
      <button className={styles.PlusButton} onClick={clickHandler.clickHandler}>
        <img className={styles.plusImg} src={plusImg} alt="+" />
      </button>
    </>
  );
};

export default PlusButton;
