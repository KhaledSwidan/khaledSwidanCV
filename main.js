const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".mode-btn");
const h1 = document.querySelector("h1");
const lastP = document.querySelector(".container p:last-of-type");
const jobTitle = document.querySelector(".container p span");
const projects = document.querySelector(".projects");

btn.addEventListener("click", () => {
  if (
    !h1.classList.contains("active") &&
    !lastP.classList.contains("active") &&
    !jobTitle.classList.contains("active") &&
    !projects.classList.contains("active")
  ) {
    h1.classList.add("active");
    lastP.classList.add("active");
    projects.classList.add("active");
    jobTitle.style.color = "#fff";
    overlay.style.background = "#1a202c";
    btn.innerHTML = "☀️";
  } else {
    h1.classList.remove("active");
    lastP.classList.remove("active");
    projects.classList.remove("active");
    jobTitle.style.color = "#000";
    overlay.style.background = "#e2e8f0";
    btn.innerHTML = "🌙";
  }
});

const techSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap5",
  "Tailwind CSS",
  "SCSS",
  "Responsive UI Design",
  "EcmaScript6",
  "TypeScript",
  "Git & GitHub",
  "React",
  "Redux",
  "Redux Toolkit",
  "Software Testing"
];
document.getElementById("techSkillsMap").innerText = techSkills.map(
  (e) => e + "  "
);
