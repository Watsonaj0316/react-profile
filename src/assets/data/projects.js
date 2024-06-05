import weatherImage from '../../images/IMG_7386.jpg';
import blogImage from '../../images/IMG_7157.jpg';
import apiImage from '../../images/IMG_8251.jpg';

export const projects = [
  {
    name: "Weather App",
    thumbnail: {
      src: weatherImage,
      alt: "Weather Dashboard"
    },
    description: "This app shows the forecast for the current and next 5 days."
  },
  {
    name: "The Tech Blog",
    thumbnail: {
      src: blogImage,
      alt: "The Tech Blog"
    },
    description: "This app is a simple blogging platform for the tech world."
  },
  {
    name: "Social Network Api",
    thumbnail: {
      src: apiImage,
      alt: "Social Network Api"
    },
    description: "NoSQL Social Network API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database."
  }
];
