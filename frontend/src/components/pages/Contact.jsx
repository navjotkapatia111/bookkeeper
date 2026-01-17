import React from "react";
import Navbar from "./Navbar";
import { useTheme } from "../context/themecontext";

const Contact = () => {
    const {darkMode} = useTheme()
  return (
    <>
    <Navbar/>
    <div className={`${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-50 text-gray-600"}`} >
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className={`${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        Have questions, suggestions, or feedback? Feel free to reach out. We are
        always open to improving the application and fixing issues.
      </p>

      <div className={`space-y-4 ${darkMode ? "bg-gray-700 text-gray-100" : "text-gray-700 mb-4"}`}>
        <div>
          <p className="font-semibold">Email</p>
          <p>support@bookkeeperapp.com</p>
        </div>

        <div>
          <p className="font-semibold">Phone</p>
          <p>+91 9XXXXXXXXX</p>
        </div>

        <div>
          <p className="font-semibold">Address</p>
          <p>
            India <br />
            Remote / Online Support
          </p>
        </div>
      </div>

      <p className="text-gray-500 mt-8 text-sm">
        This is a project-based application created for learning and development
        purposes.
      </p>
    </div>
    </div>
    </>
  );
};

export default Contact;
