import { projectArray } from './projects.js';

console.log("Welcome to my Profile");

//displaying projects
// console.log(projectArray);

//refresh the page onclicking the name
document.getElementById('MyName').addEventListener('click',()=>{location.assign("index.html")})

//smooth navigation up 
document.getElementById('navigUp').addEventListener('click',(event)=>{
    event.preventDefault();// Preventing the default anchor click behavior
    // document.getElementById('about').scrollIntoView({behavior:'smooth'}) 
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('aboutNavBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('about').scrollIntoView({behavior:'smooth'})
});
document.getElementById('educationNavBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('education').scrollIntoView({behavior:'smooth'})
});
document.getElementById('skillsNavBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({behavior:'smooth'})
});
document.getElementById('projectsNavBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({behavior:'smooth'})
});
document.getElementById('contactNavBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({behavior:'smooth'})
});


let projectCards = "";

for (let project of projectArray) {
    projectCards += `<div class="project light-color-card">
                        <img src="images/projectImages/${project.id}/cover.png" alt="">
                        <h3>${project.title}</h3>
                    </div>`;
}
//<a href="${project.link}" target="_blank">View On Github</a>

document.getElementById("project-cards").innerHTML = projectCards;

//show popup project window
let projects = Array.from(document.getElementsByClassName('project')); //convert to an array
// console.log(projects);

for (let projectIdx in projects){
    projects[projectIdx].addEventListener('click',()=>{
        // console.log(projects[projectIdx]);
        let popupWindow = document.getElementById('pop-project-card');
        popupWindow.style.visibility="visible";
        popupWindow.insertAdjacentHTML('beforeend',popupContentCreator(projectIdx));
    });
}

const popupContentCreator = (idx) => {
    return `<div id="dynamic-content">
                <h3>${projectArray[idx].title}</h3>
                <img src="images/projectImages/${projectArray[idx].id}/cover.png" alt="">
                <p>${projectArray[idx].description}</p>
            </div>`;
};


//hide popup project window
document.getElementById('popup-cancelbtn').addEventListener("click", () => {
    let popupWindow = document.getElementById('pop-project-card');
    popupWindow.style.visibility = "hidden";
    
    // Remove only dynamically added content
    let dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent) {
        dynamicContent.remove();
    }
});
