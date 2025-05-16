/*Component   Project Title And Description */
import styles from "./Dashboard.module.css"

function ProjectTitleAndDescription(){
    return(
        <>
        <div>
            <h1 className={styles.h1}>Project Name</h1>
            <div className={styles.descriptionBox}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore.</p>
            </div>
            <div className={styles.ChidemInchBox}></div>
        </div>
        </>
    )
}

export default ProjectTitleAndDescription