import Header from "../header/Header"
import arrow from "../../assets/icons/arrow-back.svg"
import css from "./AddProject.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
function AddProject() {
    
    const [project, setProject] = useState({
        name:"",
        description: "",
        projectManager:"",
        assignedTo:"",
        status:"",
    })

    const changeProject=(e)=>{

    }

    return(
        <div className={css.conteinerAddProject}>
            <Header/>
            <nav>
                <Link to="/"><img src={arrow} alt="back" /></Link>
                <Link to="/"><p>Back</p></Link>
                <h3>Add project</h3>
            </nav>
            <div className={css.conteinerForm}>
            <form action="">
                <label htmlFor="name" >Project name <b id="error"></b></label>
                <input name="name" id="name" type="text" />

                <label htmlFor="description" >Description <b id="error"></b></label>   
                <input name="description" id="description" type="text" />

                <label htmlFor="projectManager">Project Manager <b id="error"></b></label>
                <select name="projectManager" id="projectManager" placeholer="asd">
                <option value="" disabled selected>
                    Select an person
                </option>
                </select>

                <label htmlFor="assignedTo">Assigned to <b id="error"></b></label>
                <select name="assignedTo" id="assignedTo">
                <option value="" disabled selected>
                    Select an person
                </option>
                </select>

                <label htmlFor="status">Status <b id="error"></b></label>
                <select name="status" id="status">
                <option value="" disabled selected>
                    Enable
                </option>
                </select>

                <button>Create project</button>
            </form>
            </div>
        </div>
    )
}
export default AddProject