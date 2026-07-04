import React, { useRef } from "react";
import Cta from "../Home/cta"
import { PlayCircle, CheckCircle2, ArrowRight } from "lucide-react";

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  "CUSTOMIZED MLM SOFTWARE",
  "MLM PLAN PDF MAKING",
  "MLM PLAN VIDEO MAKING",
  "RESULT BASE PLAN PROMOTION",
  "LATEST MLM DATABASE",
 
];

const demoCards = [
  {
    title:
      "Bitminetradefx ( Matrix Plan)",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://bitminetradefx.aapkaai.com",
    adminUser: "admin@gmail.com",
    adminPass: "12345678",
    userLink: "https://bitminetradefx.aapkaai.com",
    userId: "user@gmail.com",
    userPass: "12345678",
   
  },
  {
    title:
      "UniqueAiTrading",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://test.uniqueaitrading.com",
    adminUser: "admin@trading.com",
    adminPass: "Admin@123",
    userLink: "https://test.uniqueaitrading.com",
    userId: "user@gmail.com",
    userPass: "12345678",
   
  },
  {
    title:
      "Cloudaraa (ROI Plan)",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://cloudaraa.com",
    adminUser: "admin@roinexus.com",
    adminPass: "Admin@123",
    userLink: "https://cloudaraa.com",
    userId: "anku@gmail.com",
    userPass: "12345678",
   
  },
   {
    title:
      "SOS Education",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://soseducation.in",
    adminUser: "rakeshsoni@gmail.com",
    adminPass: "12345678",
    userLink: "https://soseducation.in",
    userId: "ankitauk7501@gmail.com",
    userPass: "12345678",
   
  },
   {
    title:
      "Real Sos Education",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://real.soseducation.in",
    adminUser: "rahulsharma@gmail.com",
    adminPass: "123456",
    userLink: "https://real.soseducation.in",
    userId: "ankitauk7501@gmail.com",
    userPass: "123456",
   
  },
   {
    title:
      "Smart Payment Gateway",
    video: "https://www.youtube.com/embed/eO3_nBkyUFg?si=mU5cV0SFVMYqlCtc",
    adminLink: "https://smartgateway.aapkaai.com/",
    adminUser: "admin@cryptogateway.com",
    adminPass: "Admin@123",
    userLink: "https://smartgateway.aapkaai.com/",
    userId: "user@gmail.com",
    userPass: "123456",
   
  },
];

const serviceCards = [
  {
    title: "MLM LEADER WEBSITE",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "GOOGLE & META ADS SERVICES",
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48",
  },
  {
    title: "CUSTOMIZED MLM SOFTWARE DEVELOPMENT",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "MLM PLAN PDF MAKING",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function ServicesPage() {
  // ✅ useRef ab component ke ANDAR hai — yahi fix hai
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const copyValue = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Copied to clipboard");
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white py-16 text-black">
  <section className="w-full overflow-hidden bg-black">
      <div className="w-full">
        <iframe
          className="w-full h-[300px] sm:h-[450px] md:h-[300px] lg:h-[450px] xl:h-[450px]"
          src="https://www.youtube.com/embed/eO3_nBkyUFg?si=74Dip_83BLRH0Bw-"
          title="India MLM Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
        {/* Top Banner */}
        <div className="max-w-7xl mx-auto pt-6 px-4">
          <div className="bg-white text-center rounded-2xl py-4 text-[#1b1b5a]">
            <h2 className="text-4xl font-bold">Thankyou for Showing Interest.</h2>
            <p className="text-xl font-semibold">Contact us after seeing Details!</p>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center py-10 px-4">
          <h1 className="text-4xl font-serif font-bold">
            Looking for "MLM Software & MLM Plan Promotion" Service ?
          </h1>
          <p className="text-2xl mt-4">
            If "YES" then You are in Right Place as We Provide ALL MLM SERVICES !
          </p>
        </div>

        {/* Video + Services */}

        {/* Demo Cards */}
        <div className="max-w-7xl mx-auto py-20 px-4 grid lg:grid-cols-3 gap-8">
          {demoCards.map((item, i) => (
            <div key={i} className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-64"
                src={item.video}
                title={item.title}
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="text-xl text-orange-500 font-bold mb-6">{item.title}</h3>

                <h4 className="font-bold text-2xl mb-3">Admin Details</h4>
                <p>
                  <b>Link:</b>{" "}
                  <a href={item.adminLink} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">
                    {item.adminLink}
                  </a>
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <p className="min-w-[120px]"><b>Admin Username:</b> {item.adminUser}</p>
                  <button
                    type="button"
                    onClick={() => copyValue(item.adminUser)}
                    className="rounded-full border border-orange-500 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50 transition"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <p className="min-w-[120px]"><b>Admin Password:</b> {item.adminPass}</p>
                  <button
                    type="button"
                    onClick={() => copyValue(item.adminPass)}
                    className="rounded-full border border-orange-500 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50 transition"
                  >
                    Copy
                  </button>
                </div>

                <h4 className="font-bold text-2xl mt-8 mb-3">User Details</h4>
                <p>
                  <b>Link:</b>{" "}
                  <a href={item.userLink} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">
                    {item.userLink}
                  </a>
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <p className="min-w-[120px]"><b>User ID:</b> {item.userId}</p>
                  <button
                    type="button"
                    onClick={() => copyValue(item.userId)}
                    className="rounded-full border border-orange-500 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50 transition"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <p className="min-w-[120px]"><b>User Password:</b> {item.userPass}</p>
                  <button
                    type="button"
                    onClick={() => copyValue(item.userPass)}
                    className="rounded-full border border-orange-500 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50 transition"
                  >
                    Copy
                  </button>
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need More Information */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="border-2 border-dashed border-white rounded-[30px] p-10 text-center bg-white">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-700 to-orange-600 rounded-2xl py-4 mb-8">
            <h2 className="text-3xl font-bold uppercase">Need Any More Information?</h2>
            <p className="text-lg font-semibold">
              Call / WhatsApp Me Anytime You Want Only After Demo
            </p>
          </div>
          <h1 className="text-xl text-black font-bold">MY NUMBER +91 7024031779</h1>
        </div>
      </div>

      

 <a href="https://wa.me/917024031779"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 transition px-4 py-4 md:px-8 rounded-full shadow-2xl flex items-center gap-3 z-50"
>
  <span className="text-3xl"><FaWhatsapp /></span>
  <span className="hidden md:inline text-xl font-semibold">How can I help you ?</span>
</a>

{/* Floating Contact */}
<a
  href="tel:+917024031779"
  className="fixed bottom-8 left-8 bg-white text-gray-800 px-4 py-4 md:px-6 md:py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:shadow-3xl transition-all duration-300"
>
  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
    <FaPhoneAlt />
  </span>
  <span className="hidden md:inline text-xl font-medium">Call Us</span>
</a>
    </>
  );
}