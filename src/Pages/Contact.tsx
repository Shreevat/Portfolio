// src/Pages/Contact.tsx
import { Mail, Phone } from "lucide-react";
import { socialLinks } from "../constants/socialinks";
import { Tooltip } from "react-tooltip";
import withLayout from "../hoc/withLayout";

const Contact = () => {
  return (
    <div className="min-h-screen mx-12 py-12 md:py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text">Get in Touch</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className="border p-6 rounded-xl shadow-md"
            data-tooltip-id="send-tooltip"
            data-tooltip-content="Not functional right now"
          >
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-text">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full bg-inherit text-text text-sm p-2 mt-4 border rounded-lg focus:ring focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full bg-inherit text-text text-sm p-2 mt-4 border rounded-lg focus:ring focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-inherit text-text text-sm p-2 mt-4 border rounded-lg focus:ring focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-inherit text-text text-sm p-2 mt-4 border rounded-lg focus:ring focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text">
                  Message*
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full bg-inherit text-text p-2 mt-4 border rounded-lg focus:ring focus:ring-primary"
                />
              </div>
              <button className="w-full bg-primary text-text font-medium py-2 rounded-lg hover:bg-secondary transition">
                Send Inquiry
              </button>
            </form>
          </div>
          <Tooltip id="send-tooltip" place="bottom" />

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border p-6 rounded-xl shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-text">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 text-blue-600" />
                  <div>
                    <p className="font-medium text-text">Email</p>
                    <p className="text-text">info@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 text-blue-600" />
                  <div>
                    <p className="font-medium text-text">Phone</p>
                    <p className="text-text">+123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border p-6 rounded-xl shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-text">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ href, Icon, name }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border hover:bg-primary icon-text-primary rounded-full transition"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5 text-text " />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactWithLayout = withLayout(Contact);

export default ContactWithLayout;
