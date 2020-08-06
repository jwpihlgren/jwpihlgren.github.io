import React, {useRef} from 'react';
import styles from './toggler_button.module.css';

function Navbar_toggler_button(props) {

    const button = useRef(null);
    const onClick = () => {
            props.onClick();
            button.current.focus()
    }
    return(    
        <div id={"navtoggler"} tabIndex={"0"} ref={button} 
            className={props.open ? styles.menuTogglerContainerClosed : styles.menuTogglerContainer} 
            onClick={onClick} onBlur={props.onBlur}>
            <span className={`${styles.line} ${props.open ? styles.firstClose: styles.line}`}></span>
            <span className={`${styles.line} ${styles.second} ${props.open ? styles.secondClose: styles.line  }`}></span>
            <span className={`${styles.line} ${styles.third} ${props.open ? styles.thirdClose : styles.line}`}></span>
        </div>       
    );
}

export default Navbar_toggler_button;


