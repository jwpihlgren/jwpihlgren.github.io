import CompetenceCard from '../competenceCard/competenceCard'
import React from "react";
import styles from './competencesContainer.module.css';
import VizSensor from 'react-visibility-sensor';

function CompetenceContainer(props) {
    return (
      <VizSensor partialVisibility minTopValue={100} onChange={props.onChange}>
      <section className={styles.centered}>
        <h1 className={styles.heading1} ref={props.getRef}>{props.title}</h1>
        <div className={styles.gridCompetences}>
          {props.competences.map((res, index) => (
            <CompetenceCard competences={res} key={index} />
          ))}
        </div>
      </section>
      </VizSensor>
    );
}


export default CompetenceContainer;
