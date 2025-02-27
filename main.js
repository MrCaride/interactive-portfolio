import './style.css';

const sections = document.querySelectorAll('section');
let currentSection = 0;

document.getElementById('en-btn').addEventListener('click', () => switchLanguage('en'));
document.getElementById('es-btn').addEventListener('click', () => switchLanguage('es'));

document.getElementById('home-btn').addEventListener('click', () => navigateToSection(0));
document.getElementById('about-btn').addEventListener('click', () => navigateToSection(1));
document.getElementById('projects-btn').addEventListener('click', () => navigateToSection(2));
document.getElementById('contact-btn').addEventListener('click', () => navigateToSection(3));

function switchLanguage(lang) {
  const translations = {
    en: {
      home: 'Welcome to My Interactive Portfolio',
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact',
      homeText: 'This is where you can showcase your projects and skills.',
      aboutText: 'Information about me.',
      projectsText: 'Details of my projects.',
      contactText: 'How to contact me.'
    },
    es: {
      home: 'Bienvenido a Mi Portafolio Interactivo',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      homeText: 'Aquí es donde puedes mostrar tus proyectos y habilidades.',
      aboutText: 'Información sobre mí.',
      projectsText: 'Detalles de mis proyectos.',
      contactText: 'Cómo contactarme.'
    }
  };

  document.querySelector('#home h1').textContent = translations[lang].home;
  document.querySelector('#home p').textContent = translations[lang].homeText;
  document.querySelector('#about h1').textContent = translations[lang].about;
  document.querySelector('#about p').textContent = translations[lang].aboutText;
  document.querySelector('#projects h1').textContent = translations[lang].projects;
  document.querySelector('#projects p').textContent = translations[lang].projectsText;
  document.querySelector('#contact h1').textContent = translations[lang].contact;
  document.querySelector('#contact p').textContent = translations[lang].contactText;
}

function navigateToSection(index) {
  currentSection = index;
  document.getElementById('app').style.transform = `translateX(-${currentSection * 100}vw)`;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentSection = (currentSection + 1) % sections.length;
  } else if (e.key === 'ArrowLeft') {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
  }
  document.getElementById('app').style.transform = `translateX(-${currentSection * 100}vw)`;
});
