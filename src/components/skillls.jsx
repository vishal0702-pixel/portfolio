import React from "react";

export default function Skillcard() {
  const skillsection = [
    { skill: "C++", img: "/C++.svg", knowledge: "75%" },
    { skill: "React.JS", img: "/react.svg", knowledge: "80%" },
    { skill: "Node.JS", img: "/nodedotjs.svg", knowledge: "80%" },
    { skill: "JavaScript", img: "/js.svg", knowledge: "80%" },
    { skill: "HTML", img: "/HTML.svg", knowledge: "90%" },
    { skill: "TailwindCSS", img: "/tailwindcss.svg", knowledge: "85%" },
    { skill: "MongoDB", img: "/mongodb.svg", knowledge: "80%" },
    { skill: "Python", img: "/python.svg", knowledge: "70%" },
    { skill: "DSA", img: "/dsa.jpg", knowledge: "75%" },
  ];
  

  return (
    <div id="skills" className="w-full py-20 overflow-hidden relative">

      <h1 className="skills-heading goldman-bold text-center text-white text-6xl mb-10">
  SKILLS
</h1>


      {/* FADE EFFECT LEFT */}
      <div className="fade-left"></div>

      {/* FADE EFFECT RIGHT */}
      <div className="fade-right"></div>

      <div className="scroll-container ">
        <div className="scroll-track mt-3">
          {skillsection.concat(skillsection).map((value, i) => (
            <div key={i} className="skillcard">
              <img src={value.img} alt="" className="skill-img" />
              <h3 className="skill-name">{value.skill}</h3>
              <p className="skill-level">{value.knowledge}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
