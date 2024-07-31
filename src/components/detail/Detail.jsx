import { Link, useParams } from "react-router-dom"
import Header from "../header/Header"
import arrow from "../../assets/icons/arrow-back.svg";
import user from "../../assets/icons/user.svg";
import css from "./Detail.module.css"

function Detail(){
    const {id} =useParams()

    const project = JSON.parse(localStorage.getItem(id))
    console.log(project)

    return(
        <div className={css.conteinerDetail}>
            <Header/>
            <nav>
                <Link to="/"><img src={arrow} alt="back" /></Link>
                <Link to="/"><p>Back</p></Link>
                <h3>Detail project</h3>
            </nav>
            <div className={css.conteinerDetailInfo}>
                <div className={css.detailInfo}>
                    <p className={css.subtitle}>Name</p>
                    <h3>{project.name}</h3>
                    {/* <p>Creation date</p> */}
                    <p className={css.subtitle}>Description</p>
                    <p>{project.description}</p>
                    <p className={css.subtitle}>Project manager</p>
                    <div className={css.conteinerUser}>
                        <img src={user} alt="user" />
                        <h4>{project.projectManager}</h4>
                    </div>
                    <p className={css.subtitle}>Assigned to</p>
                    <div className={css.conteinerUser}>
                        <img src={user} alt="user" />
                        <h4>{project.assignedTo}</h4>
                    </div>
                    <p className={css.subtitle}>Status</p>
                    <div className={css.status}>
                        <p>{project.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail