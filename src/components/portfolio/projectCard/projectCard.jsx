import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Image} from 'semantic-ui-react';
import styles from './projectCard.module.css'

function ProjectCard(props){
        return (
            <article className={styles.blocks}>
                <div className={styles.apart}>
                    <div className={styles.title}>{props.cardtitle}</div>
                    <Link to={`projects/${props.href}`} className={styles.linkItem} >{props.linkname} </Link>
                </div>
                <Link as={"a"} to={`projects/${props.href}`}>
                    <Image src={require('../../../pictures/' + props.svg)} />
                </Link>
                   
            </article>
        );
  }

  export default ProjectCard;