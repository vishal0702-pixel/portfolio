import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function About() {
  const tech = [
    {
      knowledge: "FRONTEND",
      desc: "I have experience building full-fledged, responsive, and modern websites using React, HTML, and Tailwind CSS...",
    },
    {
      knowledge: "BACKEND",
      desc: "I have experience working with technologies including Node.js, Express, MongoDB, and Docker...",
    },
    {
      knowledge: "FULL-STACK",
      desc: "I’m a full-stack developer skilled in React, HTML, Tailwind, Node, Express, MongoDB, Docker + GenAI...",
    },
    {
      knowledge: "TEAM-WORK",
      desc: "I’m a strong team player who collaborates effectively, communicates clearly, and enjoys solving problems...",
    },
    {
      knowledge: "HOBBIES",
      desc: "Outside of tech, I’m passionate about cricket, video editing, Blender, content-making, and event management...",
    },
  ];

  return (  <> 
  <div>   <h1 className="project-heading goldman-bold text-6xl md:text-7xl mb-12 flex justify-center"
        style={{
          WebkitTextStroke: "2px black",
          color: "white",
        }}>
  Expertise
</h1></div>
    <div className="relative w-full flex justify-center py-20">

      {/* Center Vertical White Line */}
      <div className="absolute top-0 bottom-0 w-[3px] bg-white"></div>

      <div className="flex flex-col gap-20 w-full max-w-5xl">
        {tech.map((item, index) => (
          <ZigZagCard key={index} item={item} index={index} />
        ))}
      </div>
    </div></>
  );
}

function ZigZagCard({ item, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // left or right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`
        w-1/2 p-6 rounded-xl shadow-xl bg-gray-900 text-white relative 
        ${index % 2 === 0 ? "self-start mr-auto" : "self-end ml-auto"}
      `}
    >
      <h2 className="text-2xl font-bold mb-2">{item.knowledge}</h2>
      <p className="text-gray-300">{item.desc}</p>

      {/* Dot connecting to vertical line */}
      <div
        className={`
          absolute top-1/2 transform -translate-y-1/2 
          w-4 h-4 bg-white rounded-full
          ${index % 2 === 0 ? "-right-8" : "-left-8"}
        `}
      ></div>
    </motion.div>
  );
}
