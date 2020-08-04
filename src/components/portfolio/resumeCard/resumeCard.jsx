import React from 'react';
import styles from './resumecard.module.css'

function ResumeCard(props){

    return(
        
        <div className={styles.wrapper}>
            <span className={styles.title}>{props.resume.title}</span>
            <span className={styles.company}> {props.resume.company}</span>
            <div className={styles.horizontal}>
                <span>{props.resume.city} | {props.resume.country}</span>
                <span>{props.resume.startYear} - {props.resume.endYear}</span>
            </div>
        </div>
    )
}


export default ResumeCard;