import React, { useEffect, useRef, useState } from "react";

export default function Footer() {


  return (
    <div
  
      className="w-full py-12 flex flex-col items-center justify-center
                  bg-white bg-opacity-10 backdrop-blur-2xl rounded-t-3xl
                  shadow-2xl transition-all duration-1000">
      <p className="text-black font-serif text-xl md:text-2xl font-semibold mb-4 text-center">
        Thank you for visiting my portfolio! 
      </p>

      <div className="flex gap-6 mb-6">
        <a href="https://www.linkedin.com/in/vishal-kumar-dhaneliya-076614392" target="_blank" rel="noreferrer">
          <img src="/linkedin1.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-125 transition-transform"/>
        </a>
        <a href="https://github.com/vishal0702-pixel" target="_blank" rel="noreferrer">
          <img src="/Github.svg" alt="GitHub" className="w-8 h-8 hover:scale-125 transition-transform"/>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <img src="/Twitter.svg" alt="Twitter" className="w-8 h-8 hover:scale-125 transition-transform"/>
        </a>
        <a href="mailto:vishalcodex072@gmail.com">
          <img src="/Gmail.svg" alt="Email" className="w-8 h-8 hover:scale-125 transition-transform"/>
        </a>
      </div>

      <p className="text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Vishal Kumar. All rights reserved.
      </p>
    </div>
  );
}
