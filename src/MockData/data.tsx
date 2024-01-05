type Job = {
  id:number;
    imageURL: string;
    title: string;
    location: string;
    company: string;
    date:Date;
    summary:string;//
    responsibilities:string[];//
    qualifications:string[];//
    salary:number;//
    website:string;//
   
  };
  
  const jobs: Job[] = [
    {
      id:1,
      imageURL: "/General/digikala.svg",
      title: "front-end developer",
      location: "Tehran",
      company: "Digikala",
      summary: "This is a full-time position for a software engineer",
      responsibilities: ["Develop software", "Test software"],
      qualifications: ["Bachelor's degree in Computer Science", "2+ years of experience"],
      salary: 70000,
      date: new Date(2024, 0, Math.floor(Math.random() * 31)),

      website:"www.techcorp.com",
    },
    {
      id:2,
      imageURL: "https://webassets.cafebazaar.ir/images/bazaar-logo.svg",
      title: "data scientist",
      location: "remote",
      company: "Cafe Bazaar",
      summary: "We are looking for a data scientist to join our team",
      responsibilities: ["Analyze data", "Create models"],
      qualifications: ["Master's degree in a related field", "Experience with Python"],
      salary: 80000,
      date: new Date(2024, 1, Math.floor(Math.random() * 28)),
  
      website:"www.datasolutions.com",
    },
    {
      id:3,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Iran_Khodro_symbol.svg",
      title: "Mechanical Engineer",
      location: "Shiraz",
      company: "Ikho",
      summary: "Hiring a project manager to oversee software projects",
      responsibilities: ["Manage projects", "Coordinate teams"],
      qualifications: ["Experience in project management", "Knowledge of software development"],
      salary: 75000,
      date: new Date(2024, 2, Math.floor(Math.random() * 31)),
      website: "www.projectsinc.com"
    },
    {
      id:4,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/MTN_Irancell_Logo.svg",
      title: "driver",
      location: "Shiraz",
      company: "irancell",
      summary: "Seeking a skilled web developer to build and maintain websites",
      responsibilities: ["Build websites", "Fix bugs"],
      qualifications: ["Experience with JavaScript", "Knowledge of web design principles"],
      salary: 65000,
      date: new Date(2024, 3, Math.floor(Math.random() * 30)),
      website: "www.webworks.com"
    },
    {
      id:5,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
      title: "programmer",
      location: "India",
      company: "alibaba",
      summary: "Seeking a skilled web developer to build and maintain websites",
      responsibilities: ["Build websites", "Fix bugs"],
      qualifications: ["Experience with JavaScript", "Knowledge of web design principles"],
      salary: 65000,
      date: new Date(2024, 3, Math.floor(Math.random() * 30)),
      website: "www.webworks.com"
    },
    {
      id:6,
      imageURL: "/General/digikala.svg",
      title: "front-end developer",
      location: "Tehran",
      company: "Digikala",
      summary: "Looking for a graphic designer to create engaging designs",
      responsibilities: ["Create designs", "Work with clients"],
      qualifications: ["Experience with design software", "Creative mindset"],
      salary: 60000,
      date: new Date(2024, 4, Math.floor(Math.random() * 31)),
      
      website: "www.designstudio.com"
    },
    {
      id:7,
      imageURL: "/General/digikala.svg",
      title: "front-end developer",
      location: "Tehran",
      company: "Digikala",
      summary: "This is a full-time position for a software engineer",
      responsibilities: ["Develop software", "Test software"],
      qualifications: ["Bachelor's degree in Computer Science", "2+ years of experience"],
      salary: 70000,
      date: new Date(2024, 0, Math.floor(Math.random() * 31)),
      
      website:"www.techcorp.com",
    },
    {
      id:8,
      imageURL: "https://webassets.cafebazaar.ir/images/bazaar-logo.svg",
      title: "data scientist",
      location: "remote",
      company: "Cafe Bazaar",
      summary: "We are looking for a data scientist to join our team",
      responsibilities: ["Analyze data", "Create models"],
      qualifications: ["Master's degree in a related field", "Experience with Python"],
      salary: 80000,
      date: new Date(2024, 1, Math.floor(Math.random() * 28)),
      
      website:"www.datasolutions.com",
    },
    {
      id:9,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Iran_Khodro_symbol.svg",
      title: "Mechanical Engineer",
      location: "Shiraz",
      company: "Ikho",
      summary: "Hiring a project manager to oversee software projects",
      responsibilities: ["Manage projects", "Coordinate teams"],
      qualifications: ["Experience in project management", "Knowledge of software development"],
      salary: 75000,
      date: new Date(2024, 2, Math.floor(Math.random() * 31)),
      
      website: "www.projectsinc.com"
    },
    {
      id:10,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/MTN_Irancell_Logo.svg",
      title: "driver",
      location: "Shiraz",
      company: "irancell",
      summary: "Seeking a skilled web developer to build and maintain websites",
      responsibilities: ["Build websites", "Fix bugs"],
      qualifications: ["Experience with JavaScript", "Knowledge of web design principles"],
      salary: 65000,
      date: new Date(2024, 3, Math.floor(Math.random() * 30)),
      
      website: "www.webworks.com"
    },
    {
      id:11,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
      title: "programmer",
      location: "India",
      company: "alibaba",
      summary: "Seeking a skilled web developer to build and maintain websites",
      responsibilities: ["Build websites", "Fix bugs"],
      qualifications: ["Experience with JavaScript", "Knowledge of web design principles"],
      salary: 65000,
      date: new Date(2024, 3, Math.floor(Math.random() * 30)),
      
      website: "www.webworks.com"
    },
    {
      id:12,
      imageURL: "/General/digikala.svg",
      title: "front-end developer",
      location: "Tehran",
      company: "Digikala",
      summary: "Looking for a graphic designer to create engaging designs",
      responsibilities: ["Create designs", "Work with clients"],
      qualifications: ["Experience with design software", "Creative mindset"],
      salary: 60000,
      date: new Date(2024, 4, Math.floor(Math.random() * 31)),
      
      website: "www.designstudio.com"
    },
    
    
  ];
  
  export default jobs;
  