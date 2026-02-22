const intro = document.getElementById("intro");
const projects = document.getElementById("projects");
const hackathons = document.getElementById("hackathons");
const more = document.getElementById("more");

const navbar = document.querySelector("header > nav");

let prevActiveId = "intro";

const observer = new IntersectionObserver((entries) => {

  const entry = entries.sort().find(entry => entry.isIntersecting);

  if (entry) {
    document.querySelector(`a[href="#${prevActiveId}"]`).setAttribute("data-viewing-link-content", "inactive")

    const active = document.querySelector(`a[href="#${entry.target.id}"]`)
    active.setAttribute("data-viewing-link-content", "active")
    prevActiveId = entry.target.id;
  }
}, {
  threshold: 0.5
});

observer.observe(intro);
observer.observe(projects);
observer.observe(hackathons);
observer.observe(more);
