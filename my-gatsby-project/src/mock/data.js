import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rene Prince | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rene Prince',
  subtitle: 'I am a Full-Stack Web Developer',
  cta: 'View Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Full Stack Developer who is recently qualified with a Diploma in Software Development from Code Institute. Proficient with Python, JavaScript, SQL, HTML and CSS. Possesses analytical thinking and working to strict deadlines from past experience in the Supply Chain sector. I love creating web applications from scratch using Python and JavaScript jumping back and forth from front-end to back-end. Currently seeking a new opportunity within a product focussed organisation where I can showcase my existing skills and progress further.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Eagle Fitness',
    info: 'A website for a local gym in Wembley',
    info2: 'HTML | CSS | JavaScript | Bootstrap',
    url: 'https://r-prince.github.io/Eagle-Fitness/',
    repo: 'https://github.com/R-Prince/Eagle-Fitness', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Travel Time',
    info:
      'A holiday inspiring website that allows you to search for your next holiday destination or choose a destination from our hand-picked selection.',
    info2: 'HTML | CSS | JavaScript | Bootstrap | jQuery | Google Place/Map API',
    url: 'https://r-prince.github.io/TravelTime/',
    repo: 'https://github.com/R-Prince/TravelTime', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
