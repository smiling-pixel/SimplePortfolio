// script.js
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const projects = [
  { title: "HTML", desc: "Hyper-Text MarkUp Language." },
  { title: "CSS", desc: "Cascading Stylesheet." },
  { title: "JAVA", desc: "Java scrip programming language" },
  { title: "The C's", desc: "C and C++ programming Language" },
];

function loadProjects() {
  const grid = document.getElementById('projectGrid');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  initThemeToggle();
  fetchRandomQuote();
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! I will get back to you shortly.');
  contactForm.reset();
});

// Dark/Light Mode Toggle
function initThemeToggle() {
  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Theme';
  toggle.style.position = 'fixed';
  toggle.style.bottom = '20px';
  toggle.style.right = '20px';
  toggle.style.padding = '10px 15px';
  toggle.style.background = '#00ffc8';
  toggle.style.color = '#000';
  toggle.style.border = 'none';
  toggle.style.borderRadius = '5px';
  toggle.style.cursor = 'pointer';

  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
}

// Fetch and display a random quote using an API
function fetchRandomQuote() {
  const section = document.createElement('section');
  section.id = 'quote';
  section.style.textAlign = 'center';
  section.style.padding = '2rem';

  const quoteText = document.createElement('p');
  quoteText.textContent = 'Loading quote...';
  section.appendChild(quoteText);

  document.body.insertBefore(section, document.querySelector('footer'));

  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = `"${data.content}" — ${data.author}`;
    })
    .catch(error => {
      quoteText.textContent = 'Could not load quote.';
      console.error('Quote API error:', error);
    });
}
