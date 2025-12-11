import React, { useRef, useEffect, useState } from "react";

export default function Info() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === textRef.current) {
          setTextVisible(entry.isIntersecting);
        }
        if (entry.target === imageRef.current) {
          setImageVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div
      id="about"
      className="info-container flex flex-col items-center justify-center min-h-screen px-4 
                 bg-black bg-opacity-50 backdrop-blur-md"
    >
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="goldman-bold text-white text-5xl">
          Hi, I’m Vishal Kumar t 
        </h1>
        <h2 className="goldman-bold text-4xl text-blue-400 animate-bounce-in-out mt-2">
          Full-Stack Developer
        </h2>
      </div>

      {/* Main Content Box */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        
        {/* About Me Text */}
        <div
          ref={textRef}
          className={`about-text flex-1 bg-opacity-60 backdrop-blur-sm rounded-xl p-8 text-gray-300 text-lg goldman-regular
                      ${textVisible ? "slide-in-left" : "opacity-0 -translate-x-52"}`}
        >
          <ul className="list-disc list-inside space-y-2">
            <li>Skilled in React, Node.js, Express, MongoDB, CSS, JS, Python, and GenAI</li>
            <li>Strong in DSA, scored 93% in 12th boards</li>
            <li>Currently in 3rd year of graduation</li>
            <li>Actively seeking internships</li>
            <li>Enjoys teamwork and event management</li>
            <li>Hobbies: Cricket, skating, Blender, video editing, content creation, and videography</li>
          </ul>

            <div className="flex gap-4 mt-10 bg-gray-500 justify-center">
          <a href="https://www.linkedin.com/in/vishal-kumar-dhaneliya-076614392" target="_blank" rel="noreferrer">
            <img src="/linkedin1.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="https://github.com/vishal0702-pixel" target="_blank" rel="noreferrer">
            <img src="/Github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <img src="/Twitter.svg" alt="Twitter" className="w-8 h-8 hover:scale-110 transition-transform"/>
          </a>

          <a href="mailto:vishalcodex072@gmail.com">
            <img src="/Gmail.svg" alt="Email" className="w-8 h-8 hover:scale-110 transition-transform"/>
          </a>
        </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`image-box flex-1 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl
                      ${imageVisible ? "slide-in-right" : "opacity-0 translate-x-52"}`}
        >
          <img 
            src="/man.jpg" 
            alt="Vishal Kumar Dhaneliya" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
