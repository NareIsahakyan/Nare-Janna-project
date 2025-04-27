
import AddButton from "./AddButton"
import styles from "./Dashboard.module.css"
function NewProjectAdd(){
    return(
        <>

        <div className={styles.projectDiv}>
            <p className={styles.p}>New project</p>
             <AddButton/>
        </div>
        </>
    )

}

export default NewProjectAdd