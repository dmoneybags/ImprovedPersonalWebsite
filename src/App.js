import logo from './logo.svg';
import './App.css';
import { MainSection, MainSectionData, ProjectData, ArticleSection, ExtraData} from "./index.js";
import { HatcheryProject, PLTWProject, Project2048 } from './projectDefs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
         <Route path="/" element = {<MainSection elements = {MainSectionData}/>}/>
         <Route path="/Extracurriculars" element = {<MainSection elements = {ProjectData}/>}/> 
         <Route path="/Extracurriculars/Hatchery" element = {<MainSection elements = {<ArticleSection article = {HatcheryProject}/>}/>}/>
         <Route path="/Extracurriculars/PLTW" element = {<MainSection elements = {<ArticleSection article = {PLTWProject}/>}/>}/>
         <Route path="/Projects" element = {<MainSection elements = {ExtraData}/>}/>    
         <Route path="/Projects/2048" element = {<MainSection elements = {<ArticleSection article = {Project2048}/>}/>}/>       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
