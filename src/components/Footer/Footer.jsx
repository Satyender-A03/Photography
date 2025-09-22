import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-20 px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-4 text-white">
            TheWedding Rituals
          </h2>
          <p className="text-sm mb-6">
            The wedding rituals was started by{" "}
            <span className="text-yellow-500">Mr. Vishal Sharma</span>
            who has more than 5 years experience in wedding.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mb-6">
            <a
              href="#"
              className="bg-yellow-600 p-2 rounded text-black hover:bg-yellow-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-yellow-600 p-2 rounded text-black hover:bg-yellow-700"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-yellow-600 p-2 rounded text-black hover:bg-yellow-700"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="text-xs">Copyright © 2022. Theweddingrituals.</p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">
              › Wedding Photography
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              › Product Shoot
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              › Fashion Photography
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">› About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">
              › Contact Us
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">› Blog</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +91 ******3568
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />{" "}
              theweddingritualsbyvishal@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>
                H.no 40 3rd floor front side, <br />
                gaali no -2 bhagwati garden <br />
                extn dwarka mor Delhi - 110059
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
