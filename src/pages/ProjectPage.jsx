import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ProjectPage.css';
import projects from '../components/projectsContent';

function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="textcontainer">
      <div className="bodytext">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
                        <div className="project-header" onClick={() => toggleProject(project.id)}>
              <h3 className="custom-heading">
                {project.title}
              </h3>
              <span className="dropdown-icon">
                {activeProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <p className="custom-underheading">{project.subtitle}</p>
            
            {activeProject === project.id && (
              <div className="project-details">
                <div className="project-description">
                  <p>{project.description}</p>
                  
                  {project.role && (
                    <>
                      <span className="section-title">Key contributions</span>
                      <ul className="bullet-list">
                        {project.role.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {project.details.map((detail) => (
                  <div key={detail.step} className="detail-step">
                    <div className="step-number">{detail.step}</div>
                    <div className="step-content">
                      <h4 className="step-title">{detail.title}</h4>
                      {<p className="step-text">{detail.content}</p>}
                      
                      {detail.bullets && (
                        <ul className="bullet-list">
                          {detail.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
                <span className="section-title">Lessons learned</span>
                <div className="project-learnings">
                  <p>{project.learnings}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;