import React from "react";
import ResumeCard from "../resumeCard/resumeCard";
import styles from './resumeContainer.module.css';
import VizSensor from 'react-visibility-sensor';

function ResumeContainer(props) {

    return (
      <VizSensor partialVisibility minTopValue={100} onChange={props.onChange}>
      <section className={styles.centered} id={props.title} ref={props.getRef}> 
        <h1 className={styles.heading1} >{props.title}</h1>
        <div className={styles.gridResume}>
          {props.resume.map((res, index) => (
            <ResumeCard resume={res} key={index} />
          ))}
        </div>
      </section>
      </VizSensor>
    );
}

export default ResumeContainer;
