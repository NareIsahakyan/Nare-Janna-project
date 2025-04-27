import styles from "./Main.module.css"


function Websiteinfomation(){
    return(
        <>
        <div className={styles.infoSite} >
            <h1 className={styles.h1}>Wlcome to ...</h1>
             <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis minima repudiandae temporibus esse harum. Officiis nobis velit consectetur veritatis laboriosam ea, cupiditate eaque repudiandae eveniet nam inventore natus exercitationem!</p>
          <button className={styles.button} >Subscribe</button>
        </div>
        </>
    )
}

export default Websiteinfomation