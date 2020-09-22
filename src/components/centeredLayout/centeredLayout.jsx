import React from 'react';
import styles from './centeredLayout.module.css';

export default function CenteredLayout(props){
return(
    <section className={styles.centered}>
        {props.children}
    </section>
)
}