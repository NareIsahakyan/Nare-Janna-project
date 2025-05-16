/* Cmponent that includes all the components for adding a user*/
import AddAvatarNameSurName from "./AddAvatarNameSurName"
import AddNewUserCon from "./AddNewUserCon"
import styles from "./Dashboard.module.css"
import PeopleBeingAdded from "./PeopleBeingAdded"
function AddNewUserBox(){
    return(
        <>
        <div className={styles.boxAdd}> 
            <PeopleBeingAdded/>
            <AddNewUserCon/>
            <AddAvatarNameSurName/>
        </div>
        </>
    )
}

export default AddNewUserBox