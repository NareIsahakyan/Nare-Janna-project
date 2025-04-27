import crossImg from "./../../../images/cross.png";
import styles from "./crossButton.module.css"
const CrossButton = ({ size, bgcolor, clickHandler }) => {

    return (
        <>
            <button className={styles.crossButton} onClick={clickHandler}>
                <img
                    src={crossImg}
                    alt="OF"
                    width={size}
                    height={size}
                    style={{ backgroundColor: { bgcolor }}}
                />
            </button>
        </>
    )
}

export default CrossButton;