import React, { useEffect, useState } from "react";
import user from "../../assets/icons/user.svg";
import more from "../../assets/icons/more.svg";
import css from "./Project.module.css";
import ModalOption from "../modalOption/ModalOption";
import { useNavigate } from "react-router-dom";

function Project({project}) {
    const navigate= useNavigate()

    const [modal, setModal] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modal && e.target.id !== "modal") {
                setModal(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [modal]);

    const activateModal = () => {
        setModal(!modal);
    };

    const goDetail = ()=>{
        navigate(`/detail/${project.id}`)
    }

    return (
        <div className={css.project2}>
            {screenWidth < 600 ? (
                <div className={css.project}>
                    <div className={css.content} onClick={goDetail}>
                        <h4>{project.name}</h4>
                        <p>Creation date: 29/07/2024 10:30 am</p>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>{project.projectManager}</h4>
                        </div>
                    </div>
                    <div className={css.conteinerMore} onClick={activateModal}>
                        <img id="modal" src={more} alt="more" />
                    </div>
                    {modal && <ModalOption project={project.id}/>}
                </div>
            ) : (
                <div className={css.project2}>
                    {/* <div className={css.titleProject}>
                        <h4>Project info</h4>
                        <h4>Project Manager</h4>
                        <h4>Assigned to</h4>
                        <h4>Status</h4>
                        <h4>Action</h4>
                    </div> */}
                    <div className={css.infoProject}>
                        <div className={css.content} onClick={goDetail}>
                            <h4>{project.name}</h4>
                            <p>Creation date: 29/07/2024 10:30 am</p>
                        </div>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>{project.projectManager}</h4>
                        </div>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>{project.assignedTo}</h4>
                        </div>
                        <div className={css.status}>
                            <p>{project.status}</p>
                        </div>
                        <div className={css.conteinerMore} onClick={activateModal}>
                            <img id="modal" src={more} alt="more" />
                        </div>
                        {modal && <ModalOption project={project.id}/>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
