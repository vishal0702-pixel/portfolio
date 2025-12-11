import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "QUEHUB",
    desc: "Platform where you prepare for exams with PYQ, notes, video solutions and NEO AI.",
    domain: "Full-Stack",
    img: "quehub.png",
    live: "https://quehub-frontend.vercel.app",
    github: "https://github.com/vishal0702-pixel/quehub",
  },
  {
    title: "Swiggy-Clone",
    desc: "Swiggy clone website using live API.",
    domain: "React Project",
    img: "swiggy.png",
    live: "https://swiggyclone.vercel.app",
    github: "https://github.com/vishal0702-pixel/Swiggy-Clone",
  },
  {
    title: "NOISE",
    desc: "Music platform using HTML, CSS and JS.",
    domain: "Basic Web Project",
    img: "noise.png",
    live: "#",
    github: "#",
  },
  {
    title: "Tic Tac Toe",
    desc: "Small game project",
    domain: "Basic Web Project",
    img: "https://play-lh.googleusercontent.com/EUgRlCOH_jwtW39SaG7XeKq8pJsQfKkZB4MYED18npdsKeRZDmN9xVsSV3nbpoJGgIU=w526-h296-rw",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    gsap.set(cards, { height: 480 });

    function updateCards(activeIndex) {
      cards.forEach((c, i) => {
        if (i === activeIndex) {
          gsap.to(c, { 
            scale: 1, 
            opacity: 1, 
            filter: "blur(0px)", 
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)", 
            duration: 0.4 
          });
        } else {
          gsap.to(c, { 
            scale: 0.9, 
            opacity: 0.5, 
            filter: "blur(5px)", 
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)", 
            duration: 0.4 
          });
        }
      });
    }

    updateCards(0);

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "top 30%",
        scrub: 0.5,
        onEnter: () => updateCards(i),
        onEnterBack: () => updateCards(i),
      });
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: headingRef.current,
      pinSpacing: false,
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <div id="projects" className="bg-black mb-20">
      <section ref={containerRef} className="relative py-12">
        
        <h1
          ref={headingRef}
          className="project-heading goldman-bold text-6xl md:text-7xl mb-12 flex justify-center"
          style={{
            WebkitTextStroke: "2px black",
            color: "white",
          }}
        >
          PROJECTS
        </h1>

        <div className="project-stack flex flex-col gap-24">
          {projects.map((p, id) => (
            <div
              key={id}
              className="project-card bg-[#111] text-white w-[70%] mx-auto rounded-2xl p-10 flex gap-10 transition-all duration-300"
              style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.3)", position: "relative" }}
            >
              {/* TEXT SECTION */}
              <div className="flex flex-col justify-center w-1/2">
                <h1 className="text-4xl goldman-bold">{p.domain}</h1>
                <h2 className="text-3xl goldman-bold">{p.title}</h2>
                <h3 className="text-xl text-gray-400 mt-4">{p.desc}</h3>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white text-black rounded-lg  bg-white
                               transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                  >
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white text-white rounded-lg 
                               transition-all duration-300 hover:bg-black hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div className="image-section w-1/2">
                <img
                  src={p.img}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
