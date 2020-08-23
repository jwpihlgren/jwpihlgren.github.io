import React from "react";
import { Image} from 'semantic-ui-react';
import styles from './competenceCard.module.css'

function CompetenceCard(props) {
  return (
    <div className={styles.wrapper}>
      <Image src={require("../../../pictures/" + props.competences.svg)} alt={"text"} title={props.competences.title} className={styles.svg}/>
      <span className={styles.span}>{props.competences.skill}</span>
    </div>
  );
}

export default CompetenceCard;
