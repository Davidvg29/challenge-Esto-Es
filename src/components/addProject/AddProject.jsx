import Header from "../header/Header";
import arrow from "../../assets/icons/arrow-back.svg";
import css from "./AddProject.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import validation from "./validation";

function AddProject() {
    const navigate=useNavigate()

    const [project, setProject] = useState({
        id: Math.random(),
        name:"",
        description: "",
        projectManager:"",
        assignedTo:"",
        status:"",
    });

    const [error, setError] = useState({
        name:"",
        description: "",
        projectManager:"",
        assignedTo:"",
        status:"",
    });

    const changeProject = (e) => {
        setProject({...project, [e.target.name]: e.target.value});
    };

    const saveProject = (e) => {
        e.preventDefault();
        const validationErrors = validation(project);
        setError(validationErrors);
        
        if (Object.values(validationErrors).every(m => m === "")) {
            if (project.name) {
                localStorage.setItem(project.id, JSON.stringify(project));
                resetForm();
                setTimeout(() => {
                    navigate("/")
                }, 1000); 
                
            }
        }
    };

    const resetForm = () => {
        setProject({
            name: "",
            description: "",
            projectManager: "",
            assignedTo: "",
            status: ""
        });
    };

    return (
        <div className={css.conteinerAddProject}>
            <Header />
            <nav>
                <Link to="/"><img src={arrow} alt="back" /></Link>
                <Link to="/"><p>Back</p></Link>
                <h3>Add project</h3>
            </nav>
            <div className={css.conteinerForm}>
                <form onSubmit={saveProject}>
                    <label htmlFor="name">Project name <b id="error">{error.name}</b></label>
                    <input name="name" id="name" type="text" value={project.name} onChange={changeProject} />

                    <label htmlFor="description">Description <b id="error">{error.description}</b></label>
                    <input name="description" id="description" type="text" value={project.description} onChange={changeProject} />

                    <label htmlFor="projectManager">Project Manager <b id="error">{error.projectManager}</b></label>
                    <select name="projectManager" id="projectManager" value={project.projectManager} onChange={changeProject}>
                        <option value="" disabled>Select a person</option>
                        <option value="Ana María">Ana María</option>
                        <option value="Carlos Alberto">Carlos Alberto</option>
                        <option value="Luis Fernando">Luis Fernando</option>
                        <option value="Marta Isabel">Marta Isabel</option>
                        <option value="Pedro José">Pedro José</option>
                    </select>

                    <label htmlFor="assignedTo">Assigned to <b id="error">{error.assignedTo}</b></label>
                    <select name="assignedTo" id="assignedTo" value={project.assignedTo} onChange={changeProject}>
                        <option value="" disabled>Select a person</option>
                        <option value="Sofía Beatriz">Sofía Beatriz</option>
                        <option value="Andrés Felipe">Andrés Felipe</option>
                        <option value="Valentina Lucía">Valentina Lucía</option>
                        <option value="Gabriel Alejandro">Gabriel Alejandro</option>
                        <option value="Daniela Patricia">Daniela Patricia</option>
                    </select>

                    <label htmlFor="status">Status <b id="error">{error.status}</b></label>
                    <select name="status" id="status" value={project.status} onChange={changeProject}>
                        <option value="" disabled>Enabled</option>
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>

                    <button type="submit">Create project</button>
                </form>
            </div>
        </div>
    );
}

export default AddProject;
