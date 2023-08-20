import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "9a965f60-7a39-4850-a5e3-6d3d46365eab",
      title: "Resiku",
      category: "Web Application",
      img: "project-images/resiku-thumb.webp",
      publishDate: "Aug 25, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Build Web Applications with ES6, Custom Element, NPM, Module Bundler, and AJAX.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Resiku Homepage",
          img: "project-images/resiku-1.webp",
        },
        {
          id: uuidv4(),
          title: "Resiku AWB Check",
          img: "project-images/resiku-2.webp",
        },
        {
          id: uuidv4(),
          title: "Resiku Footer",
          img: "project-images/resiku-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Dicoding Indonesia",
        },
        {
          id: uuidv4(),
          details: "Belajar Fundamental Front-End Web Development Course",
        },
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "NPM"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Resiku is a web application for checking Airway Bills for goods sent via Indonesian expeditions. Seeing the enthusiasm for sending packages, Resiku is here to help you in checking and tracking receipts. Fast Results, Accurate & Complete Status.",
        },
        {
          id: uuidv4(),
          details: "Here are the criteria for project submission:",
        },
        {
          id: uuidv4(),
          details:
            "Using standard ES6 syntax in writing JavaScript code in the project created, Using Webpack as a module bundler (production stage), Utilize Webpack as an environment in project development (development stage), Utilize APIs by using AJAX concepts in displaying dynamic data in the created application, You are free to choose the theme of the application you want to create, except for the Club Finder theme/Sports Club Search, Football, or Dicoding Books.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Demo",
          url: "https://resiku.vercel.app",
        },
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/resiku",
        },
      ],
    },
    {
      id: "64aa900d-a668-4d28-98a0-5c0538f7be80",
      title: "Restopedia",
      category: "Web Application",
      img: "project-images/restopedia-thumb.webp",
      publishDate: "Dec 23, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Build Restaurant Progressive Web Applications + Testing and Optimized",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Restopedia Homepage",
          img: "project-images/restopedia-1.webp",
        },
        {
          id: uuidv4(),
          title: "Restopedia Restaurant Listing",
          img: "project-images/restopedia-2.webp",
        },
        {
          id: uuidv4(),
          title: "Restopedia Favorite Restaurant",
          img: "project-images/restopedia-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Dicoding Indonesia",
        },
        {
          id: uuidv4(),
          details: "Belajar Fundamental Front-End Web Development Course",
        },
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.JS"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Restopedia is a A website to find recommended restaurant easy and fast. This website is submission for Dicoding's Course.",
        },
        {
          id: uuidv4(),
          details: "Here are the criteria for project submission:",
        },
        {
          id: uuidv4(),
          details:
            "Implement integration tests for restaurant likes and dislikes, Implement End to End Test, Image optimization, Bundle optimization, display responsibility, accessibility on the website and so on.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Demo",
          url: "https://restopedia-chi.vercel.app/",
        },
      ],
    },
    {
      id: "6ccad735-7379-4efa-ab57-aceed7791f65",
      title: "Castello Wedding",
      category: "UI/UX Design",
      img: "project-images/castello-wedding-thumb.webp",
      publishDate: "Mar 31, 2021",
      tag: "UI / UX",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Wedding Venue App UI Design",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Castello Wedding Splash Screen",
          img: "project-images/castello-wedding-1.webp",
        },
        {
          id: uuidv4(),
          title: "Castello Wedding Homepage",
          img: "project-images/castello-wedding-2.webp",
        },
        {
          id: uuidv4(),
          title: "Castello Wedding Venue Detail",
          img: "project-images/castello-wedding-3.webp",
        },
        {
          id: uuidv4(),
          title: "Castello Wedding Select Date",
          img: "project-images/castello-wedding-4.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Human and Computer Interaction Course",
        },
      ],
      technologies: ["Figma"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is an UI/UX Design application to search and book wedding venues. Created for mid term exam of Human and Computer Interaction course at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Dribbble",
          url: "https://dribbble.com/shots/19577278-Castello-Wedding-Wedding-Venue-App",
        },
      ],
    },
    {
      id: "1a55a98e-6e4c-4e09-978f-3f459ac29c68",
      title: "Bluejack Bookstore",
      category: "Desktop Application",
      img: "project-images/bluejack-bookstore-thumb.webp",
      publishDate: "June 20, 2022",
      tag: "Desktop / GUI",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Create Desktop Java GUI Applications using JavaFX for Student's Lab Project",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Entity Relationship Diagram",
          img: "project-images/bluejack-bookstore-1.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Login",
          img: "project-images/bluejack-bookstore-2.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Register",
          img: "project-images/bluejack-bookstore-3.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Homepage",
          img: "project-images/bluejack-bookstore-4.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Buy Book",
          img: "project-images/bluejack-bookstore-5.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Transaction History",
          img: "project-images/bluejack-bookstore-6.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Manage Book",
          img: "project-images/bluejack-bookstore-7.webp",
        },
        {
          id: uuidv4(),
          title: "Bluejack Bookstore Manage Genre",
          img: "project-images/bluejack-bookstore-8.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center",
        },
        {
          id: uuidv4(),
          details: "Business Application Development Course",
        },
      ],
      technologies: ["Eclipse", "Java", "JavaFX", "mysql-connector"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Bluejack Bookstore is a store that sells books of various genres. To manage all the transactions and manage system of the book, Bluejack Bookstore’s owner asked you to create the program for the store. The program should be made using Java Programming Language.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/bluejack-bookstore",
        },
      ],
    },
    {
      id: "49541d69-3cd8-4a88-85c4-e810647a23ba",
      title: "Yamada",
      category: "Web Application",
      img: "project-images/yamada-thumb.webp",
      publishDate: "June 17, 2022",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Create a website for motorcycle shop",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Yamada Homepage",
          img: "project-images/yamada-1.webp",
        },
        {
          id: uuidv4(),
          title: "Yamada Showcase",
          img: "project-images/yamada-2.webp",
        },
        {
          id: uuidv4(),
          title: "Yamada Footer",
          img: "project-images/yamada-3.webp",
        },
        {
          id: uuidv4(),
          title: "Yamada Motorcycle Listing",
          img: "project-images/yamada-4.webp",
        },
        {
          id: uuidv4(),
          title: "Yamada Sign Up",
          img: "project-images/yamada-5.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Human and Computer Interaction Lab Course",
        },
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Yamada is a web application for motorcycle shop, created for lab assignment of Human and Computer Interaction",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Demo",
          url: "https://yamada.vercel.app/",
        },
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/Yamada",
        },
      ],
    },
    {
      id: "78defe6e-d7bb-4c9a-b0d0-9e34275a6f88",
      title: "FArbucks",
      category: "Web Application",
      img: "project-images/farbucks-thumb.webp",
      publishDate: "June 13, 2022",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Create a website for coffee store",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "FArbucks Homepage",
          img: "project-images/farbucks-1.webp",
        },
        {
          id: uuidv4(),
          title: "FArbucks Footer",
          img: "project-images/farbucks-2.webp",
        },
        {
          id: uuidv4(),
          title: "FArbucks Coffee Listing",
          img: "project-images/farbucks-3.webp",
        },
        {
          id: uuidv4(),
          title: "FArbucks Events",
          img: "project-images/farbucks-4.webp",
        },
        {
          id: uuidv4(),
          title: "FArbucks FAQ",
          img: "project-images/farbucks-5.webp",
        },
        {
          id: uuidv4(),
          title: "FArbucks Become a Member",
          img: "project-images/farbucks-6.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Human and Computer Interaction Lab Course",
        },
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "FArbucks is a coffee store website that was founded in December 2021. Its branches are spread all over the world. FArbucks provides several types of coffee and held events.",
        },
        {
          id: uuidv4(),
          details:
            "Because FArbucks has been around for a long time, FArbucks plans to change the appearance of its website to provide a new atmosphere for users. First, FArbucks needs to create a website prototype and company website that represents the FArbucks image. With this website, FArbucks hopes to improve service to its customers. FArbucks entrusts you as a web designer to design their website prototype and create a company website.",
        },
        {
          id: uuidv4(),
          details: "The requirements from FArbucks are described below:",
        },
        {
          id: uuidv4(),
          details:
            "FArbucks wants you to build the website attractive, appealing and fully functional, and make sure the website is responsive. The website should be accessible using a mobile phone in a perfect way. To achieve that, use 5 kinds of CSS property and JavaScript. Use Meta viewport tag and media screen rule that will be applied if the screen is below 810px screen width.",
        },
        {
          id: uuidv4(),
          details:
            "The website consists of five main pages. They are Home, Coffee, Events, About Us, and Register.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Demo",
          url: "https://farbucks.vercel.app",
        },
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/FArbucks",
        },
      ],
    },
    {
      id: "9b4f7f21-ab0c-46bd-a6d2-51759e56741b",
      title: "Chen Buffet",
      category: "Web Application",
      img: "project-images/chen-buffet-thumb.webp",
      publishDate: "Feb 20, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Create A Laravel web application for restaurant app",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Chen Buffet Manage Transaction",
          img: "project-images/chen-buffet-1.webp",
        },
        {
          id: uuidv4(),
          title: "Chen Buffet Manage Food",
          img: "project-images/chen-buffet-2.webp",
        },
        {
          id: uuidv4(),
          title: "Chen Buffet Insert Transaction",
          img: "project-images/chen-buffet-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["Laravel"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/chen-buffet",
        },
      ],
    },
    {
      id: "cee8482b-d45c-461e-b1df-3d933426e178",
      title: "imbagram",
      category: "Web Application",
      img: "project-images/imbagram-thumb.webp",
      publishDate: "Feb 21, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "A PHP web application that imitates Instagram",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "imbagram Login",
          img: "project-images/imbagram-1.webp",
        },
        {
          id: uuidv4(),
          title: "imbagram Register",
          img: "project-images/imbagram-2.webp",
        },
        {
          id: uuidv4(),
          title: "imbagram Home",
          img: "project-images/imbagram-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["PHP", "mysql"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/imbagram",
        },
      ],
    },
    {
      id: "2a3b6508-7a8c-4824-bea3-412f47bbf905",
      title: "KAdrive",
      category: "Web Application",
      img: "project-images/kadrive-thumb.webp",
      publishDate: "Feb 22, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "A PHP web application that imitates Google Drive",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "KAdrive Login",
          img: "project-images/kadrive-1.webp",
        },
        {
          id: uuidv4(),
          title: "KAdrive Register",
          img: "project-images/kadrive-2.webp",
        },
        {
          id: uuidv4(),
          title: "KAdrive Home",
          img: "project-images/kadrive-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["PHP", "mysql"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/KAdrive",
        },
      ],
    },
    {
      id: "9c245aa1-4031-4f9a-9d86-d9adf8495b98",
      title: "legacyArT",
      category: "Web Application",
      img: "project-images/legacyart-thumb.webp",
      publishDate: "Feb 23, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "A Laravel web application for Discover, Collect, and Sell Extraordinary NFTs.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "legacyArT Login",
          img: "project-images/legacyart-1.webp",
        },
        {
          id: uuidv4(),
          title: "legacyArT Register",
          img: "project-images/legacyart-2.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["Laravel"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/legacyArT",
        },
      ],
    },
    {
      id: "0adcb36d-73ff-481f-b5d6-0acb294963f4",
      title: "PHinterest",
      category: "Web Application",
      img: "project-images/phinterest-thumb.webp",
      publishDate: "Feb 26, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "A PHP web application that imitates Google Drive",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "PHinterest Login",
          img: "project-images/phinterest-1.webp",
        },
        {
          id: uuidv4(),
          title: "PHinterest Register",
          img: "project-images/phinterest-2.webp",
        },
        {
          id: uuidv4(),
          title: "PHinterest Home",
          img: "project-images/phinterest-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["PHP", "mysql"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/PHinterest",
        },
      ],
    },
    {
      id: "0bdf7754-1139-41ef-8cfe-22e29671ccd0",
      title: "Pokemon Showdown",
      category: "Desktop Application",
      img: "project-images/pokemon-showdown-thumb.webp",
      publishDate: "June 20, 2022",
      tag: "Desktop / GUI",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Create Desktop Java GUI Applications using JavaFX for Student's Lab Project",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Pokemon Showdown Login",
          img: "project-images/pokemon-showdown-1.webp",
        },
        {
          id: uuidv4(),
          title: "Pokemon Showdown Launcher",
          img: "project-images/pokemon-showdown-2.webp",
        },
        {
          id: uuidv4(),
          title: "Pokemon Showdown Home",
          img: "project-images/pokemon-showdown-3.webp",
        },
        {
          id: uuidv4(),
          title: "Pokemon Showdown Homepage",
          img: "project-images/pokemon-showdown-4.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["Eclipse", "Java", "JavaFX", "mysql-connector"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/pokemon-showdown",
        },
      ],
    },
    {
      id: "faf27360-96a2-414c-938f-ccbc89adbd25",
      title: "STEAM",
      category: "Web Application",
      img: "project-images/steam-thumb.webp",
      publishDate: "Feb 27, 2022",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "A Laravel web application that imitates Steam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "steam Home",
          img: "project-images/steam-1.webp",
        },
        {
          id: uuidv4(),
          title: "steam Special Offers",
          img: "project-images/steam-2.webp",
        },
        {
          id: uuidv4(),
          title: "steam Avatars",
          img: "project-images/steam-3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "Software Laboratory Center BINUS University",
        },
        {
          id: uuidv4(),
          details: "Core Training",
        },
      ],
      technologies: ["Laravel"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is one of Software Laboratory Center BINUS University Core Training Case.",
        },
        {
          id: uuidv4(),
          details:
            "Core training is an intensive training for 30 days, where every day trainees are taught the basics and given assignments from 7 am to 6 pm as a qualification and preparation to become lab assistants at BINUS University.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/steam",
        },
      ],
    },
    {
      id: "44b524f5-01af-4c47-9416-b12110dadbc1",
      title: "Travelicious",
      category: "UI/UX Design",
      img: "project-images/travelicious-thumb.webp",
      publishDate: "Mar 31, 2021",
      tag: "UI / UX",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Travel App UI Design",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "Travelicious Splash Screen",
          img: "project-images/travelicious-1.webp",
        },
        {
          id: uuidv4(),
          title: "Travelicious Homepage",
          img: "project-images/travelicious-2.webp",
        },
        {
          id: uuidv4(),
          title: "Travelicious Place Detail",
          img: "project-images/travelicious-3.webp",
        },
        {
          id: uuidv4(),
          title: "Travelicious Articles",
          img: "project-images/travelicious-4.webp",
        },
        {
          id: uuidv4(),
          title: "Travelicious Saved Places",
          img: "project-images/travelicious-5.webp",
        },
        {
          id: uuidv4(),
          title: "Travelicious Settings",
          img: "project-images/travelicious-6.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Human and Computer Interaction Course",
        },
      ],
      technologies: ["Figma"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This is my second exploration, which is travel app. I made this for university final exam.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Dribbble",
          url: "https://dribbble.com/shots/19577287-Travelicious-Travel-App",
        },
      ],
    },
    {
      id: "7f84c464-1f72-495e-904f-a08fcbcfb7cb",
      title: "LelanginAja",
      category: "Web Application",
      img: "project-images/lelanginaja-thumb.webp",
      publishDate: "April 29, 2023",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Create an application using software engineer practices",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "LelanginAja Homepage",
          img: "project-images/lelanginaja-1.webp",
        },
        {
          id: uuidv4(),
          title: "LelanginAja Product Detail",
          img: "project-images/lelanginaja-2.webp",
        },
        {
          id: uuidv4(),
          title: "LelanginAja Product Listing",
          img: "project-images/lelanginaja-3.webp",
        },
        {
          id: uuidv4(),
          title: "LelanginAja Login",
          img: "project-images/lelanginaja-4.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Software Engineering Course",
        },
      ],
      technologies: ["Laravel"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "LelanginAja is a dynamic auction marketplace where users can buy and sell products through engaging bidding experiences.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/LelanginAja",
        },
      ],
    },
    {
      id: "5a9e2a30-44d5-4744-851a-05875f9ba387",
      title: "KpopZstation",
      category: "Web Application",
      img: "project-images/kpopzstation-thumb.webp",
      publishDate: "June 17, 2023",
      tag: "Web / Backend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Create an application using Domain Driven Design practices",
      techTitle: "Tools & Technologies",
      detailsTitle: "Details",
      linkTitle: "Links",
      projectImages: [
        {
          id: uuidv4(),
          title: "KpopZstation Login",
          img: "project-images/kpopzstation-1.webp",
        },
        {
          id: uuidv4(),
          title: "KpopZstation Artist",
          img: "project-images/kpopzstation-2.webp",
        },
        {
          id: uuidv4(),
          title: "KpopZstation Shopping Cart",
          img: "project-images/kpopzstation-3.webp",
        },
        {
          id: uuidv4(),
          title: "KpopZstation Transaction History",
          img: "project-images/kpopzstation-4.webp",
        },
        {
          id: uuidv4(),
          title: "KpopZstation Update Profile",
          img: "project-images/kpopzstation-5.webp",
        },
        {
          id: uuidv4(),
          title: "KpopZstation Album Details",
          img: "project-images/kpopzstation-6.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          details: "BINUS University",
        },
        {
          id: uuidv4(),
          details: "Pattern Software Design Lab Course",
        },
      ],
      technologies: ["ASP.NET", "Bootstrap"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "KpopZtation is a K-pop album shop in Indonesia. To expand its business, KpopZtation wants to create a website for their shop. In that website, people can find information about the K-pop album and order it. This website enables the customers to know what is inside KpopZtation.",
        },
        {
          id: uuidv4(),
          details:
            "As a web developer, we are asked to create a website using ASP.NET for this online shop. We are also required to use Domain Driven Design method to develop the website.",
        },
      ],
      links: [
        {
          id: uuidv4(),
          title: "Github",
          url: "https://github.com/ficopang/KpopZstation",
        },
      ],
    },
  ],
  // clientsHeading: "Some of the brands I worked with",
  // clients: [
  //   {
  //     id: uuidv4(),
  //     title: "Amazon",
  //     img: "brands/amazon_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Sony",
  //     img: "brands/sony_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Adidas",
  //     img: "brands/adidas_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "FILA",
  //     img: "brands/fila_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "NB",
  //     img: "brands/nb_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "SAMSUNG",
  //     img: "brands/samsung_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "CANON",
  //     img: "brands/canon_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "PUMA",
  //     img: "brands/puma_gray.png",
  //   },
  // ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Hi! I am a Computer Science student at BINUS University with a passion for technology. I have completed a front-end web bootcamp and have experience as a laboratory teaching assistant. I am also an iOS Foundation participant at the Apple Developer Academy, Freshmen Leader and a Scholarship Mentor at BINUS University. In my free time, I am an activist of Sports, Art, and Internal Relation at KMBD BINUS University. I am eager to continue learning and growing in the field of computer science. Take a look at my work or get in touch!",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "GithubIcon",
      url: "https://github.com/ficopang",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "InstagramIcon",
      url: "https://instagram.com/ficopang",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "LinkedinIcon",
      url: "https://linkedin.com/in/ficopangestu",
    },
    {
      id: uuidv4(),
      name: "Youtube",
      icon: "YoutubeIcon",
      url: "https://youtube.com/@ficopangestu",
    },
  ],
  // categories: [
  //   {
  //     id: uuidv4(),
  //     value: "web",
  //     name: "Web Application",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "desktop",
  //     name: "Desktop Application",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "mobile",
  //     name: "Mobile Applicaiton",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "ui-ux",
  //     name: "UI/UX Design",
  //   },
  // ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
