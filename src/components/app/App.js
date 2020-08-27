import React, { useState, useEffect, useRef} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import PortfolioNavbar from "../portfolio/portfolioNavbar/portfolioNavbar";
import PortolioContainer from "../portfolio/portfolioContainer/portfolioContainer";
import ResumeContainer from "../portfolio/resumeContainer/resumeContainer";
import CompetenceContainer from "../portfolio/competencesContainer/competencesContainer";
import ScrollHint from "../scrollHint";
import ProjectContainer from "../portfolio/projectContainer/projectContainer";
import Footer from "../portfolio/footer/footer";
import resumeData from "../../data/resume.js";
import CenteredLayout from "../centeredLayout/centeredLayout";


const {navItems, logo, cards, resume, competences, footer} = resumeData;


function App() {
  const [scrollVal, setScroll] = useState(0);
  const [portfolioVisibility, setPortfolioVisibility] = useState(false);
  const [resumeVisibility, setResumeVisibility] = useState(false);
  const [competencesVisibility, setCompetencesVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1);
  
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const competencesRef = useRef(null);
  const sectionRefs = {home: homeRef, portfolio: portfolioRef, resume: resumeRef, competences: competencesRef};
  const sectionVisibility = {portfolio: portfolioVisibility, resume: resumeVisibility, competences: competencesVisibility}

  useEffect(() => {
    /* Add scroll listener */
    document.addEventListener("scroll", () => {
      if(window.pageYOffset !== scrollVal) setScroll(window.pageYOffset);
    });

    setWindowWidth(window.innerWidth);

    /* Remove scroll listener */
    return () => document.removeEventListener("scroll", () => {
      if(window.pageYOffset !== scrollVal) setScroll(window.pageYOffset);
    });
  }, [scrollVal, portfolioVisibility, resumeVisibility, competencesVisibility]);

 const sideNavOnClick = (element) => {
   console.log(windowWidth);
   element.scrollIntoView({ 
     block: "end",
     behavior: "smooth"

   })
 }

  return (
    <>
      {/* ROUTING */}
      <Switch>
        <Route path="/react-portfolio/projects/:id">
          <PortfolioNavbar logo={logo} links={navItems} getRef={homeRef} locations={sectionRefs}  />
          <CenteredLayout>
            <ProjectContainer path={"/react-portfolio/projects/"} details={resumeData.cards.projects} />
          </CenteredLayout>
          <CenteredLayout>
            <Footer data={footer}/>
          </CenteredLayout>
        </Route>
        <Route path="/react-portfolio/" render={()=> {
          return(
          <>
            <PortfolioNavbar logo={logo} links={navItems} getRef={homeRef} locations={sectionRefs} />
            <ScrollHint onClick={sideNavOnClick} locations={sectionRefs} visibility={sectionVisibility}  />
            <CenteredLayout>
              <PortolioContainer
                title={navItems.portfolio.hash.replace("#", "")}
                cards={cards}
                getRef={portfolioRef}
                onChange={ (isVisible) => {
                  setPortfolioVisibility(isVisible)}}
              />
            </CenteredLayout>
            <CenteredLayout>
              <ResumeContainer
                title={navItems.resume.hash.replace("#", "")}
                resume={resume}
                getRef={resumeRef}
                onChange={ (isVisible) => {
                  setResumeVisibility(isVisible)}}
              />
            </CenteredLayout>
            <CenteredLayout>
            <CompetenceContainer
              title={navItems.competences.hash.replace("#", "")}
              competences={competences}
              getRef={competencesRef}
              onChange={ (isVisible) => {
                setCompetencesVisibility(isVisible)}}
            />
            </CenteredLayout>
            <CenteredLayout>
              <Footer data={footer}/>
            </CenteredLayout>
          </>)
        }}/>
      </Switch>
    </>
  );
}

export default App;
