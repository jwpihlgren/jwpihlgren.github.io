import React from 'react';
import {useLocation } from 'react-router-dom';
import styles from './projectContainer.module.css';
import {Image} from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ProjectContainer(props){

    const nameByPath = useLocation().pathname.replace(props.path, "");
    const details = props.details.find(project => project.href === nameByPath).details;
    const {title, subtitle} = details

    return (
        <div className={styles.centered}>
            <p className={styles.h1}>{title}</p>
            <p className={styles.h3}>{subtitle}</p>
            {details.carousel ? 
            <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showIndicator={true} showThumbs={true}>
                {details.carousel.map(img => <img  alt="" src={require(`../../../pictures/jpgs/${img}`)}/>)}
            </Carousel>
            : <Image className={styles.mainImage} src={require(`../../../pictures/jpgs/${details.img}`)}/>}
            
            {details.paragraphs.map((paragraph) => {
                return(
                    <TextSection paragraphDetails={paragraph}/>
                )
            } )}
        </div>   
    )
}

function TextSection(props) {
    if(props.paragraphDetails) {
        const {title, content, img} = props.paragraphDetails
        return(
            <>
            <div className={styles.section}>
                <span className={styles.h2}>{title}</span>
                <span className={styles.textblock}>{content}</span>
                
            </div>
            {img ? <Image className={styles.textImage} size='huge' centered src={require(`../../../pictures/jpgs/${img}`)}/> : ""}
            <hr className={styles.hr}/>
            </>
        )
    }
    return(<></>)
}