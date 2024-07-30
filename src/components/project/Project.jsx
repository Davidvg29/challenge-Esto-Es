import user from "../../assets/icons/user.svg"
import more from "../../assets/icons/more.svg"
import css from "./Project.module.css"

function Project() {

    

    return (
        <div className={css.project}>
                <div className={css.content}>
                    <h3>Landing page</h3>
                    <p>Creation date: 29/07/2024 10:30</p>
                    <div className={css.conteinerUser}>
                        <img src={user} alt="user" />
                        <h4>nombre apellido</h4>
                    </div>
                </div>
                <div className={css.conteinerMore}>
                    <img src={more} alt="more" />
                </div>
            </div>
    )
}
export default Project