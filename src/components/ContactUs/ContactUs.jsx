import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaCamera,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import first from "../../assets/Wedding/first.jpg";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iewtz7m", // EmailJS से लिया Service ID
        "template_b219yqp", // EmailJS से लिया Template ID
        formRef.current,
        "ao1J8riD0uc9NZmLX" // EmailJS से लिया Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <div>
      {/* Top Hero Section */}
      <div className="relative text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={first}
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="w-[90%] md:w-[60%] lg:w-[50%] h-auto md:h-[65vh] bg-white/40 backdrop-blur-md pt-10 md:pt-20 mx-auto relative z-10 p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 md:mb-8">
            Contact Us (Wedding <br className="hidden md:block" />
            Photographers)
          </h2>

          {/* Icon */}
          <div className="flex justify-center items-center my-4 md:my-6">
            <FaCamera className="w-6 h-6 text-black" />
          </div>

          <p className="text-lg md:text-xl text-gray-800 my-4 md:my-8">
            Send Enquiry for Memorable Pre Wedding Shoot
          </p>

          {/* Contact Info */}
          <div className="w-full md:w-[80%] mx-auto flex flex-col flex-wrap md:flex-row bg-white/20 backdrop-blur-sm justify-center items-center gap-4 rounded">
            <div className="flex items-center gap-2 px-4 py-2">
              <FaPhone className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm md:text-base">
                +91 7303233568
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 text-center">
              <FaEnvelope className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm md:text-base break-words">
                theweddingritualsbyvishal@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row bg-white px-4 sm:px-8 md:px-20 lg:px-40 py-10 gap-8">
        {/* Left Side Info */}
        <div className="w-full md:w-[40%] p-6 md:p-10 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">
            Get in touch!
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            We can’t wait to hear from you! We respond to inquiries ASAP always,
            but if it’s a weekend, just know that we might be at a photography
            event when you contact us.
          </p>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-yellow-700 mt-1" />
            <p className="text-gray-700 text-sm md:text-base">
              H.no 40 3rd floor front side, Gaali no -2 <br />
              Bhagwati garden extn dwarka mor <br />
              Delhi – 110059
            </p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-yellow-700" />
            <button className="bg-yellow-700 text-white px-3 py-1 rounded-sm text-xs md:text-sm break-words">
              satyenderprajapati413@gmail.com
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaPhone className="text-yellow-700" />
            <button className="bg-yellow-700 text-white px-3 py-1 rounded-sm text-xs md:text-sm">
              +91 7303233568
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <FaClock className="text-yellow-700" />
            <p className="text-gray-700 text-sm md:text-base">
              9:00 AM – 10:00 PM
            </p>
          </div>

          <div className="flex gap-4">
            <FaInstagram className="text-yellow-700 w-6 h-6 cursor-pointer hover:text-black" />
            <FaFacebook className="text-yellow-700 w-6 h-6 cursor-pointer hover:text-black" />
            <FaYoutube className="text-yellow-700 w-6 h-6 cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[60%] p-6 md:p-10 border rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">
            Submit your queries?
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 md:space-y-8"
          >
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[50%]">
                <p>
                  First Name <span className="text-red-900">*</span>
                </p>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="w-full md:w-[50%]">
                <p>
                  Email Address <span className="text-red-900">*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[50%]">
                <p>
                  Telephone<span className="text-red-900">*</span>
                </p>
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telephone"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="w-full md:w-[50%]">
                <p>
                  Event Date<span className="text-red-900">*</span>
                </p>
                <input
                  type="date"
                  name="event_date"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[50%]">
                <p>
                  Event Location <span className="text-red-900">*</span>
                </p>
                <input
                  type="text"
                  name="event_location"
                  placeholder="Event Location"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="w-full md:w-[50%]">
                <p>
                  Estimated Budget <span className="text-red-900">*</span>
                </p>
                <input
                  type="text"
                  name="budget"
                  placeholder="Estimated Budget"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <p>Message</p>
              <textarea
                name="message"
                placeholder="Message *"
                rows="5"
                className="w-full border p-2 rounded"
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" required />
              <span>
                By submitting this form, you are accepting our{" "}
                <span className="underline cursor-pointer">
                  Terms & Conditions
                </span>
                .
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded hover:bg-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
