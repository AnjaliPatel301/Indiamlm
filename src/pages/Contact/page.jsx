import React, { useState } from "react";
import Cta from "../Home/cta"

import { Headphones, Send } from "lucide-react";
 
/**
 * TecAI — Contact Page
 * Single-file React + Tailwind component.
 * Hero (network-graph signature visual) + Contact form + Map/Details + FAQ.
 * Brand accent: orange-500.
 */

/* ----------------------------- data ----------------------------- */

const FAQS = [
  {
    q: "What exactly does MLM software do?",
    a: "It automates the parts of a network marketing business that get unmanageable by hand — tracking every member's downline, calculating commissions across levels, applying capping and admin/tax deductions, and producing payout and compliance reports on a schedule.",
  },
  {
    q: "Which compensation plan should I choose — Binary, Matrix, or Unilevel?",
    a: "Binary suits plans built around pairing two legs and fast, capped payouts. Matrix works well when you want a fixed, predictable grid with spillover. Unilevel fits teams that reward broad personal recruiting over deep structuring. Most clients start with our calculators to model all three before committing.",
  },
  {
    q: "Can the commission structure be changed after launch?",
    a: "Yes. Commission percentages, capping limits, admin charges, and tax deduction rules are configurable, so the plan can evolve as your business grows — without needing a rebuild from scratch.",
  },
  {
    q: "Is the software compliant with local regulations?",
    a: "We build in configurable tax deduction (TDS) and admin-charge fields so payouts align with your jurisdiction's rules, but compliance ultimately depends on how the plan itself is structured — we'd recommend pairing this with your own legal review for your specific market.",
  },
  {
    q: "How long does it take to launch a new plan?",
    a: "A standard Binary, Matrix, or Unilevel setup with your branding and payout rules typically goes live in a few weeks. Timelines stretch out for custom hybrid plans or deep integrations with third-party payment gateways.",
  },
  {
    q: "Do members get their own dashboard?",
    a: "Yes — every member gets a personal dashboard to track their downline tree, earnings by level, pending and paid commissions, and capping status in real time.",
  },
];

/* ----------------------------- hero art ----------------------------- */

function NetworkGraph() {
  return (
    <svg viewBox="0 0 480 480" fill="none" className="w-full h-full">
      <line x1="240" y1="240" x2="120" y2="130" stroke="#3a342c" strokeWidth="1.5" />
      <line x1="240" y1="240" x2="360" y2="130" stroke="#3a342c" strokeWidth="1.5" />
      <line x1="240" y1="240" x2="100" y2="320" stroke="#3a342c" strokeWidth="1.5" />
      <line x1="240" y1="240" x2="370" y2="330" stroke="#3a342c" strokeWidth="1.5" />
      <line x1="120" y1="130" x2="60" y2="70" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="120" y1="130" x2="160" y2="60" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="360" y1="130" x2="420" y2="65" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="360" y1="130" x2="320" y2="55" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="100" y1="320" x2="50" y2="380" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="100" y1="320" x2="40" y2="270" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="370" y1="330" x2="430" y2="390" stroke="#3a342c" strokeWidth="1.2" />
      <line x1="370" y1="330" x2="430" y2="280" stroke="#3a342c" strokeWidth="1.2" />

      <circle cx="240" cy="240" r="26" fill="#f97316" className="animate-pulse" />
      <circle cx="120" cy="130" r="13" fill="#fb8b3f" />
      <circle cx="360" cy="130" r="13" fill="#fb8b3f" />
      <circle cx="100" cy="320" r="13" fill="#fb8b3f" />
      <circle cx="370" cy="330" r="13" fill="#fb8b3f" />
      <circle cx="60" cy="70" r="7" fill="#fbfaf8" />
      <circle cx="160" cy="60" r="7" fill="#fbfaf8" />
      <circle cx="420" cy="65" r="7" fill="#fbfaf8" />
      <circle cx="320" cy="55" r="7" fill="#fbfaf8" />
      <circle cx="50" cy="380" r="7" fill="#fbfaf8" />
      <circle cx="40" cy="270" r="7" fill="#fbfaf8" />
      <circle cx="430" cy="390" r="7" fill="#fbfaf8" />
      <circle cx="430" cy="280" r="7" fill="#fbfaf8" />
    </svg>
  );
}



/* ----------------------------- icons ----------------------------- */

function MailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7l9 6 9-6M4 4h16v16H4V4z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.71-1.11a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.37.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ----------------------------- Info row ----------------------------- */

