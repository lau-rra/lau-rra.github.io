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
                <div className="custom-heading">
                  {project.title}
                  <span className="dropdown-icon">
                    {activeProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
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

                  {project.tools && (
                    <>
                      <span className="section-title">Tools and methods</span>
                      <ul className="bullet-list">
                        {project.tools.map((tool, index) => (
                          <li key={index}>{tool}</li>
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
                
                {/*Photo gallery after the project description*/}
                {project.screenshots && (
                  <div className="screenshot-gallery">
                    <h4 className="gallery-title">{project.albumname}</h4>
                    <div className="screenshots-container">
                      {project.screenshots.map((img, index) => (
                        <img
                          key={index}
                          src={img} 
                          alt={`Mobile screen ${index + 1}`}
                          className="mobile-screenshot"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;