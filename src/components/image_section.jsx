import React from "react";

const scrolltosection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Profilepic() {
  return (
    <div
      id="home"
      className=" pt-30 flex flex-col md:flex-row justify-center items-center container mx-auto min-h-[90vh] gap-10 px-4 md:px-10 relative"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="goldman-bold pb-2 text-white text-4xl sm:text-5xl md:text-6xl">
          Hello, I'm Vishal
        </h1>
        <h3 className="goldman-regular text-gray-300 text-base sm:text-lg md:text-xl mt-4">
          Hi, I'm Vishal. I build responsive and interactive web applications using React, Tailwind CSS, Node.js, and MongoDB. I’m passionate about creating clean and efficient code that solves real-world problems.
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="rounded-full w-full sm:w-28 h-10 border-2 text-white text-lg sm:text-xl goldman bg-black 
                             transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black">
            MY CV
          </button>

          <button
            onClick={() => {
              scrolltosection("projects");
            }}
            className="rounded-full w-full sm:w-28 h-10 border-2 text-black text-lg sm:text-xl goldman bg-white 
                             transition-all duration-300 transform hover:scale-110 hover:bg-black hover:text-white"
          >
            PROJECT
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/vishal-kumar-dhaneliya-076614392" target="_blank" rel="noreferrer">
            <img src="/linkedin1.svg" alt="LinkedIn" className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="https://github.com/vishal0702-pixel" target="_blank" rel="noreferrer">
            <img src="/Github.svg" alt="GitHub" className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <img src="/Twitter.svg" alt="Twitter" className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="mailto:vishalcodex072@gmail.com">
            <img src="/Gmail.svg" alt="Email" className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-110 transition-transform"/>
          </a>
        </div>
      </div>

      {/* Profile Picture + Ring */}
      <div className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
        <div className="profile-ring w-full h-full border-4 border-white rounded-full absolute animate-ping-slow"></div>
        <img
          src="/profilepic.jpeg"
          alt="Profile"
          className="absolute w-[220px] sm:w-[300px] md:w-[350px] h-[220px] sm:h-[300px] md:h-[350px] rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white mb-2 text-sm">Scroll down</span>
        <div className="w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-white rotate-45 animate-bounce"></div>
      </div>
    </div>
  );
}
