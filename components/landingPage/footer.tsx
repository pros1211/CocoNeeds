import React from "react";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="flex items-center p-8 text-white text-justify justify-between w-full bg-[#2C694E]">
        <div className="flex flex-col gap-4 max-w-[30vw]">
          <h2 className="text-2xl font-bold tracking-widers">CocoNeeds</h2>
          <p className="font-semibold text-xl tracking-wide">
            &quot;Assisting and empowering communities, farmers, and industries
            through the integration of sustainable and efficient
            technology.&quot;
          </p>
          <span className="flex items-center gap-2 font-semibold">
            <MapPin className="w-5 h-5" />
            Jalan Veteran No. 17, Jakarta Pusat, Indonesia
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <Phone className="w-5 h-5" />
            +62 899-671-953
          </span>
        </div>
        <div className="flex items-center capitalize gap-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg">menu</p>
            <ul className="flex flex-col items-center">
              <li>Home</li>
              <li>Recycle</li>
              <li>Marketplace</li>
              <li>Logistics</li>
              <li>Farmer Portal</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg">resources</p>
            <ul className="flex flex-col items-center">
              <li>Guideline</li>
              <li>terms & condition</li>
              <li>AI Forecasting</li>
              <li>Eco Point</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <p className="capitalize font-semibold">social media</p>
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
