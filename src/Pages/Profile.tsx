import { useState } from "react";
import me from "../assets/Images/Me.jpg";

const socialLinks = [
  {
    href: "https://github.com/Shreevat",
    iconClass: "fab fa-github",
    hoverColor: "hover:text-red-500",
  },
  {
    href: "https://twitter.com",
    iconClass: "fab fa-twitter",
    hoverColor: "hover:text-blue-500",
  },
  {
    href: "https://www.linkedin.com/in/shreevatshanka-dhakal-b35a87176/",
    iconClass: "fab fa-linkedin",
    hoverColor: "hover:text-blue-600",
  },
];

const ProfileSection = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const toggleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Container holding the Profile Section*/}
      <div
        className={`relative h-[100vh] bg-background overflow-hidden transition-transform duration-500 ${
          isSwapped ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Profile Section */}
        <div className="relative h-[110vh] bg-background overflow-hidden">
          {/* Glowing */}
          <div className="absolute bg-primary mx-auto rounded-3xl blur-3xl w-[260px] h-[280px] top-[200px] animate-shadow-slide"></div>
          {/* Typing */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold text-text pl-10">
            <span className="hidden relative overflow-hidden border-r-4 border-tertiary animate-unique-typing whitespace-nowrap font-roboto-slab text-text lg:block">
              I am a ??? IDEK. Sites all over the place
            </span>
          </div>

          <div className="relative top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-secondary rounded-lg shadow-md text-center max-w-xs">
            {/* Image */}
            <img
              src={me}
              alt="Pfp"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full object-cover border-2 border-primary shadow-lg"
            />

            {/* Developer Info */}
            <div className="mt-14">
              <h2 className="mt-12 text-xl font-bold text-text">
                Shreevatshanka Dhakal
              </h2>
              <p className="text-sm text-text mt-2">Developer?</p>
              <p className="text-sm text-text mt-2">
                I enjoy doing (insert required job) :D
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`${link.iconClass} text-xl text-text ${link.hoverColor}`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side Arrow Button */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-60 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-secondary transition-all duration-300 z-50"
        onClick={toggleSwap}
        style={{ opacity: 0.7 }}
        onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
        onMouseLeave={() => setIsHovered(false)} // Hide tooltip when not hovered
      >
        <i
          className={`fas ${
            isSwapped ? "fa-arrow-left" : "fa-arrow-right"
          } text-2xl`}
        />
      </div>

      {isHovered && (
        <div className="absolute top-1/2 right-14 transform -translate-y-1/2 bg-primary text-white p-3 rounded-md shadow-lg text-sm">
          Surprise!!! Don't like this layout? Let's switch then!
        </div>
      )}

      {/* Alternate Profile */}
      <div
        className={`absolute inset-0 bg-background flex justify-center items-center transition-all duration-500 ${
          isSwapped ? "opacity-100 z-20" : "opacity-0 -z-10"
        }`}
      >
        <div className="block lg:grid grid-cols-3 gap-1 items-center bg-background h-screen w-full shadow-lg">
          <div className="col-span-1 p-5 flex justify-center items-center relative">
            <div
              className="w-32 h-32 rounded-full bg-primary filter blur-md absolute"
              style={{
                zIndex: 1,
                transform: "scale(1)",
              }}
            />
            <img
              src={me}
              alt="Profile"
              className="w-32 h-32 rounded-full relative z-10"
            />
          </div>

          {/* Title */}
          <div className="col-span-1 justify-center items-center text-center flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold text-text mb-2">
              HI THERE! I’M
            </h1>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
              Shreevatshanka Dhakal
            </h2>

            <p className="text-sm lg:text-base text-text mb-4">
              A{" "}
              <span className="font-semibold text-primary">
                Front-End Web Developer
              </span>{" "}
              passionate about creating interactive applications and experiences
              on the web.
            </p>
          </div>

          {/* Social Links and Buttons */}
          <div className="col-span-1 flex flex-col justify-center items-center space-y-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-secondary transition duration-300"
            >
              Resume
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-primary hover:text-secondary text-2xl`}
                >
                  <i
                    className={`${link.iconClass} text-xl text-text ${link.hoverColor}`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
