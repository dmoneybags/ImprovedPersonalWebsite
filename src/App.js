import logo from './logo.svg';
import './App.css';
import { MainSection, MainSectionData, ProjectData, ArticleSection} from "./index.js";
import { HatcheryProject } from './projectDefs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
         <Route path="/" element = {<MainSection elements = {MainSectionData}/>}/>
         <Route path="/Extracurriculars" element = {<MainSection elements = {ProjectData}/>}/> 
         <Route path="/Extracurriculars/Hatchery" element = {<MainSection elements = {<ArticleSection article = {HatcheryProject}/>}/>}/>       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
