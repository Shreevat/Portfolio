// src/Pages/Contact.tsx

import withLayout from "../hoc/withLayout";

const Contact = () => {
  return (
    <>
      <div
        id="contactme"
        className="max-w-md  mt-8 mb-8 mx-auto p-4 bg-tertiary rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
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
