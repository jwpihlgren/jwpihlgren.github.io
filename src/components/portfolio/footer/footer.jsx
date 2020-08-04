import React, { useEffect, useState } from 'react';
import styles from './footer.module.css';

export default function Footer(props){
    const [tmp, setTmp] = useState({})
    useEffect(() => {
        setTmp(props.data);
    }, [props.data])
    const {copyright, ...rest} = tmp;
    const style = (index) => Object.entries(rest).length  === index ?  `${styles.text}` : `${styles.text} ${styles.margin}`
return(
    <div className={styles.footer}>
        <div className={styles.email}>
            <span className={styles.text}>{copyright}</span>
        </div>

        <div className={styles.handles}>
            {Object.values(rest).map((entry, index) => {
                return (<a className={style(index)} target={"_blank"} rel="noopener noreferrer" href={`${entry.href}`}>{entry.text}</a>)
            })}
        </div>
    </div>
);

}