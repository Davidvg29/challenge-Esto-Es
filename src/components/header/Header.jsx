import imgLogo from "../../assets/images/logo.png"
import css from "./Header.module.css"

function Header(){
    return(
        <header>
            <img src={imgLogo} alt="Esto es" />
        </header>
    )
}
export default Header