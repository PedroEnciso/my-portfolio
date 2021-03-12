import React, { useState } from "react";
// styles
import styled from "styled-components";
// data
import ProjectState from "../ProjectState";

const MyWork = () => {
  const [projects, setProjets] = useState(ProjectState);
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <div className="project">
          <h3>{project.title}</h3>
          <div className="image">
            <img src={project.img} alt="pokedex" />
          </div>
          <p>{project.description}</p>
          <div className="buttons">
            <button className="project-button">View Project</button>
            <button className="github-button">Github</button>
          </div>
        </div>
      ))}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  min-height: 75vh;
  padding: 2rem 8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f2f2f2;

  .project {
    width: 25%;
    margin: 2rem 1rem;

    h3 {
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: 400;
    }

    .image {
      margin-top: 0.5rem;
      width: 100%;
      height: fit-content;
      img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
      }
    }

    p {
      line-height: 1.5rem;
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      .project-button {
        background: #0064ff;
        color: #fff;
        border: 2px solid #0064ff;
        &:hover {
          background: transparent;
          color: #0064ff;
        }
      }
      .github-button {
        background: transparent;
        color: #0064ff;
        border: 2px solid transparent;
        &:hover {
          border: 2px solid #0064ff;
        }
      }
    }
  }
`;

export default MyWork;
