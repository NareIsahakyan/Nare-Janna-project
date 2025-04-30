import ProjectStartAndEndDate from "../dashbordPage/ProjectStartAndEndDate"
import styles from "./Newproject.module.css"

function ProjectDate(){
    return(
        <>
        <div className={styles.date1}>
            <ProjectStartAndEndDate/>
        </div>
        </>
    )
}

export default ProjectDate