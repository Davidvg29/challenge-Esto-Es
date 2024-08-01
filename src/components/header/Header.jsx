import imgLogo from "../../assets/images/logo.png"
import css from "./Header.module.css"

function Header(){
    return(
        <div className={css.conteinerHeader}>
            <header>
            <img src={imgLogo} alt="Esto es" />
        </header>
        </div>
    )
}
export default Header