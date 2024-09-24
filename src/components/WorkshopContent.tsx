import React, { useEffect } from 'react';
import './WorkshopContent.css';
// import Blue from "../assets/Blue.png";
import Orange from "../assets/Orange.png";
import Purple from "../assets/Purple.png";
import Green from "../assets/Green.png";


const WorkshopContent: React.FC = () => {
  useEffect(() => {
    const cuboids = document.querySelectorAll('.cuboid');
    cuboids.forEach((element, index) => {
      const cuboid = element as HTMLElement;
      cuboid.style.zIndex = `${cuboids.length - index}`; // Highest z-index for the first cuboid in the code
    });
  }, []);
  useEffect(() => {
    const updateContentHeight = () => {
      const content = document.querySelector('.content') as HTMLElement;
      const branchExplanation = document.querySelector('.branch-explanation') as HTMLElement;
      if (content && branchExplanation) {
        // Ensure content height expands with its content
        content.style.height = `${branchExplanation.scrollHeight + 2 * parseFloat(getComputedStyle(content).paddingTop)}px`;
      }
    };

    updateContentHeight();
    window.addEventListener('resize', updateContentHeight);
    return () => window.removeEventListener('resize', updateContentHeight);
  }, []);

  return (
    <div className="workshop-container">
      <h1 className="title">Git Workshop</h1>
      <div className="content">
        <div className="branch-explanation">
          <img src={Orange} alt="Cuboid" className="cuboid" />
          <img src={Purple} alt="Cuboid" className="cuboid" />
          <img src={Green} alt="Cuboid" className="cuboid" />
          {/* New cuboids added here will be positioned and stacked automatically */}
        </div>
      </div>
    </div>
  );
};

export default WorkshopContent;
