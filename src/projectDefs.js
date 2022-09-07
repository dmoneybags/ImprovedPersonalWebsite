import React from 'react';
import ring from "./Content/Ring.png";
import pltw from "./Content/PLTW.jpg";
import rewards from "./Content/2048.jpg"
import ecgImage from "./Content/ecg.jpg"
import {Image} from "./index.js"

class BriefProject {
    constructor(id, url, title, shortDescription, visual) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.shortDescription = shortDescription;
        this.visual = visual;
    }
}
class Project {
    constructor(base, githubLink, background, bulletPoints, image, ytLink) {
        this.base = base;
        this.githubLink = githubLink;
        this.background = background;
        this.bulletPoints = bulletPoints;
        this.image = image;
        this.ytLink = ytLink;
    }
}

const basicVisual = <div>
    <img className='ProjectImage' src = {ring} />
    <p className='Caption'>The 3d model for the ring</p>
</div>;
const visual2048 = <div>
    <img src = {rewards} />
    <p className='Caption'>A graph of the agents rewards</p>
</div>;
const pltwVisual = <div>
    <img className='ProjectImage' src = {pltw} />
    <p className='Caption'>My group at our presentation</p>
</div>;
const ecgVisual = <div>
<img className='ProjectImage' src = {ecgImage} />
<p className='Caption'>An image of an ECG signal</p>
</div>;

export const HatcheryBrief = new BriefProject("ProjectHatcheryShortTitle", "/Extracurriculars/Hatchery", "Project Hatchery", "Through the Cal Poly \
research intiative Project Hatchery, my roommate and I are bringing a smart ring capable of real-time continuous \
blood pressure measurement to market. I am in charge of the business and software aspects of the project.", basicVisual);
export const PLTWBrief = new BriefProject("PLTWBriefTitle", "/Extracurriculars/PLTW", "Project Lead The Way", "Project lead the way was an \
engineering initiative I took part in within high school to collaborate with a group and create products.", pltwVisual)
export const Brief2048 = new BriefProject("2048BriefTitle", "/Projects/2048", "2048 Reinforcement learning", "A simple actor-critic algorithm \
I created to learn the number game 2048. I recreated the game using my own abstractions for training and used selenium to let the net control \
a bot for play within a browser.", visual2048)
export const EcgBrief = new BriefProject("ECGtitle", "/Projects/ECGNet", "Using a public 12 lead ECG database I created a convolutional neural net to classify heart rhythms based on the ECG signal",
ecgImage)
export const HatcheryProject = new Project(HatcheryBrief, "https://github.com/dmoneybags?tab=repositories", "Myself and my close friend decided to attempt to create an IOT device which would provide users with real time blood pressure info. \
Our device uses an oximeter, an algorithim hub (microprocessor), an accelerometer, and a bluetooth chip. So far we plan to produce two \
form factors, one in the form of a silicon ring with an embedded soft PCB, and a band with a plastic box containing a hard PCB. \
These products are named the Apollo Ring and Apollo Band specifically. The statistics provided to the user through the device are \
heart rate, SPO2, and blood pressure data. We're mostly focusing on our ability to provide users with accurate \
blood pressure data through cutting edge algorithms because we feel that the market is large enough for us to make an impact. \
So far we have sourced components for a prototype PCB (being constructed right now in China), \
developed a fully functional prototype app, and written all the bluetooth and oximeter C code for the system.", ["Responsible for sourcing PCB components",
"Created online marketing strategy", "Established the consumer needs for the product", "Assisted in building BOM"], ring, "https://www.youtube.com/embed/BeW5HHXQ4yA")
export const PLTWProject = new Project(PLTWBrief, "", "Project Lead The Way is an Ammerican nonprofit organization which provides oppurtunities in STEM \
education and practical experience to high school students. I joined the initiative in 2018 was able \
to visit microchip fabs, work with professional engineers, and design products on a high level. \
This experience pushed me to pursue a career close to engineering and was one of the more formative \
events of my adolescence.",  ["Designed models in CAD", "Performed market analysis", "Tested prototypes"], pltw)
export const Project2048 = new Project(Brief2048, "https://github.com/dmoneybags/2048", "2048 is a number game in which an agent has 4 actions, up, down, left, and right. Each action \
shifts all tiles in the chosen direction, with equal tiles combining and forming a tile with twice \
the value and generates a new tile of 2 or 4. I felt this game would be perfect for machine learning because it is fairly simple \
, easy to represent numerically, and involves a simple optimal strategy. I chose an Actor-Critic method \
for the main architecture of the net. Actor-Critic has become my favorite method for reinforcement learning \
because it is fairly simple, involves state evaluation, and gives the programmer good visibility on how \
the net interprets the game. The state is represented by turning each value into a binary representation of the tile \
(16 bit so 4 turns into 00000000 00000011). I chose to do this because a binary representation or one-hot-encoding \
as it is often called, works better for data which is categorical. I created my own version of the game using a 2d \
array and encoded each action to an integer which the net would output. After training for 60000 games the net was able \
to reach 512 on an average game and 2048 on its best game. All code written in Python using libraries of \
Tensorflow, Numpy, and Selenium (for playing in browser).", ["Reached 2048 after 60000 episodes", "Created a stable training algorithm to run a game every 30 seconds.", "Created a bot to play the game in browser."],visual2048)
export const ProjectECG = new Project(EcgBrief, "https://github.com/dmoneybags/ECGNET", "An ECG is a measure of voltage relative to time. The above figure shows what a normal ECG would look like. An irregular heart is classified as a heartbeat which is abnormally fast, abnormally slow, or inconsistent relative to time. A link to the classifications and frequencies of the irregularities measured by the study can be found at https://www.nature.com/articles/s41597-020-0386-x/tables/3.", ["Classified 85% of samples correctly", "Trained on a database of 10,000 samples", "Still tuning the model"],ecgVisual)

