/* Component that is for trilingual translation*/

import { useContext } from "react"
import styles from "./Header.module.css"
import { LanguageContext } from "../../context/LanguageContext"

function Language() {
    const { lang, setLang } = useContext(LanguageContext)
    const handleeSubmit = (e) => {
        setLang(e)
    }
    return (
        <>
            <div className={styles.Language}>
                <div
                    className={`${styles.hy} ${lang === "hy" ? styles.activ : ""}`}
                    onClick={() => {
                        handleeSubmit("hy");
                        console.log("hhhhhh");
                    }}
                >
                    HY
                </div>
                <div className={`${styles.en} ${lang === "en" ? styles.activ : ""}`}
                    onClick={() => handleeSubmit("en")}>EN</div>
                <div className={`${styles.ru} ${lang === "ru" ? styles.activ : ""}`}
                    onClick={() => handleeSubmit("ru")}>RU</div>
            </div>
        </>
    )
}

export default Language