function InfoRow({ icon, label, value, last }) {
  return (
    <div className={`flex gap-3.5 py-4 ${!last ? "border-b border-[#e7e3dc]" : ""}`}>
      <div className="shrink-0 w-[42px] h-[42px] rounded-[10px] bg-orange-50 text-orange-700 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-[11.5px] uppercase tracking-wider text-stone-400 font-bold mb-0.5">
          {label}
        </div>
        <div className="text-[15px] font-semibold text-[#15131a] leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

/* ----------------------------- FAQ item ----------------------------- */

function FaqItem({ index, question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e7e3dc]">
      <button
        onClick={onToggle}
        className="w-full text-left bg-none border-none py-5 sm:py-[22px] font-bold text-[#15131a] cursor-pointer flex justify-between items-center gap-4"
      >
        <span className="flex items-start sm:items-center text-[15px] sm:text-base">
          <span className="text-stone-300 font-extrabold text-[13px] mr-3 sm:mr-3.5 font-display shrink-0 pt-0.5 sm:pt-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{question}</span>
        </span>
        <span
          className={`shrink-0 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] flex items-center justify-center relative transition-all duration-200 ${
            isOpen ? "bg-orange-500 border-orange-500 rotate-45" : "border-[#e7e3dc]"
          }`}
        >
          <span
            className={`absolute w-2.5 h-[1.6px] ${isOpen ? "bg-white" : "bg-[#15131a]"}`}
          />
          <span
            className={`absolute w-[1.6px] h-2.5 ${isOpen ? "bg-white" : "bg-[#15131a]"}`}
          />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "240px" : "0px" }}
      >
        <p className="text-stone-500 text-[14.5px] leading-relaxed mb-5 sm:mb-[22px] ml-0 sm:ml-[38px] max-w-[760px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- main component ----------------------------- */

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#fbfaf8] text-[#15131a] font-sans">
      {/* ============ HERO ============ */}
      <Cta/>
     <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800')",
        }}
      >
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 flex h-full items-center justify-center flex-col text-white px-5">

          <h1 className="text-6xl font-extrabold">
            Contact Us
          </h1>

          <p className="mt-5 text-xl text-center bg-orange-600 p-2 max-w-2xl">
            Have questions about our MLM Software? Contact our expert team today.
          </p>

        </div>
      </section> 

      {/* ============ CONTACT DETAILS ============ */}
      <section id="contact-form" className="py-16 sm:py-[72px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[620px] mb-10">
            <span className="block text-xs font-bold tracking-[.12em] uppercase text-orange-700 mb-2.5">
              Get in touch
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-extrabold mb-3 tracking-tight">
              Contact
            </h2>
            <p className="text-stone-500 text-[15.5px] leading-relaxed">
              Drop your details below, or reach us directly — our Indore office is open
              Monday through Saturday for walk-ins and scheduled calls.
            </p>
          </div>

          {/* contact details on top, full width */}
          <div className="border border-[#e7e3dc] bg-white rounded-2xl p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-3 gap-x-6">
            <InfoRow
              icon={<MailIcon />}
              label="Email"
              value={
                <a href="mailto:info@tecai.in" className="hover:text-orange-700">
                  info@tecai.in
                </a>
              }
              last
            />
            <InfoRow
              icon={<PhoneIcon />}
              label="Phone"
              value={
                <a href="tel:+17024031779" className="hover:text-orange-700">
                  +91 (702) 403-1779
                </a>
              }
              last
            />
            <InfoRow
              icon={<PinIcon />}
              label="Office Address"
              value={
                <>
                  3rd Floor, Mishika Tower, 201, Sapna Sangeeta Rd,
                  <br />
                  Sarvoday Nagar, Indore, Madhya Pradesh 452001
                </>
              }
              last
            />
          </div>
        </div>
      </section>


  <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 px-5 py-20 md:grid-cols-2 md:gap-3">
        {/* Left: person image + floating chat card */}
        <div className="relative mx-auto gap-8 w-full max-w-md">
          {/* Person image — apni image ka path yahan daalo */}
          <img
            src="/contact.png"
            alt="Support representative"
            className="mx-auto h-[480px] p-5 w-full max-w-md object-cover object-top"
          />
 
          {/* Floating "Chat With Live" card */}
          <div className="absolute -left-4 top-24 w-56 me-6 rounded-2xl bg-orange-600 p-6 text-center text-white shadow-xl sm:-left-10 md:top-32">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <Headphones size={26} />
            </div>
            <h3 className="text-lg font-semibold">Chat With Live !</h3>
            <p className="mt-3 text-xs leading-5 text-white/85">
              Our support team is online and ready to help. Ask us anything
              about the product, pricing, or getting started.
            </p>
            <button className="mt-5 w-full rounded-full bg-white py-2 text-sm font-semibold text-orange-600 transition hover:scale-[1.03]">
              LET&rsquo;S CHAT
            </button>
          </div>
        </div>
 
        {/* Right: contact form */}
        <div>
                   <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            <span className="text-orange-600">Reach</span> &amp; Get In Touch
            <br />
            With Us !
          </h2>
 
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
              <input
                type="tel"
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Your number*"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Your Subject*"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
 
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter message"
              rows={6}
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
            />
 
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              SEND MESSAGE
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>



      {/* ============ MAP (sabse niche, footer se pehle) ============ */}
      <section className="border-t border-[#e7e3dc]">
        <div className="h-[360px] sm:h-[460px] w-full">
          <iframe
            title="TecAI office location"
            src="https://www.google.com/maps?q=Mishika+Tower,+201,+Sapna+Sangeeta+Rd,+Sarvoday+Nagar,+Indore,+Madhya+Pradesh+452001&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      
    </div>
  );
}