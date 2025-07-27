"use strict";
const container = document.getElementById("github-projects");
fetch("https://api.github.com/users/Chief03/repos")
    .then((res) => res.json())
    .then((repos) => {
    repos
        .filter(repo => !repo.fork) // skip forks
        .slice(0, 6) // limit number of projects
        .forEach(repo => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank" style="color: #bb86fc;">${repo.name}</a></h3>
          <p>${repo.description || "No description provided."}</p>
        `;
        container === null || container === void 0 ? void 0 : container.appendChild(projectDiv);
    });
})
    .catch(err => console.error("Failed to load GitHub projects:", err));
