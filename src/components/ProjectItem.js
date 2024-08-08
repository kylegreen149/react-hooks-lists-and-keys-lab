import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const allTech = technologies.map((technology, index) => {
    return <span key={index}>{technology}</span>
  })
  console.log(allTech)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{allTech}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
