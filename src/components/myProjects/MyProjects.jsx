import Header from "../header/Header";
import css from "./MyProjects.module.css";
import Project from "../project/Project";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import search from "../../assets/icons/search.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

function MyProjects() {
    const [projects, setProjects] = useState([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [searchProjects, setSearchProjects] = useState([]);
    const [current, setCurrent] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        let arrayProject = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            arrayProject.push(JSON.parse(value));
        }
        setProjects(arrayProject);
        setSearchProjects(arrayProject);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    const changeSearch = (e) => {
        e.preventDefault();
        let filter = projects.filter((p) => p.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchProjects(filter)
        setCurrent(0)
    };

    const next = () => {
        if ((current + 1) * itemsPerPage < searchProjects.length) {
            setCurrent(current + 1);
        }
    };

    const anterior = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const indexOfLastItem = (current + 1) * itemsPerPage;
    const indexOfFirstItem = current * itemsPerPage;
    const currentItems = searchProjects.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className={css.conteinerMyProjects}>
            <Header />
            <nav className={css.nav}>
                <h3>My Projects</h3>
                <Link to="/add">
                    <button><b>+</b> Add Project</button>
                </Link>
            </nav>
            <div className={css.conteinerSearch}>
                <form>
                    <input
                        type="text"
                        placeholder="Search by project name"
                        onChange={changeSearch}
                    />
                    <img src={search} alt="search" />
                </form>
            </div>
            <div className={css.project2}>
                {screenWidth > 600 ? (
                    <div className={css.titleProject}>
                        <h4>Project Info</h4>
                        <h4>Project Manager</h4>
                        <h4>Assigned to</h4>
                        <h4>Status</h4>
                        <h4>Action</h4>
                    </div>
                ) : null}
            </div>
            {currentItems.length > 0 ? (
                currentItems.map((project) => (
                    <Project key={project.id} project={project} />
                ))
            ) : (
                <div className={css.noProjects}>
                    <p>No projects available.</p>
                </div>
            )}
            <div className={css.conteinerPaginado}>
                <div className={css.paginado}>
                    <img
                        className={css.imgLeft}
                        src={arrowRight}
                        onClick={anterior}
                        alt="former"
                    />
                    <p>{`${current + 1} page of ${Math.ceil(searchProjects.length / itemsPerPage)}`}</p>
                    <img
                        className={css.imgRight}
                        src={arrowRight}
                        onClick={next}
                        alt="next"
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
