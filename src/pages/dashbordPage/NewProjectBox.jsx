/*Box new project for*/

import styles from "./Dashboard.module.css"
import ProjectBoxCon from "./ProjectBoxCon"


function NewProjectBox(){
    return(
        <>
        <div className={styles.box}>
          <ProjectBoxCon/>
        </div>
        </>
    )
}

export default NewProjectBox