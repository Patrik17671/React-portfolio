import React from 'react';
import ProjectSec from "../ProjectsSection/ProjectSec";
//Import images
import fake from "../../Images/fakeportfolio.jpg";
import gamesApp from "../../Images/reactApp.jpg";
import todo from "../../Images/todo.jpg";
import portfolio from "../../Images/screen.jpg";


const Projects = () => {
    return (
        <div>
            <ProjectSec
                projectName="Moje prvé portfolio."
                projectImg={portfolio}
                projectDescription="Moje prvé portfólio použité základné webtechnologie HTML a CSS a kusók JavaScriptu."
                sideLink="https://spilus.netlify.app/"
            />
            <ProjectSec
                projectName="Todo appka."
                projectImg={todo}
                projectDescription="Toto asi nepotrebuje opis."
                githubLink="https://github.com/Patrik17671/Todo-React"
                sideLink="https://spilus-todo.netlify.app/"
            />
            <ProjectSec
                projectName="Fake portfolio."
                projectImg={fake}
                projectDescription="Toto nieje úplne moja práca je to appka robená v kurze.
                                    Naučil som sa tu používať react knižnice ako sú styled-components a framer-motion na efekty."
                githubLink="https://github.com/Patrik17671/react_fake_portfolio"
                sideLink="https://spilus-fake-portfolio.netlify.app/"
            />
            <ProjectSec
                projectName="Appka na vyhľadávanie hier."
                projectImg={gamesApp}
                projectDescription="Ďalšia appka robená v kurze , tentokár som osvojil prácu s API
                                    pomáhal som si knižnicou Axios a na správu stavov som použil Redux s ktorým by som ale
                                    ešte nevedel pracovať samostatne, samozrejme na tom budem ešte pracovať."
                githubLink="https://github.com/Patrik17671/Games_list_react"
                sideLink="https://spilus-games-list-app.netlify.app/"
            />
        </div>


    );
};

export default Projects;
