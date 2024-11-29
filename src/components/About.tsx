import Illustration from "../assets/images/Illustration.png";
const About = () => {
  return (
    <div id="about" className="about-section min-h-screen flex items-center justify-center bg-backgorund py-16 px-6">
      {/* Card Container */}
      <div className="relative bg-secondary text-center p-8 rounded-xl shadow-lg max-w-4xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        {/* Illustration Image */}
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
          <img
            src={Illustration}
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-text">
            Insert a Catchy line here later ig!!
          </h2>
          <p className="text-lg text-text">
            Aiming to develop a skill set as a <span className="text-yellow-400">web developer!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
