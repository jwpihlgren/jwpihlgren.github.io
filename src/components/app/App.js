import React, { useState, useEffect, useRef} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
/* import ls from 'local-storage'; */

import About from "../trendingmovies/About";
import Movies from "../trendingmovies/Movies";
import TrendingNavBar from "../trendingmovies/TrendingNavBar";
import PortfolioNavbar from "../portfolio/portfolioNavbar/portfolioNavbar";
import PortolioContainer from "../portfolio/portfolioContainer/portfolioContainer";
import ResumeContainer from "../portfolio/resumeContainer/resumeContainer";
import CompetenceContainer from "../portfolio/competencesContainer/competencesContainer";
import ScrollHint from "../scrollHint";
import ProjectContainer from "../portfolio/projectContainer/projectContainer";
import Footer from "../portfolio/footer/footer";
import resumeData from "../../data/resume.js";


const {navItems, logo, cards, resume, competences, footer} = resumeData;


function App() {
  const [data, setData] = useState({ results: [] });
  const [scrollVal, setScroll] = useState(0);
  const [portfolioVisibility, setPortfolioVisibility] = useState(false);
  const [resumeVisibility, setResumeVisibility] = useState(false);
  const [competencesVisibility, setCompetencesVisibility] = useState(false);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const competencesRef = useRef(null);

  useEffect(() => {
    /* Add scroll listener */
    document.addEventListener("scroll", () => {
      if(window.pageYOffset !== scrollVal) setScroll(window.pageYOffset);
    });

    /* API CALL */
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
      );
      const tmp = await res.json();
      setData(tmp);
    };
    fetchData();

    /* Remove scroll listener */
    return () => document.removeEventListener("scroll", () => {
      if(window.pageYOffset !== scrollVal) setScroll(window.pageYOffset);
    });
  }, [scrollVal, portfolioVisibility, resumeVisibility, competencesVisibility]);


 const sideNavOnClick = (ref) => {
   console.log(ref);
    window.scrollTo( {
      top: ref.offsetTop - ref.offsetTop / 3,
      left: 0,
      behavior: "smooth",
    })
 }

 const sectionRefs = [portfolioRef, resumeRef, competencesRef];
 const sectionVisibility = {portfolio: portfolioVisibility, resume: resumeVisibility, competences: competencesVisibility}

  return (
    <>
      {/* ROUTING */}
      <Switch>
        <Route path="/projects/trending/:id">
          <TrendingNavBar path={"/projects/trending/"}/>
          <About movies={data} path={"/projects/trending/"} />
        </Route>
        <Route path="/projects/trending">
          <TrendingNavBar path={"/projects/trending/"} />
          <Movies movies={data} path={"/projects/trending/"} />
        </Route>
        <Route path="/projects/:id">
          <PortfolioNavbar logo={logo} links={navItems}  />
          <ProjectContainer path={"/projects/"} details={resumeData.cards.projects} />
          <Footer data={footer}/>
        </Route>
        <Route path="/">
          <PortfolioNavbar logo={logo} links={navItems}/>
          <ScrollHint onClick={sideNavOnClick} locations={sectionRefs} visibility={sectionVisibility}  />
          <PortolioContainer
            title={"Portfolio"}
            cards={cards}
            getRef={portfolioRef}
            onChange={ (isVisible) => {
              setPortfolioVisibility(isVisible)}}
          />
          <ResumeContainer
            title={"Resume"}
            resume={resume}
            getRef={resumeRef}
            onChange={ (isVisible) => {
              setResumeVisibility(isVisible)}}
          />
          <CompetenceContainer
            title={"Competences"}
            competences={competences}
            getRef={competencesRef}
            onChange={ (isVisible) => {
              setCompetencesVisibility(isVisible)}}
          />
          <Footer data={footer}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
