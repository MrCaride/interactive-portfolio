import 'typeface-roboto';
import './style.css';

const sections = document.querySelectorAll('section');
let currentSection = 0;

document.getElementById('en-btn').addEventListener('click', () => switchLanguage('en'));
document.getElementById('es-btn').addEventListener('click', () => switchLanguage('es'));

document.getElementById('home-btn').addEventListener('click', () => navigateToSection(0));
document.getElementById('about-btn').addEventListener('click', () => navigateToSection(1));
document.getElementById('projects-btn').addEventListener('click', () => navigateToSection(2));
document.getElementById('skills-btn').addEventListener('click', () => navigateToSection(3));
document.getElementById('experience-btn').addEventListener('click', () => navigateToSection(4));
document.getElementById('contact-btn').addEventListener('click', () => navigateToSection(5));

function switchLanguage(lang) {
  const translations = {
    en: {
      home: 'Welcome to My Interactive Portfolio',
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      homeText: 'This is where you can showcase your projects and skills.',
      aboutText: 'Information about me.',
      projectsText: 'Details of my projects.',
      skillsText: 'Visual representation of my skills.',
      experienceText: 'Interactive timeline of my professional journey.',
      contactText: 'How to contact me.'
    },
    es: {
      home: 'Bienvenido a Mi Portafolio Interactivo',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      homeText: 'Aquí es donde puedes mostrar tus proyectos y habilidades.',
      aboutText: 'Información sobre mí.',
      projectsText: 'Detalles de mis proyectos.',
      skillsText: 'Representación visual de mis habilidades.',
      experienceText: 'Línea de tiempo interactiva de mi trayectoria profesional.',
      contactText: 'Cómo contactarme.'
    }
  };

  document.querySelector('#home h1').textContent = translations[lang].home;
  document.querySelector('#home p').textContent = translations[lang].homeText;
  document.querySelector('#about h1').textContent = translations[lang].about;
  document.querySelector('#about p').textContent = translations[lang].aboutText;
  document.querySelector('#projects h1').textContent = translations[lang].projects;
  document.querySelector('#projects p').textContent = translations[lang].projectsText;
  document.querySelector('#skills h1').textContent = translations[lang].skills;
  document.querySelector('#skills p').textContent = translations[lang].skillsText;
  document.querySelector('#experience h1').textContent = translations[lang].experience;
  document.querySelector('#experience p').textContent = translations[lang].experienceText;
  document.querySelector('#contact h1').textContent = translations[lang].contact;
  document.querySelector('#contact p').textContent = translations[lang].contactText;
}

function navigateToSection(index) {
  currentSection = index;
  document.getElementById('app').style.transform = `translateY(-${currentSection * 100}vh)`;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    currentSection = (currentSection + 1) % sections.length;
  } else if (e.key === 'ArrowUp') {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
  }
  document.getElementById('app').style.transform = `translateY(-${currentSection * 100}vh)`;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});




