/*Component that contains all the information in the add person box */

import styles from "./AddPerson.module.css"
import AddPersonCon from "./AddPersonCon"
import ButtonAddPerson from "./ButtonAddPerson"
import PersonCon from "./PersonCon"


function AddPersonBox(){
    return(
        <>
        <div className={styles.boxadd}>
            <AddPersonCon/>
            <PersonCon/>
            <ButtonAddPerson/>
            </div></>
    )
}

export default AddPersonBox