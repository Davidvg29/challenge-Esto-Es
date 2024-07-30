import Header from "../header/Header"
import css from "./MyProjects.module.css"
import Project from "../project/Project"

function MyProjects() {
    return(
        <div className={css.conteinerMyProjects}>
            <Header/>
            <nav>
                <h3>My project</h3>
                <button><b>+</b> Add project</button>
            </nav>
            <Project/>
        </div>
    )
}export default MyProjects