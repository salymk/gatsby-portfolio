import employeeDirectoryIMG from '../images/employee_directory.png'
import gameShowAppIMG from '../images/gameshow.png'
import dashboardIMG from '../images/dashboard3.png'
import photoGalleryIMG from '../images/gallery_mockup.png'
import onlineFormIMG from '../images/desktop-form1.png'
import responsiveDesignIMG from '../images/responsive-design2.png'
import blogSiteIMG from '../images/blog-site.png'
import weatherJournalIMG from '../images/weather-journal3.png'

export default [
  {
    id: 1,
    title: 'Employee Directory',
    skills: 'HTML / CSS / JS',
    description:
      'Utilized Random User API to grab employee data. You can search for the employees with their names and you click on each employee and it opens up a modal with contact info of employee.',
    github: {
      url: 'https://github.com/salymk/employee-directory',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/employee-directory/',
      button: 'Live Preview',
    },
    image: {
      src: employeeDirectoryIMG,
      alt: 'Employee directory',
    },
    youtube: 'https://www.youtube.com/embed/myS31QFXorY?rel=0&mute=1',
  },
  {
    id: 2,
    title: 'Game Show App',
    skills: 'HTML / CSS / JS',
    description:
      'Developed a browser version of a word guessing game. Used Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.',
    github: {
      url: 'https://github.com/salymk/game-show-app',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/game-show-app/',
      button: 'Live Preview',
    },
    image: {
      src: gameShowAppIMG,
      alt: 'Game show app',
    },
    youtube: 'https://www.youtube.com/embed/CKXwgu_RREo?rel=0',
  },
  {
    id: 3,
    title: 'Web Dashboard',
    skills: 'HTML / CSS / JS / SVG Graphics',
    description:
      'Built an interactive dashboard for a web app using SVG graphics. The project involved creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.',
    github: {
      url: 'https://github.com/salymk/webapp-dashboard',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/webapp-dashboard/',
      button: 'Live Preview',
    },
    image: {
      src: dashboardIMG,
      alt: 'Web App Dashboard',
    },
    youtube: 'https://www.youtube.com/embed/_OomMBaIAg8',
  },
  {
    id: 4,
    title: 'Photo Gallery',
    skills: 'HTML / CSS / JS / JQuery',
    description:
      'Interactive image galleries are a common feature of many websites, from photo sites to e-commerce applications. Used HTML, CSS and JavaScript to create an interactive, searchable gallery of photos.',
    github: {
      url: 'https://github.com/salymk/interactive-photo-gallery',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/interactive-photo-gallery/',
      button: 'Live Preview',
    },
    image: {
      src: photoGalleryIMG,
      alt: 'Interactive photo gallery',
    },
    youtube: 'https://www.youtube.com/embed/lpopl2mr-0I?rel=0',
  },
  {
    id: 5,
    title: 'Weather Journal App',
    skills: 'HTML / CSS / Bootstrap / JS / Node / Express',
    description:
      'Dispatched a Node and Express environment to develop a weather journal web app that updates and modifies website elements dynamically using asynchronously retrieved data pulled from OpenWeatherMap API.',
    github: {
      url: 'https://github.com/salymk/interactive-photo-gallery',
      button: 'GitHub',
    },
    preview: {
      url: '',
      button: 'No Preview',
    },
    image: {
      src: weatherJournalIMG,
      alt: 'Weather Journal App',
    },
    youtube: 'https://www.youtube.com/embed/fsXydnM2UYM?rel=0',
  },
  {
    id: 6,
    title: 'Registration Form',
    skills: 'HTML / CSS',
    description:
      'Built a responsive, mobile-first registration form using a variety of HTML form elements and styled it with CSS.',
    github: {
      url: 'https://github.com/salymk/online-registration-form-site',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/online-registration-form-site/',
      button: 'Live Preview',
    },
    image: {
      src: onlineFormIMG,
      alt: 'Online Registration Form',
    },
    youtube: 'https://www.youtube.com/embed/xRp-uBVT1TQ?rel=0',
  },
  {
    id: 7,
    title: 'Responsive Layout',
    skills: 'HTML / CSS',
    description:
      'Using HTML, CSS, and responsive design, built a mobile-first web page with a layout that adjusts to fit mobile phones, tablets, and desktop displays.',
    github: {
      url: 'https://github.com/salymk/mobile-first-responsive-layout',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/mobile-first-responsive-layout/',
      button: 'Live Preview',
    },
    image: {
      src: responsiveDesignIMG,
      alt: 'Mobile-first Responsive Layout',
    },
    youtube: 'https://www.youtube.com/embed/Z7zacqTy-vQ?rel=0',
  },
  {
    id: 8,
    title: 'Personal Blog',
    skills: 'HTML / CSS',
    description:
      'Developed a personal blog website, with custom images, layout, and styling. ',
    github: {
      url: 'https://github.com/salymk/personal-blog-website',
      button: 'GitHub',
    },
    preview: {
      url: 'https://salymk.github.io/personal-blog-website/index.html',
      button: 'Live Preview',
    },
    image: {
      src: blogSiteIMG,
      alt: 'Personal Blog',
    },
    youtube: 'https://www.youtube.com/embed/SJIF07FnOTQ?rel=0',
  },
]
