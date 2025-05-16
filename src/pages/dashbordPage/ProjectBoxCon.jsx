/*Componet project contact */
import Avatar from "./Avatar"
import styles from "./Dashboard.module.css"
import ProjectStartAndEndDate from "./ProjectStartAndEndDate"
import ProjectTitleAndDescription from "./ProjectTitleAndDescription"

function ProjectBoxCon(){
    return(
        <>
        <div className={styles.boxProj}>
            <ProjectTitleAndDescription/>
            <ProjectStartAndEndDate/>
            <Avatar/>
        </div>
        </>
    )
}

export default ProjectBoxCon