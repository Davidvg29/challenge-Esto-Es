import Header from "../header/Header"
import css from "./MyProjects.module.css"
import Project from "../project/Project"
import { Link } from "react-router-dom"

function MyProjects() {
    return(
        <div className={css.conteinerMyProjects}>
            <Header/>
            <nav>
                <h3>My project</h3>
                <Link to="/add project"><button><b>+</b>Add project</button></Link>
            </nav>
            <Project/>
        </div>
    )
}export default MyProjects