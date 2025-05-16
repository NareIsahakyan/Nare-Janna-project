/*Component that contains all the components of the dashboard page */
import AddNewUserBox from "./AddNewUserBox"
import NewProjectAdd from "./NewProjectAdd"
import NewProjectBox from "./NewProjectBox"
import styles from "./Dashboard.module.css"


function DashboardPage(){
    return(
        <>
        
        <NewProjectAdd/>
        <div  className={styles.boxrow}>
        <NewProjectBox/>
        <AddNewUserBox/>
        </div>
        </>
    )
}

export default DashboardPage