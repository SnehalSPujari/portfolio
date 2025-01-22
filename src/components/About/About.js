import React from 'react';
import MyImagepop from '../../Assets/images/MyImagepop.jpg';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center">
      {/* Container */}
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-400 text-lg mb-6">
            Hi, I'm Snehal Pujari, a passionate web developer who loves creating engaging and 
            intuitive digital experiences. With a strong foundation in modern web technologies 
            like React, Tailwind CSS, and JavaScript, I strive to craft solutions that not only 
            look great but also perform seamlessly.
          </p>
          <p className="text-gray-400 text-lg mb-6">
            Beyond coding, I enjoy exploring new technologies, collaborating with like-minded 
            professionals, and pushing the boundaries of web development. When I'm not 
            working, I love writing, drawing, listening songs, dancing, travelling, shopping, long drive, foodie.
          </p>
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="flex items-center justify-center">
          <img
            src={MyImagepop} // Replace with your about page image
            alt="About image"
            className="rounded-lg w-80 h-70 lg:w-[28rem] lg:h-[48rem] shadow-lg" // Updated size
          />
        </div>
      </div>
    </div>
  );
};

export default About;
