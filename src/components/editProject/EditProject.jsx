import Header from "../header/Header"
import arrow from "../../assets/icons/arrow-back.svg"
import css from "./EditProject.module.css"
import { Link } from "react-router-dom"
function EditProject() {
    return(
        <div className={css.conteinerEditProject}>
            <Header/>
            <nav>
                <Link to="/"><img src={arrow} alt="back" /></Link>
                <Link to="/"><p>Back</p></Link>
                <h3>Edit project</h3>
            </nav>
            <div className={css.conteinerForm}>
            <form action="">
                <label htmlFor="">Project name <b id="error"></b></label>
                <input type="text" />

                <label htmlFor="">Description <b id="error"></b></label>   
                <input type="text" />

                <label htmlFor="">Project Manager <b id="error"></b></label>
                <select name="" id="" placeholer="asd">
                <option value="" disabled selected>
                    Select an person
                </option>
                </select>

                <label htmlFor="">Assigned to <b id="error"></b></label>
                <select name="" id="">
                <option value="" disabled selected>
                    Select an person
                </option>
                </select>

                <label htmlFor="">Status <b id="error"></b></label>
                <select name="" id="">
                <option value="" disabled selected>
                    Enable
                </option>
                </select>

                <button>Save changes</button>
            </form>
            </div>
        </div>
    )
}
export default EditProject