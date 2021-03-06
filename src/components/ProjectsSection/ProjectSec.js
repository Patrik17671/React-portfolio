import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeIn,popIn} from "../../animations";


const ProjectSec = ({projectName,projectImg,projectDescription,githubLink,sideLink}) => {
    return (
        <StyledDiv variants={fadeIn} initial="hidden" animate="show">
            <h2 >{projectName}</h2>
            <motion.img
                src={projectImg}
                alt="projectName"
                width="100%"
                variants={popIn}
                initial="hidden"
                animate="show"
            />
            <p>{projectDescription}</p>
            <StyledLinks>
                <a href={githubLink} rel="noreferrer noopener" target="_blank">Github kód</a>
                <a href={sideLink} rel="noreferrer noopener" target="_blank">Ukážka</a>
            </StyledLinks>
        </StyledDiv>
    );
};

const StyledDiv = styled(motion.div)`
  max-width: 30rem;
  margin: 3rem auto;
  padding: 0 1.5rem;
  p{
    padding: 0 .5rem;
  }
  h2{
    margin: 1.5rem 0;
  }
  img{
    box-shadow: 0 0 10px rgba(47,47,47,0.48);
  }
`;
const StyledLinks = styled(motion.div)`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  a{
    text-decoration: none;
    color: #2f2f2f;
    font-weight: bold;
    border: 2px solid #5db0ec;
    padding: .5rem 1rem;
    transition: all .4s;
    &:hover{
      color: #ecf0f3;
      background: #5db0ec;
    }
  }
  

`;

export default ProjectSec;
