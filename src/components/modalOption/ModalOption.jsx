import css from "./ModalOption.module.css"
import edit from "../../assets/icons/edit.svg"
import deleteImg from "../../assets/icons/delete.svg"
import { Link } from "react-router-dom"
function ModalOption(){
    return(
        <div className={css.modal}>
                    {/* <div className={css.arrow}></div> */}
                    <Link to="/edit project"><div className={css.edit}>
                        <img src={edit} alt="Edit" />
                        <p>Edit</p>
                    </div></Link>
                    <div className={css.delete}>
                        <img src={deleteImg} alt="Delete" />
                        <p>Delete</p>
                    </div>
                </div>
    )
}
export default ModalOption