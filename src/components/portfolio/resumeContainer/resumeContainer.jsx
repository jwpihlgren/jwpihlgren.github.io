import React from "react";
import ResumeCard from "../resumeCard/resumeCard";
import styles from './resumeContainer.module.css';
import VizSensor from 'react-visibility-sensor';

function ResumeContainer(props) {
    return (
      <VizSensor partialVisibility minTopValue={100} onChange={props.onChange}>
      <section className={styles.centered} id={"resume"}>
        <h1 className={styles.heading1} ref={props.getRef}>Resume</h1> {/* TODO make Title a prop */}
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
