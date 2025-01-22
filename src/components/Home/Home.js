import React from 'react';
import MyImagepop from '../../Assets/images/MyImagepop.jpg';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center">
      {/* Container for the content */}
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Profile Image */}
        <div className="flex items-center justify-center">
          <img
            src={MyImagepop} // profile image
            alt="Profile"
            className="rounded-full w-72 h-100 lg:w-96 lg:h-[50rem] shadow-lg" // Updated size
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hello, I'm Snehal Pujari</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
            A Passionate Web Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I specialize in building interactive and user-friendly web applications. I enjoy
            transforming ideas into reality using the latest web technologies.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
