/*Is a component for marking the beginning and end of a project*/
import styles from "./Dashboard.module.css"


function ProjectStartAndEndDate(){
    return(
        <>
        <div className={styles.dateBox}>
            <div className={styles.date}>Agu 20,2021</div>
            <div className={styles.date}>Agu 20,2022</div>
        </div>
        </>
    )
}

export default ProjectStartAndEndDate