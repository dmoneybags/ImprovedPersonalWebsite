import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import VisibilitySensor from 'react-visibility-sensor';
import {animateSlipper, animateTextSwoosh, setDisappear} from "./animations.js";
import App from './App';
import { HatcheryBrief, PLTWBrief, Brief2048 } from './projectDefs.js';
import 'bulma/css/bulma.min.css';
import './index.css';
import {Link} from "react-router-dom";
import ring from "./Content/Apollo 1 Ring.obj"
import logo from "./logo.svg";
import resume from './Content/Resume_doc.docx';
import iPhoneImage from "./Content/iPhone.png";
import CImage from "./Content/C++.png";
import Image2048 from "./Content/2048.png"
import Me from "./Content/me2upscale.jpg";
import reportWebVitals from './reportWebVitals';

class TextSlide extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }
  render(){
    return(
      <div>
        <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible){
                this.props.func(this.props.id)
                this.setState({
                  animated: true
                });
              } else {
                setDisappear(this.props.id)
              }
            }}
          >
          <p id = {this.props.id} className='MainText is-size-1'>{this.props.text}</p>
          </VisibilitySensor>
      </div>
    )
  }
}


class Paragraph extends React.Component{
  render(){
    return(
      <div className='TextBox'>
        <TextSlide id = {this.props.id} text={this.props.title} func={animateTextSwoosh}/>
        <p className='MainText is-size-3'>{this.props.text}</p>
      </div>
    )
  }
}
export class Image extends React.Component{
  render() {
    return (
      <div>
        <img src = {this.props.image} className = {this.props.class}></img>
        <p className='Caption'>{this.props.caption}</p>
      </div>
    )
  }
}
class MainImage extends React.Component{
  render(){
    return(
      <div>
        <img className='MainImage' src = {this.props.image}></img>
      </div>
    )
  }
}
class NavButtons extends React.Component {
  render() {
    return (
      <div style={{width: "60%", margin: "auto"}}>
        <TextSlide id = "NavFooter" text="Check Out My: " func={animateTextSwoosh}/>
        <div >
          <a class="button is-link is-large is-fullwidth is-outlined" style = {{marginTop: "20px", marginBottom: "20px"}} href = "/Resume">Resume</a>
          <a class="button is-link is-large is-fullwidth is-outlined" style = {{marginTop: "20px", marginBottom: "40px"}} href = "/Extracurriculars">Extracurriculars</a>
        </div>
      </div>
    )
  }
}
class SocialBox extends React.Component {
  render() {
    return (
      <a className={'SocialBox'} href = {this.props.url}>
        <SocialIcon url={this.props.url} fgColor="#FFFFFF" style = {{margin: "auto"}}/>
        <p className={'is-size-2'}>{this.props.name}</p>
      </a>
    )
  }
}
class ProjectBox extends React.Component {
  render() {
    const article = this.props.article;
    return (
      <a href = {article.url}>
        <div className='TextImageBox'>
          <Paragraph id = {article.id} title = {article.title} text = {article.shortDescription}/>
          {article.visual}
        </div>
      </a>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div className='FooterContainer'>
        <p className='FooterText is-size-2' style={{ padding: "20px"}}>Website powered by <a href="https://reactjs.org" target="_blank">ReactJs</a><img src={logo} className="App-logo" alt="logo" /></p>
        <div style = {{display: "flex", justifyContent: "center"}}>
          <SocialBox url = "https://www.linkedin.com/in/daniel-demoney-02929016b/" name="LinkedIn"/>
          <SocialBox url = "https://github.com/dmoneybags" name="Github"/>
          <SocialBox url = "mailto:dandemoney@gmail.com" name="Email"/>
        </div>
        <hr style={{width: "60%", margin: "auto", marginTop: "10px", backgroundColor: "grey", height: "1px", opacity: "0.5"}}></hr>
        <p className='Caption' style = {{padding: "30px"}}>Daniel DeMoney 2022</p>
      </div>
    )
  }
}
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  render(){
    return (
      <div className='navbar is-black is-spaced' style={{position: "fixed", width: "100%"}}>
        <div className="navbar-brand">
          <p class="navbar-item is-size-2">
            Daniel DeMoney
          </p>
            <a 
              onClick={() => {
                this.setState({isActive: !this.state.isActive});
                console.log("showing navbar");
              }}
              role="button"
              className={`navbar-burger burger ${this.state.isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
        <div className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
          <Link className="navbar-item" to="/">
            Overview
          </Link>
          <a className="navbar-item" href={resume} download>
            Resume
          </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href = "/Extracurriculars">
            Extracurriculars
          </a>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/Extracurriculars/Hatchery">
            Project Hatchery
          </Link>
          <Link className="navbar-item" to="/Extracurriculars/PLTW">
            PLTW
          </Link>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
export class MainSection extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='Maingrad'></div>
        <div className='MainScrollbar'>
          <section>
            {this.props.elements}
          </section>
        </div>
      </div>
    )
  }
}
export class ArticleSection extends React.Component { 
  render() {
    const article = this.props.article;
    let bulletPoints = [];
    const ytVid = (article.ytLink == undefined ? "": 
    <div style={{padding: "15px"}}>
      <TextSlide id = "Video" text = "Video" func={animateTextSwoosh}/>
      <iframe src={article.ytLink} width="630" height="471"/>
    </div>
    );
    for (let i = 0; i < article.bulletPoints.length; i++){
      bulletPoints.push(
        (<li className='MainText is-size-2'>
          {article.bulletPoints[i]}
        </li>)
      );
    }
    return (
      <div>
        <TextSlide id = {article.base.id} text = {article.base.title} func={animateTextSwoosh}/>
        {article.githubLink !== '' ? <p className = "Caption">Github: <a>{article.githubLink}</a></p> : ''}
        <div className='TextImageBox'>
          <div>
            <img src = {article.image} style = {{verticalAlign: "top"}} className="MainImage"/>
          </div>
          <Paragraph title = "Background" id = {article.base.id + "Background"} text = {article.background}/>
        </div>
        <TextSlide id = "Responsibilities" text = "Main Accomplishments" func={animateTextSwoosh}/>
        <hr style = {{width: "60%", margin: "auto"}}></hr>
        <ul>
          {bulletPoints}
        </ul> 
        {ytVid}
        <Footer/>
      </div>
    )
  }
}

export const MainSectionData = (
  <div>
    <MainImage image = {Me}/>
    <TextSlide id = "HelloText" text = "Hi, I'm Daniel DeMoney" func={animateTextSwoosh}/>
    <div className='TextImageBox'>
      <Image image = {iPhoneImage} class = "iPhoneImage" caption = "Apollo, an app I wrote to pair with an IOT device"/>
      <Paragraph title = "About me" id = "AboutMeText" text = "I'm a 3rd year Business Marketing student at Cal Poly Pomona interested in joining a motivated sales or strategy team."/>
    </div>
    <div className='TextImageBox'>
      <Paragraph title = "My Interests" id = "InterestsText" text = "I'm extremely interested in B2B sales, data science, and programming. I spend most my free time programming software, flipping items on Ebay, and playing piano. "/>
      <Image image = {Image2048}  class = "Image2048" caption = "A graph of rewards for a reinforcement learning model I created"/>
    </div>
    <div style={{padding: "4em"}}>
      <TextSlide id="BigWhy" text = "How Was This Website Made?" func={animateSlipper}/>
      <Image image = {CImage}  class = "CImage" caption = "BlackJack with Ncurses, one of the first C programs I created"/>
      <Paragraph id = "InterestsText" text = "One of the main joys I find within life is through teaching myself new skills. This led me to teach myself the intricacies of computer science and learn how to code within C, Python, SQL, Swift, and Javascript. This website is coded with React, a popular Javascript framework."/>
    </div>
    <hr style={{margin: "2em", height: "1px"}}></hr>
    <NavButtons />
    <Footer />
  </div>
)

export const ProjectData = (
  <div style={{height: "100vh"}}>
    <TextSlide id="ProjectTitle" text = "My Extracurriculars" func={animateSlipper}/>
    <hr></hr>
    <ProjectBox article = {HatcheryBrief}/>
    <hr></hr>
    <ProjectBox article = {PLTWBrief}/>
    <hr></hr>
    <Footer />
  </div>
)

export const ExtraData = (
  <div style={{height: "100vh"}}>
    <TextSlide id="ProjectTitle" text = "My Personal Projects" func={animateSlipper}/>
    <hr></hr>
    <ProjectBox article = {Brief2048}/>
    <hr></hr>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
