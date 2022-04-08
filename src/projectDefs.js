import React from 'react';
import ring from "./Content/Ring.png";
import pltw from "./Content/PLTW.jpg";
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
const pltwVisual = <div>
    <img className='ProjectImage' src = {pltw} />
    <p className='Caption'>My group at our presentation</p>
</div>;
export const HatcheryBrief = new BriefProject("ProjectHatcheryShortTitle", "/Extracurriculars/Hatchery", "Project Hatchery", "Through the Cal Poly \
research intiative Project Hatchery, my roommate and I are bringing a smart ring capable of real-time continuous \
blood pressure measurement to market. I am in charge of the business and software aspects of the project.", basicVisual);
export const PLTWBrief = new BriefProject("PLTWBriefTitle", "/Extracurriculars/PLTW", "Project Lead The Way", "Project lead the way was an \
engineering initiative I took part in within high school to collaborate with a group and create products.", pltwVisual)
export const HatcheryProject = new Project(HatcheryBrief, "https://github.com/dmoneybags?tab=repositories", "Myself and my close friend decided to attempt to create an IOT device which would provide users with real time blood pressure info. \
Our device uses an oximeter, an algorithim hub (microprocessor), an accelerometer, and a bluetooth chip. So far we plan to produce two \
form factors, one in the form of a silicon ring with an embedded soft PCB, and a band with a plastic box containing a hard PCB. \
These products are named the Apollo Ring and Apollo Band specifically. The statistics provided to the user through the device are \
heart rate, SPO2, and blood pressure data. We're mostly focusing on our ability to provide users with accurate \
blood pressure data through cutting edge algorithms because we feel that the market is large enough for us to make an impact. \
So far we have sourced components for a prototype PCB (being constructed right now in China), \
developed a fully functional prototype app, and written all the bluetooth and oximeter C code for the system.", ["Responsible for sourcing PCB components",
"Created online marketing strategy", "Established the consumer needs for the product", "Assisted in building BOM"], ring)