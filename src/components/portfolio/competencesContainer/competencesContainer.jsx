import CompetenceCard from '../competenceCard/competenceCard'
import React  from "react";
import styles from './competencesContainer.module.css';
import VizSensor from 'react-visibility-sensor';


function CompetenceContainer(props) {

    return (
      <VizSensor partialVisibility minTopValue={-300} onChange={props.onChange} >

      <div id={props.title} ref={props.getRef}> {/* Temporary inline-css, potential bug keeps rule from being applied in production */}
        <h1 className={styles.heading1} >{props.title}</h1>
        <div className={styles.gridCompetences}>
          {props.competences.map((res, index) => (
            <CompetenceCard competences={res} key={index} />
          ))}
        </div>
      </div>
      </VizSensor>
    );
}


export default CompetenceContainer;
