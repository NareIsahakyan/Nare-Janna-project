/*This is a avatar  */
/*Random avatra color*/
import { useState } from "react"
import styles from "./Dashboard.module.css"
import AvatarJson from "../../json1/Avatra.json"
function Avatar(){
     
    const [avatar,setAvatar]=useState(AvatarJson)
    return(
        <>
        <div className={styles.avatar}>
          {avatar[0].avatar1.map((letter,index)=>{
            <span key={`a1-${index} `} className ={styles.avatar1}>
                {letter} 
            </span>
          })}
              {avatar[1].avatar2.map((letter,index)=>{
            <span key={`a2-${index} `} className ={styles.avatar2}>
                {letter} 
            </span>
          })}
              {avatar[3].avatar3.map((letter,index)=>{
            <span key={`a3-${index} `} className ={styles.avatar3}>
                {letter} 
            </span>
          })}
        </div>
        </>
    )
}

export default Avatar