import { FaPhone, FaEnvelope, FaCamera } from "react-icons/fa";
import first from "../../assets/Wedding/first.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section with Overlay */}
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
            About Us (Wedding <br className="hidden md:block" />
            Photographers)
          </h2>

          {/* Icon */}
          <div className="flex justify-center items-center my-4 md:my-6">
            <FaCamera className="w-6 h-6 text-black" />
          </div>

          <p className="text-lg md:text-xl text-gray-800 my-4 md:my-8">
            Contemporary and Off-Beat Wedding Stories For the{" "}
            <br className="hidden md:block" />
            Modern Couple
          </p>

          {/* Contact Info */}
          <div className="w-full md:w-[80%] mx-auto flex flex-col flex-wrap md:flex-row bg-white/20 backdrop-blur-sm justify-center items-center gap-2 rounded">
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

      {/* About Vishal Section */}
      <div className="flex flex-col lg:flex-row px-6 md:px-16 lg:px-54 py-10 gap-10 lg:gap-20">
        {/* Text Section */}
        <div className="w-full lg:w-[60%] space-y-5 text-center lg:text-left">
          <p className="text-sm md:text-md text-red-300 uppercase tracking-widest">
            Hi there.!
          </p>
          <h2 className="text-2xl md:text-4xl font-serif">
            I am Vishal Sharma
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            In 2017, I admitted into Delhi College of Photography for diploma in
            fashion photography, film making and editing.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            The wedding rituals were started by Mr. Vishal Sharma who has more
            than 5 years experience in wedding shoots.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            This company is not restricted to weddings, we also do corporate,
            product and fashion photoshoots with full dedication to provide
            highest quality products and services.
          </p>
          <p className="font-signature text-lg md:text-xl font-bold">
            Vishal Sharma
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <img
            src={first}
            alt="Vishal Sharma"
            className="rounded-lg shadow-lg w-full h-[85vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
