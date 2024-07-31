import css from "./ModalOption.module.css";
import edit from "../../assets/icons/edit.svg";
import deleteImg from "../../assets/icons/delete.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function ModalOption({ project }) {
    const [modalDeletePregunta, setModalDeletePregunta] = useState(false);
console.log(project)
    const changeModalDelete = ()=>{
        setModalDeletePregunta(!modalDeletePregunta)
    }
    
    const removeproject=()=>{
        localStorage.removeItem(project)
        changeModalDelete()
        location.reload()
    }

    return (
        <>
            {modalDeletePregunta?( <div id="modal" className={css.conteinerModalDelete}>
                    <div id="modal" className={css.modalDelete}>
                        <p id="modal">Delete project?</p>
                        <div>
                            <button id="modal" className={css.buttonCancel} onClick={changeModalDelete} >Cancel</button>
                            <button id="modal" onClick={removeproject} >Delete</button>
                        </div>
                    </div>
                </div>):(<div className={css.modal} id="modal">
                <div className={css.arrow}></div>
                <Link to={`/edit/${project}`}>
                    <div className={css.edit}>
                        <img src={edit} alt="Edit" />
                        <p>Edit</p>
                    </div>
                </Link>
                <div id="modal" className={css.delete} onClick={changeModalDelete}>
                    <img  id="modal"src={deleteImg} alt="Delete" />
                    <p id="modal">Delete</p>
                </div>
            </div>)}
            </>
    );
}

export default ModalOption;
