/*import me from "../assets/Images/Me.jpg";

interface AboutSectionProps {
  src: string;
  alt: string;
}

const AboutSection = ({ src, alt }: AboutSectionProps) => {*/

const AboutSection = () => {
  return (
    <div className="about-section relative h-screen bg-black overflow-hidden">
      {/* Glowing */}
      <div className="absolute bg-primary mx-auto rounded-3xl blur-3xl w-[260px] h-[400px] top-[200px]  animate-shadow-slide"></div>
      {/* Typing */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold text-tertiary pl-10">
        <span className="hidden relative overflow-hidden border-r-4 border-tertiary animate-unique-typing whitespace-nowrap  lg:block">
          I am a ??? IDEK. Sites all over the place
        </span>
      </div>

      {/* Developer Info */}
      <div className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-secondary rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold text-primary">I am a Developer</h1>
        <h2 className="text-lg font-bold text-tertiary mt-2">
          Shreevat Dhakal
        </h2>
        <p className="text-sm text-primary">Web Developer</p>
      </div>
    </div>
  );
};

export default AboutSection;
