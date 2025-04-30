import Avatar from "./Avatar"
import styles from "./Dashboard.module.css"

function AddAvatarNameSurName(){
    return(
        <>
        <div className={styles.avatarName}>
        <Avatar className={styles.ava}/>
        <div className={styles.nameSurname}>
        <p className={styles.SurName}>SurName</p>
        <p className={styles.name}>Name</p>
        </div>
       </div></>
    )
}

export default AddAvatarNameSurName