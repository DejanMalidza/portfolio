// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
// import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
// import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Haelf', //project name
        description: 'Haelf is all about personalized, clinically-proven treatments backed by science. With their approach, they strive to empower broader wellbeing by opening the floor to talk about things that aren‘t easy and potentially embarrassing.', //project description
        githubLink: '', //github repo link
        projectLink: 'https://haelf.com', //deployed project link
        tech: ['Next.js', 'Node.js', 'MongoDB'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'Paelf - in process',
        description: 'With their approach, licensed vet doctors analyze the medical information around pet, diagnose their symptoms and then create & prescribe custom treatment plans specifically for pets. While scientific research is integral to each treatment they provide, their utilitarian platform ensures pet gains the best possible health with ease.',
        githubLink: '/',
        projectLink: 'https://paelf.com',
        tech: ['Next.js', 'React', 'SEO'],
        photo: [PROJECT2_1, PROJECT2_2],
    },
    {
        name: 'Disruptive Gate - in process',
        description: 'An instance for our regular site in wordpress https://www.disruptivegate.com/ only this time with the application of new technologies. The site is under construction, and will display part of the NFT museum we have already created, with an emphasis on NFT transactions, advertising, rankings, and auctions.',
        githubLink: '/',
        projectLink: 'https://project-lkgq21svl-haelfproject-gmailcom.vercel.app/',
        tech: ['Web3', 'MetaMask', 'NFT'],
        photo: [PROJECT3_1, PROJECT3_2],
    },
]
