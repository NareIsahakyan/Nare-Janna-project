/* This is a component that contains all the components that are intended for creating a new project.*/

import AvatarAndAdd from "./AvatarAndAdd"
import ButtonProject from "./ButtonProject"
import styles from "./Newproject.module.css"
import NewProjectName from "./NewProjectName"
import ProjectDate from "./ProjectDate"
import ProjectImge from "./ProjectImge"
import ProjectInfo from "./ProjectInfo"

function CreateNewProject(){
    return(
        <>
        <div className={styles.createNewProject}>
            <NewProjectName/>
            <div className={styles.imge_info}>
            <ProjectImge/>
            <ProjectInfo/>
            </div>
            <ProjectDate/>
            <AvatarAndAdd/>
            <ButtonProject/>
        </div>
       
        </>
    )
}

export default CreateNewProject