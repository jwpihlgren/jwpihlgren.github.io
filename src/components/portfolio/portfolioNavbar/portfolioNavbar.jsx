import React, { useState, useEffect} from "react";
import NavbarTogglerButton from "../togglerButton/toggler_button";
import styles from "./portfolioNavbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props){

    const [toggleButtonOpen, setToggleButtonOpen] = useState(false);
    const onClick = () => {setToggleButtonOpen(!toggleButtonOpen);
        };

    const onBlur = e =>{
        e.persist();
         if (e.relatedTarget) e.relatedTarget.click()
        setToggleButtonOpen(false);
    }
    useEffect(() => {
        
        },[props.locations, props.getRef])

        return(
        <nav className={styles.nav} ref={props.getRef}>
            <Link as={"a"} to={props.links.home.path} className={styles.h1}>{props.logo}</Link>
            <div className={styles.linksWrapper}>
                <div className={toggleButtonOpen ? styles.linksOpen : styles.linksClosed}>  
                    {Object.keys(props.links).map((linkName, i) =>{
                       /*  {console.log("ontouchstart" in window ? "touchstart" : "click");} */
                        return <Link smooth as={"a"} to={`${props.links[linkName].path}${props.links[linkName].hash}`} tabIndex="0"  className={styles.linkItem} key={linkName + i.toString()}> {linkName}</Link>
                    })} 
                </div>
                <div className={styles.toggleButton}>
                    <NavbarTogglerButton onClick={onClick} onBlur={onBlur} open={toggleButtonOpen} />
                </div>
            </div>
        </nav>
        );
    
}

export default Navbar;