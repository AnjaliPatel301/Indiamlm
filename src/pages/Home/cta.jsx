import { FaWhatsapp, FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FloatingActions() {


  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/7024031779?text=Hello%20I%20need%20MLM%20Software"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </a>

      {/* Call */}
      <a
        href="tel:+917024031779"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt className="text-xl text-white" />
      </a>

      {/* Enquiry */}
    

    </div>
  );
}

