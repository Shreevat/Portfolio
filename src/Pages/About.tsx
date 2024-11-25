interface AboutSectionProps {
  src: string;
  alt: string;
}

const AboutSection = ({ src, alt }: AboutSectionProps) => {
  return (
    <div className="about-section relative">
      <img src={src} alt={alt} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-tertiary rounded-lg shadow-md">
        <img src="Me.jpg" alt="M" className="w-24 h-24 mx-auto rounded-full" />
        <h2 className="text-lg font-bold text-primary">
          Shreevat Dhakal
        </h2>
        <p className="text-sm text-secondary">Washed Artist</p>
      </div>
    </div>
  );
};

export default AboutSection;