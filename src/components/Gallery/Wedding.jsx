import React from "react";
import { FaCamera, FaEnvelope, FaPhone } from "react-icons/fa";
import first from "../../assets/Wedding/first.jpg";
import bride1 from "../../assets/Wedding/bride1.jpg";
import bride2 from "../../assets/Wedding/bride2.jpg";
import bride3 from "../../assets/Wedding/bride3.jpg";
import bride4 from "../../assets/Wedding/bride4.jpg";
import bride5 from "../../assets/Wedding/bride5.jpg";
import bride6 from "../../assets/Wedding/bride6.jpg";
import bride7 from "../../assets/Wedding/bride7.jpg";
import bride8 from "../../assets/Wedding/bride8.jpg";
import bride9 from "../../assets/Wedding/bride9.jpg";
import bride10 from "../../assets/Wedding/bride10.jpg";
import bride11 from "../../assets/Wedding/bride11.jpg";
import bride12 from "../../assets/Wedding/bride12.jpeg";
import bride13 from "../../assets/Wedding/bride13.jpg";
import bride14 from "../../assets/Wedding/bride14.jpeg";
import bride15 from "../../assets/Wedding/bride15.jpg";
import bride16 from "../../assets/Wedding/bride16.jpeg";

const Wedding = () => {
  const images = [
    bride14,
    bride15,
    bride16,
    bride1,
    bride2,
    bride3,
    bride4,
    bride5,
    bride6,
    bride7,
    bride8,
    bride9,
    bride10,
    bride11,
    bride12,
    bride13,
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={first}
            alt="Wedding Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="w-[90%] md:w-[60%] lg:w-[50%] h-auto md:h-[65vh] bg-white/40 backdrop-blur-md pt-10 md:pt-20 mx-auto relative z-10 p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 md:mb-8">
            Wedding Photographers
          </h2>
          {/* Camera Icon */}
          <div className="flex justify-center items-center my-4 md:my-6">
            <FaCamera className="w-6 h-6 text-black" />
          </div>

          <p className="text-lg md:text-xl text-gray-800 my-4 md:my-8">
            wedding photography has become so famous as photographs clicked
            during this shoot creates lifetime memories for the couple to
            cherish forever.
          </p>

          {/* Phone & Email */}
          <div className="max-w-[85%] mx-auto flex flex-wrap flex-col md:flex-row justify-center my-6 items-center gap-4 bg-white/20 backdrop-blur-sm rounded p-2">
            <div className="flex items-center gap-2">
              <FaPhone className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm">+91 7303233568</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm ">
                theweddingritualsbykuldeep@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 px-7 md:px-15 flex md:flex-nowrap flex-wrap gap-4 md:gap-20 justify-center">
        {/* Left Section */}
        <div className="w-[70%] text-center md:text-left ">
          {/* Camera Icon with Divider */}

          <h2 className="text-3xl md:text-4xl flex justify-center items-center font-serif font-bold leading-snug">
            Best Wedding <br /> Photographers in <br /> Delhi NCR.
          </h2>

          <div className="flex items-center justify-center md:justify-start mb-6 mt-8 md:mt-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <FaCamera className="mx-3 text-gray-700" />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[95%] text-justify">
          <p className="text-gray-700 text-lg leading-relaxed">
            A wedding shoot has now become more of a prerequisite for all
            weddings among millennial couples. There is a lot of effort that
            goes into planning and executing a dreamy and perfect&nbsp;
            <em className="italic font-semibold">wedding shoot</em>.
            Choosing&nbsp;
            <span className="font-semibold">
              wedding photographers in Delhi
            </span>
            &nbsp;NCR is a crucial task. Wedding photography has gained so much
            popularity that couples these days leave no page unturned when it
            comes to opting for&nbsp;
            <span className="font-semibold">pre-wedding photographers</span>
            ,&nbsp;glamorous outfits, larger than life photography sets and
            breathtaking destinations.
          </p>
        </div>
      </div>
      {/* Gallery */}
      <div className="w-full flex flex-wrap gap-4 mb-15 justify-center">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Wedding ${index + 1}`}
              className="w-90 md:w-85 object-cover hover:scale-120 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;
