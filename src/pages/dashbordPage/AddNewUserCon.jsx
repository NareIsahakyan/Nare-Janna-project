import AddButton from "./AddButton"
import styles from "./Dashboard.module.css"
function AddNewUserCon(){
    return(
        <>
        <div className={styles.userDiv}>
            <p className={styles.p}>Add new user</p>
             <AddButton/>
        </div></>
    )
}

export default AddNewUserCon