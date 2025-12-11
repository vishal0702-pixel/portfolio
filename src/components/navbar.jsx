export default function Navbar() {

  const scrolltosection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="
        fixed top-0 left-0 w-full 
        flex justify-between items-center
        text-2xl p-8 goldman-regular text-white
       
        z-50                             /* Always on top */
            
      "
    >
      <div className="goldman-bold">
        Hey, I'm Vishal
      </div>

      <div className="flex gap-8 text-2xl goldman-regular">
       <button onClick={() => scrolltosection("home")}>HOME</button>
        <button onClick={() => scrolltosection("skills")}>SKILLS</button>
        <button onClick={() => scrolltosection("projects")}>PROJECT</button>
       


         <button onClick={() => scrolltosection("about")}>ABOUT</button>
        <button onClick={() => scrolltosection("contact")}>CONTACT</button>
      </div>
    </div>
  );
}
