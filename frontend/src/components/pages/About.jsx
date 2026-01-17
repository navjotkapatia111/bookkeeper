import React from "react";
import Navbar from "./Navbar";
import { useTheme } from "../context/themecontext";

const About = () => {

    const {darkMode} = useTheme()
  return (
    <>
    <Navbar/>
    <div className={`${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-50 text-gray-600"}`} >
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">About BookKeeper</h1>

      <p className={`${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        BookKeeper is a simple and practical book management web application
        built using the MERN stack. The goal of this app is to help users
        efficiently store, manage, and track books with their essential details
        in one centralized place.
      </p>

      <p className={`${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        Users can add books along with information such as title, author, price,
        publication date, and other relevant details. The application focuses on
        clean UI, smooth user experience, and reliable backend operations.
      </p>

      <p className={`${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        This project is built to demonstrate real-world CRUD functionality,
        proper frontend-backend integration, and scalable application structure.
        It is designed for learning, practice, and real usage scenarios.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Tech Stack</h2>
      <ul className={`${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        <li>MongoDB for database</li>
        <li>Express.js for backend APIs</li>
        <li>React.js for frontend UI</li>
        <li>Node.js for server-side logic</li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default About;
