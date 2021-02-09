import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jaywant Jagtap',
  subtitle: 'Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1PuEunV-64GZZyxLL33y3irzFEbcQZ9BB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Admin Dashboard.png',
    title: 'Admin Dashboard Using Angular',
    info: 'Admin Dashboard',
    info2: '',
    url: 'https://adminlte.io/themes/dev/AdminLTE/index.html',
    repo: 'https://github.com/Justice221/Angular', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'VChat Application',
    info: 'Video calling and conference app',
    info2: '',
    url: '',
    repo: 'https://github.com/Justice221/VChat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sensor App',
    info:
      'Understanding Smartphone Sensor and App Data for Enhancing the Security of Secret Questions',
    info2: 'System Designed to enhance the security question.',
    url: '',
    repo: 'https://github.com/Justice221/SensorApp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jaywantjagtap96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/jaywant-jagtap',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Justice221',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
