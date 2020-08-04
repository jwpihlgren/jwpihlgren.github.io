import React, { useState} from "react";
import NavbarTogglerButton from "../togglerButton/toggler_button";
import styles from "./portfolioNavbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props){

    const [toggleButtonOpen, setToggleButtonOpen] = useState(false);

    
    const onClick = () => {setToggleButtonOpen(!toggleButtonOpen);
        };
    const onBlur = e =>{
        if(e.relatedTarget) e.relatedTarget.click()
        setToggleButtonOpen(false);
    }

    console.log(props.refs);


        return(
        <nav className={styles.nav}>
            <Link as={"a"} to={"/"} className={styles.h1}>{props.logo}</Link>
            <div className={styles.linksWrapper}>
                <div className={toggleButtonOpen ? styles.linksOpen : styles.linksClosed}>  
                    {Object.keys(props.links).map((linkName, i) =>{
                        return <Link as={"a"} to={props.links[linkName].hash} className={styles.linkItem}> {linkName} </Link>
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