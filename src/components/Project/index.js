import { useState } from 'react';
import "./style.css";
import quote from "../../images/quotes.png";
import schedule from "../../images/scheduler.png";
import weather from "../../images/weather.png";
import project2 from "../../images/project2.PNG";

const Project = () => {
    const [projects, setProjects] = useState([
    {
        id: 1,
        title: "Random Tech Quote",
        image: quote,
        browserHref: "https://njleoni.github.io/project_random_quotes/",
        repoHref: "https://github.com/njleoni/project_random_quotes",
    },
    {
        id: 2,
        title: "Day Planner",
        image: schedule,
        browserHref: "https://njleoni.github.io/homework-day-planner",
        repoHref: "https://github.com/njleoni/homework-day-planner",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        image: weather,
        browserHref: "https://njleoni.github.io/homework-weather-dashboard/",
        repoHref: "https://github.com/njleoni/homework-weather-dashboard",
    }, 
    {
        id: 4,
        title: "Project Manager",
        image: project2,
        browserHref: "https://floating-wildwood-05165.herokuapp.com/all",
        repoHref: "https://github.com/njleoni/project2_project_management",
    },
    ])

    
    return (
        <>
            {projects.map((project) => (
                <div className="card col port-img">
                    <h5 className="card-title portEl">{project.title}</h5>
                    <hr />
                    <img src={project.image} className="card-img-top" alt={project.title}></img>
                    <br></br>
                    <div className="row justify-content-center">
                    <a href={project.browserHref} className="btn btn-outline-dark" target="_blank">Browser</a>
                    <a href={project.repoHref} className="btn btn-outline-dark reopCL" target="_blank">Repo</a>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Project
