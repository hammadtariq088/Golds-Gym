// Header Data

const headerLinks = [
  {
    id: 0,
    url: "/",
    name: "Home",
  },
  {
    id: 1,
    url: "/about",
    name: "About",
  },
  {
    id: 2,
    url: "/exercises",
    name: "Exercises",
  },
  {
    id: 3,
    url: "/plans",
    name: "Gym Plans",
  },
  {
    id: 4,
    url: "/trainers",
    name: "Trainers",
  },
  {
    id: 5,
    url: "/contact",
    name: "Contact",
  },
];

const authLinks = [
  {
    id: 0,
    url: "/login",
    name: "Login",
  },
  {
    id: 1,
    url: "/register",
    name: "Register",
  },
];

// --------------------------------------------

// Footer Data
const footerLinks = [
  {
    id: 0,
    className: "nav-menu nav",
    links: [
      {
        id: 0,
        name: "About Us",
        url: "/about",
      },
      {
        id: 1,
        name: "Gym Plans",
        url: "/plans",
      },
      {
        id: 2,
        name: "Trainers",
        url: "/trainers",
      },
      {
        id: 3,
        name: "Trainer Details",
        url: "/trainerdetails",
      },
    ],
  },
  {
    id: 1,
    className: "nav-menu nav",
    links: [
      {
        id: 0,
        name: "Exercises",
        url: "/exercises",
      },
      {
        id: 1,
        name: "Login",
        url: "/login",
      },
      {
        id: 2,
        name: "Register",
        url: "/register",
      },
      {
        id: 3,
        name: "Contact",
        url: "/contact",
      },
    ],
  },
];

const socialLinks = [
  {
    id: 0,
    className: "fa fa-facebook",
    url: "#",
  },
  {
    id: 1,
    className: "fa fa-instagram",
    url: "#",
  },
  {
    id: 2,
    className: "fa fa-twitter",
    url: "#",
  },
];

// -----------------------------------------

// Trainers Data

const trainerData = [
  {
    id: 0,
    src: "assets/img/team/tr1.jpg",
    name: "Alex John",
    dsgn: "Yoga Specialist",
    rating: "assets/img/team/5-stars.png",
    text: "Hire Me",
  },
  {
    id: 1,
    src: "assets/img/team/tr2.jpg",
    name: "Halbert Bourn",
    dsgn: "Body Building",
    rating: "assets/img/team/4-stars.png",
    text: "Hire Me",
  },
  {
    id: 2,
    src: "assets/img/team/tr3.jpg",
    name: "Oliviea Williams",
    dsgn: "Cardio Trainer",
    rating: "assets/img/team/5-stars.png",
    text: "Hire Me",
  },
  {
    id: 3,
    src: "assets/img/team/tr4.jpg",
    name: "Nikolus Smith",
    dsgn: "Fitness Trainer",
    rating: "assets/img/team/3-stars.png",
    text: "Hire Me",
  },
];

export { footerLinks, socialLinks, headerLinks, authLinks, trainerData };
