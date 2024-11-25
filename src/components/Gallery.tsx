import ame from "../assets/Images/Aboutme.jpg" ;
import ragnar from "../assets/Images/ragnar.jpg" ;
import trio from "../assets/Images/trio.jpg" ;
import saske from "../assets/Images/saske.jpg" ;
import joy from "../assets/Images/Joy.jpg" ;
import me from "../assets/Images/Me.jpg" ;

const Gallery = () => {
  const galleryImages = [
    {
      src: me,
      alt: "alt",
    },
    {
      src: joy,
      alt: "alt",
    },
    {
      src: ragnar,
      alt: "alt",
    },
    {
      src: saske,
      alt: "alt",
    },
    {
      src: trio,
      alt: "alt",
    },
    {
      src: ame,
      alt: "alt",
    },
    // Add more images as needed
  ];

  return (
    <div className="mx-auto p-4 bg-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">
        My Artwork
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="p-4 bg-tertiary rounded-lg">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <p className="mt-2 text-lg font-semibold text-secondary">
              {image.src.split("/").pop()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;