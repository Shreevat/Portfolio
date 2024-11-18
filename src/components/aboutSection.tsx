interface AboutSectionProps {
  src: string;
  alt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ src, alt }) => {
  return (
    <div className="about-section">
      <img src={src} alt={alt} />
    </div>
  );
};

export default AboutSection;
