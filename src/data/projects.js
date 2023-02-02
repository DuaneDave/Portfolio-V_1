import bcOne from '../assets/bcOne.JPG';
import bcTwo from '../assets/bcTwo.PNG';
import bcThree from '../assets/bcThree.PNG';
import bcFour from '../assets/bcFour.PNG';

import port1 from '../assets/port1.PNG';
import port2 from '../assets/port2.PNG';

import kanB1 from '../assets/kanB1.PNG';
import kanB2 from '../assets/kanB2.PNG';
import kanB3 from '../assets/kanB3.PNG';

import NoteApp1 from '../assets/NoteApp1.PNG';

import bkR1 from '../assets/bkR1.PNG';

import crypOne from '../assets/crypOne.PNG';
import cryp2 from '../assets/cryp2.PNG';

const projects = [
  {
    id: 1,
    title: 'Blockchain Summit',
    description:
      'Blockchain Summit is a website for a fictional blockchain conference where all digital currency lovers come together to cellebrate and discuss the future of the space. It was built using HTML, CSS, and JavaScript. It is fully responsive and has a mobile-first design. It is also fully accessible and has been tested with the WAVE and Lighthouse accessibility tools.',
    screenshots: [bcOne, bcTwo, bcThree, bcFour],
    live_link:
      'https://duanedave.github.io/Blockchain-Conference-first-capstone/',
    github_link:
      'https://github.com/DuaneDave/Blockchain-Conference-first-capstone',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Personal Website',
    description:
      'This is my personal website that displays a collection of my works and displays the inputs i have made in the tech space. It was built using React, React Router, and React Hooks. It is fully responsive and has a mobile-first design. It is also fully accessible.',
    screenshots: [port1, port2],
    live_link: 'https://google.com',
    github_link: 'https://github.com/DuaneDave/Portfolio-V_1',
    tech_stack: [
      'React',
      'React Router',
      'React Hooks',
      'CSS',
      'Framer Motion',
    ],
  },
  {
    id: 3,
    title: 'Kanban',
    description:
      'Kanban is a web application that fetches a list of movie from an API and displays them for user to view. Kanban provides interactivity by allowing users to post likes and comments on a movie. Also all user interractions are saved to a backend database. It was built using HTML, CSS and vanila JavaScript. It is fully responsive and has a mobile-first design. It is also fully accessible.',
    screenshots: [kanB1, kanB2, kanB3],
    live_link: '',
    github_link: '',
    tech_stack: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
  },
  {
    id: 4,
    title: 'Note Taking App',
    description:
      'Note Taking App is a web application that allows users to create, edit, and delete notes. It was built using HTML, CSS and vanila JavaScript. After each note entry, all data will be saved to local storage so the data can still be available to the user even after they have closed their browser. It is fully responsive and has a mobile-first design. It is also fully accessible.',
    screenshots: [NoteApp1],
    live_link: 'https://duanedave.github.io/Note-App/',
    github_link: 'https://github.com/DuaneDave/Note-App',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    title: 'Bike Rental App',
    description:
      'Bike Rental App is a fullstack web application that integrates interesting web development conceps like authentication, authorization, validation and REST. This app will allow a user access only if they are logged in and certain operations can only be performed by the user who created the data. Futhermore, Bikes can be reserved for a specified period of time, all reservation are specific to the user who reserved it.  Also, it adopts w3cag accessibility guidelines and impleements a theme switcher in order to provide a quality UX for all users. Bike rental app was built from mobile to desktop using tech stacks like React, Ruby on Rails, and PostgreSQL. ',
    screenshots: [bkR1],
    live_link: 'https://rentbikes.netlify.app/',
    github_link: 'https://github.com/DuaneDave/Bike-rental',
    tech_stack: [
      'React',
      'Redux Toolkit',
      'React Router',
      'React Hooks',
      'Ruby on Rails',
      'PostgreSQL',
      'CSS',
      'Post CSS',
    ],
  },
  {
    id: 6,
    title: 'Crypto Metrics',
    description:
      'Crypto Metrics is a mobile application built on the web using React. It is simply a crypto currency tracker that displays the current price of a crypto currency and its price change. Also, a user can click to expand a particular crypto to see all the details of that currency. It was built using React, React Router, and React Hooks. It is fully responsive and has a mobile-first design. It is also fully accessible.',
    screenshots: [crypOne, cryp2],
    live_link: 'https://d-codes.netlify.app',
    github_link: 'https://github.com/DuaneDave/crypto-metrric-app',
    tech_stack: ['React', 'React Router', 'Redux Toolkit', 'CSS'],
  },
];

export default projects;
