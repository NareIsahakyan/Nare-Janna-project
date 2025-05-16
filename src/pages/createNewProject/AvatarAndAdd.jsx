/*Is a component that contains an avatar and an add button*/ 

import Avatar from "../dashbordPage/Avatar"
import add from  "../../imeges/add.png"
import styles from "./Newproject.module.css"
function AvatarAndAdd(){
    return(
        <>
        <div  className={styles.av-add}>
          <div className={styles.av}>  <Avatar/> </div>
            <img src={add} alt="add" className={styles.add}></img>
        </div>
        </>
    )
}

export default AvatarAndAdd