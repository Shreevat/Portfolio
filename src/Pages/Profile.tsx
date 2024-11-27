import me from "../assets/Images/Me.jpg";

const ProfileSection = () => {
  return (
    <div className=" relative h-screen bg-background overflow-hidden">
      {/* Glowing */}
      <div className="absolute bg-primary mx-auto rounded-3xl blur-3xl w-[260px] h-[400px] top-[200px]  animate-shadow-slide"></div>
      {/* Typing */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold text-text pl-10">
        <span className="hidden relative overflow-hidden border-r-4 border-tertiary animate-unique-typing whitespace-nowrap text-text lg:block">
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
          <p className="text-sm text-text mt-2">Web Developer</p>
          <p className="text-sm text-text mt-2">I enjoy building websites :D</p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/Shreevat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-xl text-text hover:text-gray-800"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-xl text-blue-500 hover:text-blue-700"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shreevatshanka-dhakal-b35a87176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-xl text-blue-700 hover:text-blue-900"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
