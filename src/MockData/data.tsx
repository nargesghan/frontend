const { v4: uuidv4 } = require("uuid");

type Job = {
  id: string;
  imageURL: string;
  title: string;
  location: string;
  company: string;
  date: Date;
  summary: string; //
  responsibilities: string[]; //
  qualifications: string[]; //
  salary: number; //
  website: string; //
};

type Company = {
  id: string;
  imageURL: string;
  name: string;
  size: string;
  location: string;
  website: string;
  industry: string;
  about: string;
};

const companies: Company[] = [
  {
    id: "11",
    imageURL: "/General/digikala.svg",
    name: "digikala",
    size: "10-20",
    location: "Tehran",
    website: "www.example.com",
    industry: "network and security",
    about:`We’re a diverse collective of thinkers and doers, continually reimagining
     what’s possible to help us all do what we love in new ways. 
     And the same innovation that goes into our products also applies to our practices 
     — strengthening our commitment to leave the world better than we found it.
      This is where your work can make a difference in people’s lives.
      Including your own.
      Apple is an equal opportunity employer that is committed to inclusion and diversity. 
      Visit apple.com/careers to learn more.`
      },
  {
    id: "dfdfsf",
    imageURL: "/General/digikala.svg",
    name: "digikala",
    size: "10-200",
    location: "Tehran",
    website: "www.example.com",
    industry: "online shop",
    about: "blahblabla",
  },
  {
    id: "dhhh",
    imageURL: "/General/digikala.svg",
    name: "digikala",
    size: "10-20",
    location: "Tehran",
    website: "www.example.com",
    industry: "network and security",
    about: "blahblabla",
  },
];

const jobs: Job[] = [
  {
    id: "12",
    imageURL: "/General/digikala.svg",
    title: "front-end developer",
    location: "Tehran",
    company: "Digikala",
    summary: "This is a full-time position for a software engineer",
    responsibilities: ["Develop software", "Test software"],
    qualifications: [
      "Bachelor's degree in Computer Science",
      "2+ years of experience",
    ],
    salary: 70000,
    date: new Date(2024, 0, Math.floor(Math.random() * 31)),

    website: "www.techcorp.com",
  },
  {
    id: uuidv4(),
    imageURL: "https://webassets.cafebazaar.ir/images/bazaar-logo.svg",
    title: "data scientist",
    location: "remote",
    company: "Cafe Bazaar",
    summary: "We are looking for a data scientist to join our team",
    responsibilities: ["Analyze data", "Create models"],
    qualifications: [
      "Master's degree in a related field",
      "Experience with Python",
    ],
    salary: 80000,
    date: new Date(2024, 1, Math.floor(Math.random() * 28)),

    website: "www.datasolutions.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Iran_Khodro_symbol.svg",
    title: "Mechanical Engineer",
    location: "Shiraz",
    company: "Ikho",
    summary: "Hiring a project manager to oversee software projects",
    responsibilities: ["Manage projects", "Coordinate teams"],
    qualifications: [
      "Experience in project management",
      "Knowledge of software development",
    ],
    salary: 75000,
    date: new Date(2024, 2, Math.floor(Math.random() * 31)),
    website: "www.projectsinc.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/MTN_Irancell_Logo.svg",
    title: "driver",
    location: "Shiraz",
    company: "irancell",
    summary: "Seeking a skilled web developer to build and maintain websites",
    responsibilities: ["Build websites", "Fix bugs"],
    qualifications: [
      "Experience with JavaScript",
      "Knowledge of web design principles",
    ],
    salary: 65000,
    date: new Date(2024, 3, Math.floor(Math.random() * 30)),
    website: "www.webworks.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
    title: "programmer",
    location: "India",
    company: "alibaba",
    summary: "Seeking a skilled web developer to build and maintain websites",
    responsibilities: ["Build websites", "Fix bugs"],
    qualifications: [
      "Experience with JavaScript",
      "Knowledge of web design principles",
    ],
    salary: 65000,
    date: new Date(2024, 3, Math.floor(Math.random() * 30)),
    website: "www.webworks.com",
  },
  {
    id: uuidv4(),
    imageURL: "/General/digikala.svg",
    title: "front-end developer",
    location: "Tehran",
    company: "Digikala",
    summary: "Looking for a graphic designer to create engaging designs",
    responsibilities: ["Create designs", "Work with clients"],
    qualifications: ["Experience with design software", "Creative mindset"],
    salary: 60000,
    date: new Date(2024, 4, Math.floor(Math.random() * 31)),

    website: "www.designstudio.com",
  },
  {
    id: uuidv4(),
    imageURL: "/General/digikala.svg",
    title: "front-end developer",
    location: "Tehran",
    company: "Digikala",
    summary: "This is a full-time position for a software engineer",
    responsibilities: ["Develop software", "Test software"],
    qualifications: [
      "Bachelor's degree in Computer Science",
      "2+ years of experience",
    ],
    salary: 70000,
    date: new Date(2024, 0, Math.floor(Math.random() * 31)),

    website: "www.techcorp.com",
  },
  {
    id: uuidv4(),
    imageURL: "https://webassets.cafebazaar.ir/images/bazaar-logo.svg",
    title: "data scientist",
    location: "remote",
    company: "Cafe Bazaar",
    summary: "We are looking for a data scientist to join our team",
    responsibilities: ["Analyze data", "Create models"],
    qualifications: [
      "Master's degree in a related field",
      "Experience with Python",
    ],
    salary: 80000,
    date: new Date(2024, 1, Math.floor(Math.random() * 28)),

    website: "www.datasolutions.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Iran_Khodro_symbol.svg",
    title: "Mechanical Engineer",
    location: "Shiraz",
    company: "Ikho",
    summary: "Hiring a project manager to oversee software projects",
    responsibilities: ["Manage projects", "Coordinate teams"],
    qualifications: [
      "Experience in project management",
      "Knowledge of software development",
    ],
    salary: 75000,
    date: new Date(2024, 2, Math.floor(Math.random() * 31)),

    website: "www.projectsinc.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/MTN_Irancell_Logo.svg",
    title: "driver",
    location: "Shiraz",
    company: "irancell",
    summary: "Seeking a skilled web developer to build and maintain websites",
    responsibilities: ["Build websites", "Fix bugs"],
    qualifications: [
      "Experience with JavaScript",
      "Knowledge of web design principles",
    ],
    salary: 65000,
    date: new Date(2024, 3, Math.floor(Math.random() * 30)),

    website: "www.webworks.com",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
    title: "programmer",
    location: "India",
    company: "alibaba",
    summary: "Seeking a skilled web developer to build and maintain websites",
    responsibilities: ["Build websites", "Fix bugs"],
    qualifications: [
      "Experience with JavaScript",
      "Knowledge of web design principles",
    ],
    salary: 65000,
    date: new Date(2024, 3, Math.floor(Math.random() * 30)),

    website: "www.webworks.com",
  },
  {
    id: uuidv4(),
    imageURL: "/General/digikala.svg",
    title: "front-end developer",
    location: "Tehran",
    company: "Digikala",
    summary: "Looking for a graphic designer to create engaging designs",
    responsibilities: ["Create designs", "Work with clients"],
    qualifications: ["Experience with design software", "Creative mindset"],
    salary: 60000,
    date: new Date(2024, 4, Math.floor(Math.random() * 31)),

    website: "www.designstudio.com",
  },
];

export { jobs, companies };
