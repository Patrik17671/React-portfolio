import React from 'react';
import screen from "../../Images/screen.jpg";

const Projects = () => {
    return (
        <div>
            <h1>Projekty</h1>
            <a href="https://spilus.netlify.app/" rel="noreferrer" target="_blank" ><img src={screen} alt="" height="200px"/></a>
            <p>Na ďalších projektoch sa pracuje...</p>

        </div>
    );
};

export default Projects;
