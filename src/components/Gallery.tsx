import useImageViewer from "../hooks/useImageViewer";
import ame from "../assets/Images/Aboutme.jpg";
import ragnar from "../assets/Images/ragnar.jpg";
import trio from "../assets/Images/trio.jpg";
import saske from "../assets/Images/saske.jpg";
import joy from "../assets/Images/Joy.jpg";
import kaneki from "../assets/Images/kaneki.jpg";

const createImageObject = (src: string) => ({
  src,
  alt: "alt",
});

const Gallery = () => {
  const { selectedImage, isAnimating, openViewer, closeViewer } =
    useImageViewer();

  const galleryImages = [
    createImageObject(kaneki),
    createImageObject(joy),
    createImageObject(ragnar),
    createImageObject(saske),
    createImageObject(trio),
    createImageObject(ame),
  ];

  return (
    <div className="mx-auto bg-inherit p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-text">
        My Artwork
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="p-2 bg-primary rounded-lg cursor-pointer"
            onClick={() => openViewer(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded"
              style={{ objectFit: "cover" }}
            />
            <p
              className="mt-2 text-lg font-semibold text-secondary text-center"
              style={{ textTransform: "capitalize" }}
            >
              {image.src.split("/").pop()?.split(".")[0] ?? ""}
            </p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeViewer}
        >
          <img
            src={selectedImage}
            alt="Selected Image"
            className={`max-w-full max-h-screen object-contain transform transition-all duration-300 ${
              isAnimating ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
