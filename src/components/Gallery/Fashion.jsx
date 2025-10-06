import React from "react";
import { FaCamera, FaEnvelope, FaPhone } from "react-icons/fa";
import first from "../../assets/Wedding/first.jpg";
import fashion1 from "../../assets/Fashion/fashion1.jpg";
import fashion2 from "../../assets/Fashion/fashion2.jpg";
import fashion3 from "../../assets/Fashion/fashion3.jpg";
import fashion4 from "../../assets/Fashion/fashion4.jpg";
import fashion5 from "../../assets/Fashion/fashion5.jpg";
import fashion6 from "../../assets/Fashion/fashion6.jpg";
import fashion7 from "../../assets/Fashion/fashion7.jpg";
import fashion8 from "../../assets/Fashion/fashion8.jpg";
import fashion9 from "../../assets/Fashion/fashion9.jpg";
import fashion10 from "../../assets/Fashion/fashion10.jpg";
import fashion11 from "../../assets/Fashion/fashion11.jpg";
import fashion12 from "../../assets/Fashion/fashion12.jpg";
import fashion13 from "../../assets/Fashion/fashion13.jpg";
import fashion14 from "../../assets/Fashion/fashion14.jpg";
import fashion15 from "../../assets/Fashion/fashion15.jpg";
import fashion16 from "../../assets/Fashion/fashion16.jpg";
import fashion17 from "../../assets/Fashion/fashion17.jpg";
import fashion18 from "../../assets/Fashion/fashion18.jpg";
import fashion19 from "../../assets/Fashion/fashion19.jpg";
import fashion20 from "../../assets/Fashion/fashion20.jpg";
import fashion21 from "../../assets/Fashion/fashion21.jpg";
import fashion22 from "../../assets/Fashion/fashion22.jpg";
import fashion23 from "../../assets/Fashion/fashion23.jpg";
import fashion24 from "../../assets/Fashion/fashion24.jpg";
import fashion25 from "../../assets/Fashion/fashion25.jpg";

import ImageGallery from "react-image-gallery";

const Fashion = () => {
  const images = [
    fashion1,
    fashion2,
    fashion3,
    fashion4,
    fashion5,
    fashion6,
    fashion7,
    fashion8,
    fashion9,
    fashion10,
    fashion11,
    fashion12,
    fashion13,
    fashion14,
    fashion15,
    fashion16,
    fashion17,
    fashion18,
    fashion19,
    fashion20,
    fashion21,
    fashion22,
    fashion23,
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
            Fashion Photographers
          </h2>

          {/* Camera Icon */}
          <div className="flex justify-center items-center my-4 md:my-6">
            <FaCamera className="w-6 h-6 text-black" />
          </div>

          <p className="text-lg md:text-xl text-gray-800 my-4 md:my-8">
            Fashion photography has become so famous as photographs clicked
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
            Best Fahion <br /> Photographers in <br /> Delhi NCR.
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
            We have a fashion photography studio in Delhi. We provide Fashion
            photography services on models with everything from western wear,
            indian wear, kids wear, kurtis, undergarments, formal wear, jeans,
            paints, shirts & t-shirt in our portfolio. We are serious about our
            fashion photography assignments. We’re best fashion photographer in
            near me Delhi ncr, Delhi, Noida, Gurgaon, Ghaziabad, Faridabad,
            Gurugram, and all over India our garments photography team are
            regularly commissioned to produce editorial, catalogue, e-commerce
            website and fashion lookbook photography, with highly experienced,
            creative photographers and a dedicated post-production studio to
            ensure a comprehensive understanding of what’s required to meet your
            brief.
          </p>
        </div>
      </div>
      {/* Gallery */}
      <div className="w-full flex flex-wrap gap-4 mb-15 justify-center">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Fashion ${index + 1}`}
              className="w-85 object-cover hover:scale-120 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
