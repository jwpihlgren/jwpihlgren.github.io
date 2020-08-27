import ProjectCard from "../projectCard/projectCard";
import React from "react";
import styles from './portfolioContainer.module.css';
import VizSensor from 'react-visibility-sensor';


function PortfolioContainer(props) {

  return (
    <VizSensor partialVisibility minTopValue={100} onChange={props.onChange}>
    <div id={props.title} ref={props.getRef}>
      <h1 className={styles.heading1} >
        {props.title}
      </h1>
      <div className={styles.grid}>
        {props.cards.projects.map((project, index) => {
          return (
            <ProjectCard
              key={project + index}
              isLast={index === props.cards.projects.length - 1 ? true : false}
              cardtitle={project.cardtitle}
              linkname={props.cards.linkname}
              href={project.href}
              svg={project.svg}
            />
          );
        })}
      </div>
    </div>
    </VizSensor>
  );
}

export default PortfolioContainer;
