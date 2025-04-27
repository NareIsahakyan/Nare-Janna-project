import addButton from "../../imeges/add-button.png"
import styles from "./Dashboard.module.css"
function AddButton(){
    return(
        <>
        <img src={addButton} alt="addButton " className={styles.addimg}/>
        </>
    )
}

export default AddButton