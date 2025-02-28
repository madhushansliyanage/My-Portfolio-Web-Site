import { projectArray } from './projects.js';

console.log("Welcome to my Profile");

console.log(projectArray);

let projectCards = "";

for (let project of projectArray) {
    projectCards += `<div class="project light-color-card">
                        <h3>${project.title}</h3>
                        <img src="images/projectImages/${project.id}/cover.png" alt="">
                        <p>
                            ${project.description}
                        </p>
                    </div>`;
}
//<a href="${project.link}" target="_blank">View On Github</a>

document.getElementById("project-cards").innerHTML = projectCards;