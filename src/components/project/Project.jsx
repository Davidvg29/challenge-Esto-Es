import React, { useEffect, useState } from "react";
import user from "../../assets/icons/user.svg";
import more from "../../assets/icons/more.svg";
import css from "./Project.module.css";
import ModalOption from "../modalOption/ModalOption";

function Project() {
    const [modal, setModal] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Actualiza el estado del ancho de la pantalla cuando la ventana cambia de tamaño
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Maneja el clic fuera del modal para cerrarlo
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modal && e.target.id !== "modal") {
                setModal(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        // Limpiar el evento al desmontar el componente
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [modal]);

    const activateModal = () => {
        setModal(!modal);
    };

    return (
        <div className={css.project2}>
            {screenWidth < 600 ? (
                <div className={css.project}>
                    <div className={css.content}>
                        <h4>Landing page</h4>
                        <p>Creation date: 29/07/2024 10:30 am</p>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>nombre apellido</h4>
                        </div>
                    </div>
                    <div className={css.conteinerMore} onClick={activateModal}>
                        <img id="modal" src={more} alt="more" />
                    </div>
                    {modal && <ModalOption />}
                </div>
            ) : (
                <div className={css.project2}>
                    <div className={css.titleProject}>
                        <h4>Project info</h4>
                        <h4>Project Manager</h4>
                        <h4>Assigned to</h4>
                        <h4>Status</h4>
                        <h4>Action</h4>
                    </div>
                    <div className={css.infoProject}>
                        <div className={css.content}>
                            <h4>Landing page</h4>
                            <p>Creation date: 29/07/2024 10:30 am</p>
                        </div>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>nombre apellido</h4>
                        </div>
                        <div className={css.conteinerUser}>
                            <img src={user} alt="user" />
                            <h4>nombre apellido</h4>
                        </div>
                        <div className={css.status}>
                            <p>Enabled</p>
                        </div>
                        <div className={css.conteinerMore} onClick={activateModal}>
                            <img id="modal" src={more} alt="more" />
                        </div>
                        {modal && <ModalOption />}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
