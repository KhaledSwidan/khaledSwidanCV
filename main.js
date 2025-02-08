const elements = {
  overlay: document.querySelector('.overlay'),
  btn: document.querySelector('.mode-btn'),
  h1: document.querySelector('h1'),
  lastP: document.querySelector('.container p:last-of-type'),
  jobTitle: document.querySelector('.container p span'),
  projects: document.querySelector('.projects'),
};

const toggleElements = [elements.h1, elements.lastP, elements.projects];

elements.btn.addEventListener('click', () => {
  const isActive = elements.h1.classList.contains('active');

  toggleElements.forEach((el) => el.classList.toggle('active'));
  elements.jobTitle.style.color = isActive ? '#000' : '#fff';
  elements.overlay.style.background = isActive ? '#e2e8f0' : '#1a202c';
  elements.btn.innerHTML = isActive ? '🌙' : '☀️';
});

const techSkills = [
  'HTML5 - ',
  'CSS3 - ',
  'JavaScript - ',
  'Bootstrap5 - ',
  'Tailwind - ',
  'Responsive UI Design - ',
  'EcmaScript6 - ',
  'TypeScript - ',
  'Git & GitHub - ',
  'React - ',
  'Next.js - ',
  'Redux Toolkit - ',
  'Software Testing - ',
  'Prisma ORM',
];

document.getElementById('techSkillsMap').innerText = techSkills.join('  ');
