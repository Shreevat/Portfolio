// src/Pages/Contact.tsx

import withLayout from "../hoc/withLayout";

const Contact = () => {
  return (
    <>
      <div
        id="contactme"
className="w-[80%] md:w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-tertiary rounded-lg shadow-md mx-auto"      >
        <h2 className="text-2xl font-bold text-text text-center mb-4">Get in Touch</h2>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 bg-secondary rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 bg-secondary rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-2 mb-4 bg-secondary rounded-lg"
          />
          <button
            type="submit"
            className="bg-primary text-text py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

const ContactWithLayout = withLayout(Contact);

export default ContactWithLayout;
