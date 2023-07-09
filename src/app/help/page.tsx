import React from "react";

export default function Help() {
  return (
    <div className="project-page">
      <h1 className="project-header">Projects</h1>
      <div className="projects">
        <div className="project-cards">
          <div className="project-img">image here</div>
          <div className="card">
            <div className="project-card-header">Project Name</div>
            <div className="project-body">Project Description</div>
            <div className="project-footer">Project Links</div>
          </div>
        </div>
        {/* Logic to loop over how many projects I have will go somewhere here */}
        <div className="project-cards">
          <div className="project-img">image here</div>
          <div className="card">
            <div className="project-card-header">Project Name</div>
            <div className="project-body">Project Description</div>
            <div className="project-footer">Project Links</div>
          </div>
        </div>
        {/* Logic to loop over how many projects I have will go somewhere here */}
        <div className="project-cards">
          <div className="project-img">image here</div>
          <div className="card">
            <div className="project-card-header">Project Name</div>
            <div className="project-body">Project Description</div>
            <div className="project-footer">Project Links</div>
          </div>
        </div>
        {/* Logic to loop over how many projects I have will go somewhere here */}
        <div className="project-cards">
          <div className="project-img">image here</div>
          <div className="card">
            <div className="project-card-header">Project Name</div>
            <div className="project-body">Project Description</div>
            <div className="project-footer">Project Links</div>
          </div>
        </div>
      </div>
    </div>
  );
}
