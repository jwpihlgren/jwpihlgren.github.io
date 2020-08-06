import React, {useEffect} from "react";
import styles from './scrollHint.module.css';


function ScrollHint(props) {
    useEffect(() => {
    },[props.locations, props.visibility, props.onClick])

    
    const sectionVisibility = Object.values(props.visibility).reverse().map((_, i) => <div key={i} className={styles.circle} onClick={() => props.onClick(refs.reverse()[i])} ></div>)
    const refs = Object.values(props.locations).map(v => v.current);

    for (const [i, v] of Object.values(props.visibility).reverse().entries() ){
        if (v) {
            sectionVisibility[i] = <div key={i} className={styles.circleFill} onClick={() => props.onClick(refs.reverse()[i])} ></div>;
            break;    
        }
    }
    return(
        <div className={styles.wrapper}>
            {sectionVisibility.reverse()}
        </div>
    );  
}

export default ScrollHint;