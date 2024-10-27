//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import image from "../styles/projects/disruptive.jpg";

export const userinfo = {
  logoText: "Dejan Malidza", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "dejanmalidza@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "645000310", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+381", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/dejan-malidza/",
      icon: faLinkedinIn,
    },
    {
      type: "instagram",
      link: "https://www.instagram.com/dejanmalidza/",
      icon: faInstagram,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hey there, I am Dejan.",
    subtitle:
      "I am a Consultant for the SAP Business One Information System, which represents an affordable ERP solution for managing entire company. I have over 6 years of experience in Finance, IT, Project Management, and Programming. Additionally, in my spare time, I work as a part-time Front End Developer.",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Project Management", // eg.frontend, backend, devops etc
      skills: ["Good Organisation", "Comprehension", "Adaptive To Changes"], //eg. react, html, python etc.
    },
    {
      category: "Frontend",
      skills: ["JavaScript", "React", "Next.js", "Wordpress"],
    },
    {
      category: "Finance",
      skills: [
        "Presentation Skills",
        "Accounting Skills",
        "Financial Literacy Skills",
      ],
    },
    {
      category: "ERP Consultant",
      skills: ["SAP Business One", "SQL Query", "Crystal Reports", "Power BI"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "I believe that I am a highly enterprising individual who strives to maintain a positive outlook, even in the midst of challenging circumstances. I place great importance on building strong interpersonal relationships and consider myself punctual and detail-oriented. When given the opportunity and trust, I am confident in my ability to make the most of it and achieve great results. I am committed to performing my duties to the best of my ability and am always willing to lend an ear to anyone, whether they have personal or professional concerns. Ultimately, I believe that success is best achieved through teamwork and collaboration, and that a supportive network of individuals can make any project a success.",
    resume: "/", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "Oct 19 - Oct 20", //timespan
        title: "Master economist", //eg. BTech in Compuster Engineering
        organization:
          "Faculty of Economics in Subotica – Department of the Faculty in Novi Sad", //eg. VJTI, Mumbai
        description:
          "specialization: Business Information Systems (average grade 8.71)", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "Sep 14 - Sep 18",
        title: "Bachelor of Economics and Financial Service Officer",
        organization: "University of Defense, Military Academy in Belgrade",
        description: "specialization: Public Finance (average grade 9.67)",
      },
      {
        time: "Sep 10 - Jul 14",
        title: "Economist",
        organization: "School of Economics and Trade in Kikinda",
        description: "specialization: Financial administrator ",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Ministry of Defense", //company name eg.Microsoft
        companylogo:
          "https://pistaljka.rs/public/galleries/249-lead-photo-1342522620-ministarstvo-odbrane.jpg", //companylogo
        position: "Financial Management Officer", //post you held eg.Senior SDE
        time: "Sep 2018 - April 2022", //timespan
        description:
          "Continuous control and audit of financial and material operations; Control of the accuracy and correctness documentation related to personal income; Responsible for the legality of spending money in the unit Implementation and control of public procurement procedures; Preparation of periodic and annual financial and other reports; Continuous control and coordination with people in charge of material affairs of which I am the holder.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Carmine Cloak",
        companylogo:
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHAFzXpdnmnYg/company-logo_200_200/0/1639503969267?e=2147483647&v=beta&t=65G0mGEYUnV170uAbHfP0rcYV49OefuvclyRRSD6AVw",
        position: "IT Project Manager and FE developer",
        time: "April 2022 - June 2023",
        description: `Management of all projects in the field of web design and programming in the company; Making management and financial decisions and cooperation with clients; Project implementation monitoring and use of the following tools: GitHub, GitHubDesktop, Jira, Vercel, Trello, GA4, GTM; Programming and usage: React, Next.js, Wordpress, JavaScript; Good knowledge of: Node.js, PHP, MongoDB, SEO tools.`,
      },
      {
        company: "B-ONE Solutions",
        companylogo: image.src,
        position: "SAP Business One Consultant",
        time: "Oktober 2023 - today",
        description:
          "Working as a consultant for all modules of the SAP B1 information system, which represents a comprehensive ERP solution for companies with up to 1.000 users; Handling support and maintenance tasks for the SAP B1 system for existing users; Participating in the processes of software implementation and integration according to the needs of new users, performing testing and employee training.",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
