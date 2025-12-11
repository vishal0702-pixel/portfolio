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
        p-4 sm:p-6 md:p-8
        text-white z-50 mb-40
      "
    >

      {/* Left Title */}
      <div className="goldman-bold 
        text-lg sm:text-xl md:text-xl lg:text-2xl 
        tracking-wide
      ">
     Vishal
      </div>

      {/* Right Menu */}
      <div
        className="
          flex 
          gap-4 sm:gap-6 md:gap-8 lg:gap-12
          text-sm sm:text-lg md:text-xl lg:text-2xl
          goldman-regular  text-gray-400 
        "
      >
        <button onClick={() => scrolltosection("home")}>HOME</button>
        <button onClick={() => scrolltosection("skills")}>SKILLS</button>
        <button onClick={() => scrolltosection("projects")}>PROJECT</button>
        <button onClick={() => scrolltosection("about")}>ABOUT</button>
        <button onClick={() => scrolltosection("contact")}>CONTACT</button>
      </div>

    </div>
  );
}
