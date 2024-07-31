import Header from "../header/Header";
import arrow from "../../assets/icons/arrow-back.svg";
import css from "./EditProject.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import validation from "../addProject/validation";

function EditProject() {
    const navigate= useNavigate()
    const { id } = useParams();
    
    const [projectStore, setProjectStore] = useState({
        name: "",
        description: "",
        projectManager: "",
        assignedTo: "",
        status: "",
    });

    const [error, setError] = useState({
        name: "",
        description: "",
        projectManager: "",
        assignedTo: "",
        status: "",
    });

    useEffect(() => {
        const storedProject = localStorage.getItem(id);
        if (storedProject) {
            setProjectStore(JSON.parse(storedProject));
        }
    }, [id]);

    const changeProject = (e) => {
        setProjectStore({ ...projectStore, [e.target.name]: e.target.value });
    };

    const saveProject = (e) => {
        e.preventDefault();
        const validationErrors = validation(projectStore);
        setError(validationErrors);

        if (Object.values(validationErrors).every(m => m === "")) {
            if (projectStore.name) {
                localStorage.setItem(id, JSON.stringify(projectStore));
                resetForm();
                setTimeout(() => {
                    navigate("/")
                }, 1000); 
            }
        }
    };

    const resetForm = () => {
        setProjectStore({
            name: "",
            description: "",
            projectManager: "",
            assignedTo: "",
            status: ""
        });
    };

    return (
        <div className={css.conteinerEditProject}>
            <Header />
            <nav>
                <Link to="/"><img src={arrow} alt="back" /></Link>
                <Link to="/"><p>Back</p></Link>
                <h3>Edit project</h3>
            </nav>
            <div className={css.conteinerForm}>
                <form onSubmit={saveProject}>
                    <label htmlFor="name">Project name <b id="error">{error.name}</b></label>
                    <input name="name" id="name" type="text" value={projectStore.name} onChange={changeProject} />

                    <label htmlFor="description">Description <b id="error">{error.description}</b></label>
                    <input name="description" id="description" type="text" value={projectStore.description} onChange={changeProject} />

                    <label htmlFor="projectManager">Project Manager <b id="error">{error.projectManager}</b></label>
                    <select name="projectManager" id="projectManager" value={projectStore.projectManager} onChange={changeProject}>
                        <option value="" disabled>Select a person</option>
                        <option value="Ana María">Ana María</option>
                        <option value="Carlos Alberto">Carlos Alberto</option>
                        <option value="Luis Fernando">Luis Fernando</option>
                        <option value="Marta Isabel">Marta Isabel</option>
                        <option value="Pedro José">Pedro José</option>
                    </select>

                    <label htmlFor="assignedTo">Assigned to <b id="error">{error.assignedTo}</b></label>
                    <select name="assignedTo" id="assignedTo" value={projectStore.assignedTo} onChange={changeProject}>
                        <option value="" disabled>Select a person</option>
                        <option value="Sofía Beatriz">Sofía Beatriz</option>
                        <option value="Andrés Felipe">Andrés Felipe</option>
                        <option value="Valentina Lucía">Valentina Lucía</option>
                        <option value="Gabriel Alejandro">Gabriel Alejandro</option>
                        <option value="Daniela Patricia">Daniela Patricia</option>
                    </select>

                    <label htmlFor="status">Status <b id="error">{error.status}</b></label>
                    <select name="status" id="status" value={projectStore.status} onChange={changeProject}>
                        <option value="" disabled>Enabled</option>
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>

                    <button type="submit">Save changes</button>
                </form>
            </div>
        </div>
    );
}

export default EditProject;
