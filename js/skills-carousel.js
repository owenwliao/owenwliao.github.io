// Modular, looping skills carousel
const skillsData = [
  { name: 'C++', img: './img/Skill images/C++.png' },
  { name: 'HTML', img: './img/Skill images/HTML.png' },
  { name: 'CSS', img: './img/Skill images/CSS.png' },
  { name: 'JavaScript', img: './img/Skill images/javascript.png' },
  { name: 'Java', img: './img/Skill images/Java.png' },
  { name: 'Figma', img: './img/Skill images/Figma.png' },
  { name: 'Office 365', img: './img/Skill images/Office 365.png' }
];

// Build and loop the carousel; duplicates content for a seamless scroll
function renderSkillsCarousel() {
  const track = document.getElementById('skills-track');
  if (!track) return;

  const buildItems = () => skillsData.map(skill => {
    const wrapper = document.createElement('div');
    wrapper.className = 'skill-logo';

    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = `${skill.name} logo`;

    wrapper.appendChild(img);
    return wrapper;
  });

  // Clear existing nodes then append two sets for looping
  track.innerHTML = '';
  const items = buildItems();
  [...items, ...items.map(node => node.cloneNode(true))].forEach(node => track.appendChild(node));
}

document.addEventListener('DOMContentLoaded', renderSkillsCarousel);
