import React from "react";
import { FaCamera, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

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
import first from "../../assets/Wedding/first.jpg";

import fashion1 from "../../assets/Fashion/fashion1.jpg";
import fashion2 from "../../assets/Fashion/fashion16.jpg";
import fashion3 from "../../assets/Fashion/fashion3.jpg";
import fashion4 from "../../assets/Fashion/fashion24.jpg";
import fashion5 from "../../assets/Fashion/fashion5.jpg";
import fashion10 from "../../assets/Fashion/fashion22.jpg";
import fashion7 from "../../assets/Fashion/fashion7.jpg";
import fashion8 from "../../assets/Fashion/fashion18.jpg";

const Home = () => {
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

  const services = [
    {
      title: "Wedding Photography",
      images: [bride1, bride2, bride3, bride4, bride5, bride6, bride7, bride8],
      description:
        "We believe wedding photography should be unscripted, fun and timeless. On this page is a small portfolio from the hundreds of weddings we’ve been at over the last 5 years.",
    },
    {
      title: "Fashion Photography",
      images: [
        fashion1,
        fashion2,
        fashion3,
        fashion5,
        fashion10,
        fashion4,
        fashion7,
        fashion8,
      ],
      description:
        "We provide Fashion photography services on models including mostly everything western wear, indian wear, kids wear, kurtis, undergarments, formal wear, jeans, pants, shirts & t-shirt.",
    },
    {
      title: "Product Shoot",
      images: [
        "/images/product1.jpg",
        "/images/product2.jpg",
        "/images/product3.jpg",
        "/images/product4.jpg",
        "/images/product5.jpg",
        "/images/product6.jpg",
        "/images/product7.jpg",
        "/images/product8.jpg",
      ],
      description:
        "We provide catalogue shoots, ecommerce photography services, apparel photography, lingerie photography, 360 degree, ghost mannequin photography, furniture photography and creative product.",
    },
    {
      title: "Nature Shoot",
      images: [
        "/images/product1.jpg",
        "/images/product2.jpg",
        "/images/product3.jpg",
        "/images/product4.jpg",
        "/images/product5.jpg",
        "/images/product6.jpg",
        "/images/product7.jpg",
        "/images/product8.jpg",
      ],
      description:
        "We provide catalogue shoots, ecommerce photography services, apparel photography, lingerie photography, 360 degree, ghost mannequin photography, furniture photography and creative product.",
    },
  ];

  const features = [
    {
      icon: "✶",
      title: "Experience",
      description:
        "Creating my own vision to see the world. Man behind the machine is important. Photography is the story I fail to put into words.",
    },
    {
      icon: "✦",
      title: "Quality",
      description: `"Photography is my passion. Whenever I get time, I click. When I photograph I make love."`,
    },
    {
      icon: "❦",
      title: "Support",
      description:
        "Each wedding has its memorable moments – some make you laugh, and some may make you cry.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-2 animate-scroll py-10">
        {images.concat(images).map((img, index) => (
          <div
            key={index}
            className="min-w-[500px] h-[98vh] overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row px-5 md:px-20 lg:px-40 justify-center items-center py-10 gap-10 md:gap-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <p className="text-lg text-red-300 uppercase tracking-widest">
            Hi there.!
          </p>
          <h2 className="text-4xl md:text-4xl font-serif">
            I am Vishal Sharma
          </h2>
          <p className="text-gray-600 text-xl">
            In 2017, I admitted into Delhi College of Photography for diploma in
            fashion photography, film making and editing.
          </p>
          <p className="text-gray-600 text-xl">
            The wedding rituals were started by Mr. Vishal Sharma who has more
            than 5 years experience in wedding shoots.
          </p>
          <p className="text-gray-600 text-xl">
            This company is not restricted to weddings, we also do corporate,
            product and fashion photoshoots with full dedication to provide
            highest quality products and services.
          </p>
          <p className="font-signature font-semibold text-2xl">Vishal Sharma</p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%]">
          <img
            src={first}
            alt="Vishal Sharma"
            className="rounded-lg shadow-lg w-full h-[100vh] md:h-[100vh] object-cover object-top"
          />
        </div>
      </div>

      {/* xkkckld */}
      <div className="py-12 px-8 bg-[#faf8f5]">
        <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300 md:w-[30%] w-full"
            >
              <h3 className="text-2xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Images grid with hover zoom */}
              <div className="grid grid-cols-4 gap-2 mb-4 relative">
                {service.images.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={img}
                      alt={service.title}
                      className="w-18 h-18 object-cover rounded-md transition-transform duration-500 origin-center
                 hover:scale-250 hover:z-20 hover:absolute"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              {/* Button */}
              <Link
                to={
                  service.title === "Wedding Photography"
                    ? "/wedding"
                    : service.title === "Fashion Photography"
                    ? "/fashion"
                    : service.title === "Product Shoot"
                    ? "/product"
                    : "#"
                }
              >
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-5 py-2 rounded shadow">
                  View Details →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* jsnkcajsn */}
      <div className="py-16 px-10 bg-white text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We have experienced team with a quality work and we create magic with
          our professional photography team who can give you the best memories
          which stay with you forever
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-10 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-105 border rounded-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:bg-orange-50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row h-auto md:h-[90vh] px-5 md:px-20">
        {/* Left Side Text */}
        <div className="w-full md:w-[40%] bg-[#eaeaea] px-6 md:px-16 py-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-snug mb-6">
            We don’t take a <br />
            photograph, we make it
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            One of the&nbsp;
            <span className="font-semibold">
              best wedding photographers in Delhi NCR
            </span>
            &nbsp;has been capturing blissful moments for more than a decade.
            Capturing the memorable moments with creative concepts, our wedding
            and candid photographers leave the clients awestruck by freezing the
            beautiful memories in the frames that are cherished forever. Connect
            with us to preserve your fascinating wedding memories.
          </p>
          <button className="bg-yellow-700 text-white font-medium px-6 py-3 rounded hover:bg-yellow-800 transition">
            Get Started
          </button>
        </div>

        {/* Right Side Image (Sticky Effect on Desktop) */}
        <div className="w-full md:w-[60%] h-[80vh] md:h-[90vh] md:sticky">
          <img
            src={bride8}
            alt="Bride"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[100%] m-5 md:m-20 border">
        {/* Left Side Image */}
        <div className="w-full md:w-[50%] h-[75vh] md:h-screen md:sticky">
          <img
            src={bride15}
            alt="Bride"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[50%] bg-[#fafafa] px-6 md:px-12 py-10 md:py-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-8">
            Our Clients Love Us!
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonial 1 */}
            <div className="w-full md:w-[50%] bg-[#fdfbf7] border p-8 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-md">
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                Got my wedding photo shoot done by The Wedding Rituals, to get
                it done by a bunch of professionals, good quality equipments
                (cameras), friendly and responsive individuals finally gave a
                lovely result of pre wedding photos and video.. the whole
                experience was great!
              </p>
              <p className="font-semibold">Apoorva Sharma</p>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-[50%] bg-[#fdfbf7] border p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-md">
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                Unbelievable services on my engagement, they were bang on. Very
                professional and extreme value for money. No tantrums at all.
                The photographers were calm and soft spoken, they were loved by
                everyone in the event. Will definitely be booking them for my
                wedding and all other occasions.
              </p>
              <p className="font-semibold">Abhay Agarwal</p>
            </div>
          </div>
        </div>
      </div>

      {/* kfmadskm */}

      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="overflow-hidden absolute w-full md:top-[-70%]">
          <img src={bride1} alt="Background" className="w-full " />
        </div>

        {/* YouTube Video */}
        <div className="relative flex justify-center top-45 md:top-20">
          <iframe
            className="w-[70%] md:w-[50%] aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/UAH8y0aHubQ?rel=0&autoplay=0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* sahbdjs */}

      <div className="h-[70vh] flex flex-col items-center justify-center bg-[#f6efdf] px-4 text-center">
        {/* Icon */}
        <FaCamera className="text-xl mb-4" />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-relaxed">
          Keep your memory forever with a <br /> colorful way.
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 max-w-2xl mb-6 text-lg">
          Choose the best wedding photographer in Delhi NCR! Fill out the form
          and we will select the best wedding photographer for you!
        </p>

        {/* Button */}
        <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-6 py-2 rounded shadow-md transition">
          Get Started
        </button>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 bg-amber-50 py-3 rounded-md px-8 max-w-3xl">
          <div className="flex items-center gap-2 text-gray-700">
            <FaPhone className="text-gray-600" />
            <span>+91 8797953568</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="text-gray-600" />
            <span>theweddingritualsbyvishal@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
