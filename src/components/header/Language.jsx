import styles from "./Header.module.css"

function Language(){
    return(
        <>
        <div className={styles.Language}>
        <div className={styles.HY}>HY</div>
        <div className={styles.EN}>EN</div>
        <div className={styles.RU}>RU</div>
        </div>
        </>
    )
}

export default Language