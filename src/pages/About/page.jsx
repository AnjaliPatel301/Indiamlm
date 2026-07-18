import { useState } from "react";
import {
  Users,
  Network,
  Briefcase,
  Cpu,
  ShieldCheck,
  Share2,
  Settings,
  Target,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
   Laptop,Globe,Smartphone,
  Monitor,
  ShoppingCart,
  CreditCard,
  Wallet,
  Link2,
  Bot,
  MessageCircle,
  Video,
  MessagesSquare,
  Palette,
  TrendingUp,
  BarChart3,
  Cloud,
} from "lucide-react";

/* ---------------------------------------------------------- */
/* 1. HERO                                                     */
/* ---------------------------------------------------------- */
function Hero() {
  const stats = [
    { icon: Users, value: "200+", label: "Specialized Consultants" },
    { icon: Network, value: "100%", label: "Customer Satisfaction" },
    { icon: Briefcase, value: "1K+", label: "Completed Cases" },
  ];

  return (
     <section
      className="relative bg-cover pt-20 bg-center bg-slate-900"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0  bg-slate-900/75" />

      <div className="relative mx-auto grid  max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-20 md:pb-32">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            AI Consulting
            <br />
            Services
          </h1>
          <span className="mt-3 block h-1 w-16 bg-orange-600" />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Our expert AI consultants work closely with you to understand
            your unique challenges and objectives.
          </p>
          <button className="mt-7 rounded-md bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-700">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2 px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 rounded-2xl bg-slate-950 px-6 py-8 shadow-2xl md:gap-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Icon className="mb-3 text-orange-500" size={28} />
              <p className="text-2xl font-bold text-white md:text-3xl">{value}</p>
              <p className="mt-1 text-xs text-slate-400 md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 2. ABOUT US                                                 */
/* ---------------------------------------------------------- */
function AboutUs() {
  return (
    <section className="bg-white pb-24 pt-40 md:pt-48">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-tl-[70px] bg-orange-100" />
          {/* About image — apni image ka path daalo */}
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXR8ZW58MHx8MHx8fDA%3D"
            alt="Our team at work"
            className="relative h-80 w-full rounded-tl-[70px] object-cover shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">About Us</h2>
          <span className="mt-3 block h-1 w-14 bg-orange-600" />
          <p className="mt-5 text-sm leading-7 text-slate-500">
            Credibly innovate granular internal or organic sources whereas
            high standards in web-readiness. Energistically scale
            future-proof core competencies vis-a-vis impactful experiences.
          </p>
          <button className="mt-7 rounded-md bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-700">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 3. SERVICES                                                 */
/* ---------------------------------------------------------- */
function Services() {
  const cards = [
    { Icon: ShieldCheck, title: "Secure AI Implementation strategies" },
    { Icon: Share2, title: "Knowledge centralization Solutions" },
    { Icon: Cpu, title: "Business Process Automation" },
    { Icon: Settings, title: "AI implementation" },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-md text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              We Provide Best AI Consulting
            </h2>
            <span className="mt-3 block h-1 w-14 bg-orange-600" />
          </div>
          <button className="rounded-md bg-orange-600 px-6 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-orange-700">
            VIEW ALL SERVICES
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* first card */}
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <ShieldCheck className="mb-4 text-orange-600" size={30} />
            <h3 className="text-base font-semibold text-slate-900">
              {cards[0].title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Credibly innovate granular internal or organic sources.
            </p>
          </div>

          {/* highlighted center card */}
          <div className="rounded-2xl bg-orange-600 p-7 text-white shadow-lg lg:row-span-2">
            <Cpu className="mb-4" size={30} />
            <h3 className="text-base font-semibold">AI-Consulting offerings</h3>
            <p className="mt-2 text-xs leading-5 text-white/85">
              Credibly innovate granular internal or organic sources.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <Share2 className="mb-4 text-orange-600" size={30} />
            <h3 className="text-base font-semibold text-slate-900">
              {cards[2].title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Credibly innovate granular internal or organic sources.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <Network className="mb-4 text-orange-600" size={30} />
            <h3 className="text-base font-semibold text-slate-900">
              {cards[1].title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Credibly innovate granular internal or organic sources.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <Settings className="mb-4 text-orange-600" size={30} />
            <h3 className="text-base font-semibold text-slate-900">
              {cards[3].title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Credibly innovate granular internal or organic sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 4. OUR MISSION & OUR VISION                                 */
/* ---------------------------------------------------------- */
function MissionVision() {
  const items = [
    {
      Icon: Target,
      title: "Our Mission",
      text: "To empower every business with accessible, reliable AI consulting that turns complex technology into practical, measurable outcomes for our clients.",
    },
    {
      Icon: Eye,
      title: "Our Vision",
      text: "To be the most trusted AI consulting partner globally, shaping a future where intelligent systems responsibly elevate how businesses operate and grow.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Mission &amp; Vision
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 bg-orange-600" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-9 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <span className="mt-2 block h-0.5 w-10 bg-orange-600" />
              <p className="mt-4 text-sm leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 5. OUR EXPERTS                                               */
/* ---------------------------------------------------------- */
function OurExperts() {
  const team = [
    { name: "Vinesh Patel", role: "Founder", img: "https://tecai.in/1backend/uploads/services/1783765569824.png" },
    { name: "Ankita Urbe", role: "HR Manager", img: "https://tecai.in/1backend/uploads/services/1783765584660.png" },
    { name: "Niko Anderson", role: "CEO", img: "https://tecai.in/1backend/uploads/services/1783765595731.png" },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Experts</h2>
        <span className="mx-auto mt-3 block h-1 w-14 bg-orange-600" />
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
          Credibly innovate granular internal or organic sources.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map(({ name, role, img }, i) => (
            <div key={i} className="relative">
              <div className="w-full overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg bg-slate-200">
                {/* Expert image — apni image ka path daalo */}
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="relative z-10 -mt-8 mx-auto w-[85%] rounded-xl bg-white px-4 py-4 shadow-md">
                <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
                <p className="mt-1 text-xs text-orange-600">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 5b. MENTORS                                                  */
/* ---------------------------------------------------------- */
const mentors = [
  { name: "Chand Sahil", role: "Head Mentor", color: "#0f172a", offset: "mt-10", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Kabir Adiba", role: "Marketing", color: "#f97316", offset: "-mt-4", img: "https://i.pravatar.cc/150?img=32" },
  { name: "Ethan Mahjeans", role: "Lead Design", color: "#38bdf8", offset: "mt-14", img: "https://i.pravatar.cc/150?img=15" },
  { name: "Cayler Tya", role: "PR Manager", color: "#1e293b", offset: "-mt-2", img: "https://i.pravatar.cc/150?img=45" },
  { name: "Andra Wagera", role: "Senior Manager", color: "#94a3b8", offset: "mt-16", img: "https://i.pravatar.cc/150?img=25" },
  { name: "Aayo Sunmalibar", role: "Manager", color: "#38bdf8", offset: "mt-2", img: "https://i.pravatar.cc/150?img=9" },
  { name: "Haya Aniny", role: "Vice President", color: "#f59e0b", offset: "mt-14", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Fadili Loop Editors", role: "Media Editor", color: "#0f172a", offset: "mt-6", img: "https://i.pravatar.cc/150?img=60" },
];

function MentorAvatar({ name, role, color, offset, index, img }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className={`flex flex-col items-center text-center opacity-0 animate-mentor-in ${offset}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg overflow-hidden flex items-center justify-center text-white font-bold text-sm sm:text-base ring-4 ring-white animate-mentor-float"
        style={{ background: color, animationDelay: `${index * 0.3}s` }}
      >
        {img ? (
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <span
          className="absolute inset-0 items-center justify-center"
          style={{ display: img ? "none" : "flex" }}
        >
          {initials}
        </span>
      </div>
      <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
        {name}
      </p>
      <p className="text-[10px] sm:text-xs text-slate-400">{role}</p>
    </div>
  );
}

function MentorsSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <style>{`
        @keyframes mentorFadeIn {
          from { opacity: 0; transform: translateY(24px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mentorFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .animate-mentor-in {
          animation: mentorFadeIn 0.6s ease-out forwards;
        }
        .animate-mentor-float {
          animation: mentorFloat 4s ease-in-out infinite;
        }
        .animate-mentor-float:hover {
          animation-play-state: paused;
          transform: scale(1.12);
          transition: transform 0.25s ease;
        }
      `}</style>
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-slate-900 leading-snug">
          Meet Our Amazing <br className="hidden sm:block" />
          <span className="text-orange-600">Mentor</span> With Super Skills
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mt-4">
          Meet the passionate minds behind our success — dedicated, experienced, and
          always ready to guide.
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-start gap-x-6 gap-y-10 sm:gap-x-10">
        {mentors.map((m, i) => (
          <MentorAvatar key={m.name} index={i} {...m} />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 6. OUR PROCESS                                               */
/* ---------------------------------------------------------- */
function OurProcess() {
  const steps = [
    { number: "01", title: "Step 1" },
    { number: "02", title: "Step 2" },
    { number: "03", title: "Step 3" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Process</h2>
        <span className="mx-auto mt-3 block h-1 w-14 bg-orange-600" />

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-slate-200 sm:block" />

          {steps.map(({ number, title }, i) => (
            <div key={i} className="relative">
            <p className="mt-2 text-md font-semibold text-orange-600">{number}</p>
        
              <span className="mx-auto mt-2 block h-0.5 w-8 bg-orange-600" />
              <p className="mt-4 text-xs leading-6 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                eiusmod tempor incididunt labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* 7. CASE STUDIES                                              */
/* ---------------------------------------------------------- */
function CaseStudies() {

const ecosystem = [
  {
    title: "MLM Consulting",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    items: [
      "MLM Business Consultation",
      "Compensation Plan Consultation",
      "Business Model Design",
      "Startup Guidance",
      "Legal & Compliance",
      "Growth Strategy",
    ],
  },
  {
    title: "MLM Software Development",
    icon: Laptop,
    color: "from-blue-500 to-cyan-500",
    items: [
      "Custom MLM Software",
      "Binary MLM",
      "Matrix MLM",
      "Unilevel MLM",
      "Hybrid MLM",
      "Investment MLM",
      "Crypto MLM",
      "Custom Compensation Plans",
    ],
  },
  {
    title: "Website Development",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    items: [
      "Corporate Website",
      "MLM Website",
      "Landing Pages",
      "Product Website",
      "Member Portal",
      "Admin Portal",
    ],
  },
  {
    title: "Mobile Application",
    icon: Smartphone,
    color: "from-pink-500 to-purple-500",
    items: [
      "Android App",
      "iOS App",
      "Distributor App",
      "Admin App",
      "E-commerce App",
    ],
  },
  {
    title: "Desktop Application",
    icon: Monitor,
    color: "from-indigo-500 to-violet-500",
    items: [
      "Windows Software",
      "Mac Desktop",
      "Enterprise Solutions",
    ],
  },
  {
    title: "E-Commerce + MLM",
    icon: ShoppingCart,
    color: "from-yellow-500 to-orange-500",
    items: [
      "MLM Shopping Website",
      "Product Management",
      "Cart & Checkout",
      "Inventory",
      "Order Management",
      "Coupons & Offers",
    ],
  },
  {
    title: "Payment Integration",
    icon: CreditCard,
    color: "from-teal-500 to-cyan-500",
    items: [
      "Razorpay",
      "Cashfree",
      "PhonePe",
      "PayU",
      "Stripe",
      "UPI",
      "International Payments",
    ],
  },
  {
    title: "Wallet & Payout",
    icon: Wallet,
    color: "from-lime-500 to-green-500",
    items: [
      "Income Wallet",
      "E-Wallet",
      "Reward Wallet",
      "Withdrawal",
      "Bank Transfer",
      "UPI Payout",
      "Commission Distribution",
    ],
  },
  {
    title: "Third Party Integrations",
    icon: Link2,
    color: "from-sky-500 to-blue-500",
    items: [
      "WhatsApp API",
      "SMS Gateway",
      "Email API",
      "Zoom / Meet",
      "Shipping APIs",
      "CRM",
      "Accounting",
    ],
  },
  {
    title: "AI Automation",
    icon: Bot,
    color: "from-fuchsia-500 to-pink-500",
    items: [
      "AI Chatbot",
      "AI Customer Support",
      "Lead Qualification",
      "Content Generation",
      "Workflow Automation",
      "AI Sales Assistant",
    ],
  },
  {
    title: "Communication Platform",
    icon: MessageCircle,
    color: "from-green-400 to-green-600",
    items: [
      "WhatsApp Messaging",
      "Bulk SMS",
      "Email Campaign",
      "Voice Calls",
      "Video Calls",
      "Push Notifications",
    ],
  },
  {
    title: "Meeting Platform",
    icon: Video,
    color: "from-red-500 to-rose-500",
    items: [
      "Video Meetings",
      "Webinars",
      "Screen Sharing",
      "Team Collaboration",
      "Live Training",
    ],
  },
  {
    title: "Team Communication",
    icon: MessagesSquare,
    color: "from-purple-500 to-indigo-500",
    items: [
      "Team Chat",
      "Broadcast Messages",
      "Group Discussion",
      "Internal Messenger",
      "File Sharing",
    ],
  },
  {
    title: "Creative Studio",
    icon: Palette,
    color: "from-orange-500 to-yellow-500",
    items: [
      "AI Poster Generator",
      "Banner Generator",
      "Social Media Posts",
      "Video Creator",
      "Flyer Designer",
      "Certificate Generator",
    ],
  },
  {
    title: "Marketing & Lead Generation",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    items: [
      "SEO",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "YouTube Marketing",
      "Funnels",
      "Landing Pages",
      "Email Marketing",
      "WhatsApp Marketing",
    ],
  },
  {
    title: "CRM & Business Management",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-500",
    items: [
      "Lead Management",
      "Customer CRM",
      "Distributor CRM",
      "Sales Pipeline",
      "Support Tickets",
      "Analytics",
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    color: "from-slate-500 to-gray-700",
    items: [
      "Cloud Hosting",
      "Dedicated Servers",
      "SSL Security",
      "Daily Backup",
      "Monitoring",
      "Performance Optimization",
    ],
  },
];

  return (
   <section className="bg- py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-orange-400 font-semibold uppercase tracking-widest">
            Complete Business Solution
          </span>

          <h2 className="text-5xl text-black font-bold text-blck mt-4">
            Complete MLM Ecosystem Services
          </h2>

          <p className="text-black mt-5 max-w-3xl mx-auto">
            Build, Launch & Scale your MLM Business with our end-to-end
            ecosystem including Software, Mobile Apps, AI Automation,
            E-commerce, CRM, Marketing, Payments, Cloud Infrastructure and
            Business Consulting.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {ecosystem.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="text-black w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-5">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* PAGE                                                         */
/* ---------------------------------------------------------- */
export default function AIConsultingPage() {
  return (
    <main>
      <Hero />
      <AboutUs />
  
        <OurProcess />
      <MissionVision />
      <OurExperts />
      <MentorsSection />
    
     
    </main>
  );
}