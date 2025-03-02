import React from 'react';
import './ProjectPage.css';

function ProjectPage() {
    return (
      <>
       <div className="textcontainer">
            <div className="bodytext">
                <ul>
                    <li><h3 className="custom-heading">Zine “No name” (2025)</h3></li>
                    <li className="custom-underheading">Independent work</li>
                    <li>Here I can tell more about projects, for instance duration and results</li>
                </ul>
                <ul>
                    <li><h3 className="custom-heading">Yle Project (2024)</h3></li>
                    <li className="custom-underheading">Aalto University, Societal Design Course</li>
                    <li>Here I can tell more about projects, for instance duration and results</li>
                </ul>
                <ul>
                    <li><h3 className="custom-heading">Spruce bark dye (2023)</h3></li>
                    <li className="custom-underheading">Aalto University CHEMARTS</li>
                    <li>Here I can tell more about projects, for instance duration and results</li>
                </ul>
            </div>
        </div>
      </>
    )
  }
  
  export default ProjectPage;