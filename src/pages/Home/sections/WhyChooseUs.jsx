import Reveal from "@components/common/Reveal";
import { Link } from "react-router-dom";
import Trastedby from "./Trastedby";
import Aboutform from "./Aboutform";
import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
 
const techStack = [
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "React Native", slug: "react", color: "61DAFB" },
  { name: "Flutter", slug: "flutter", color: "02569B" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
];
 
const certifications = [
  "ISO 27001",
  "GDPR",
  "OWASP",
  "PCI DSS",
  "MFA",
  "SOC 2",
];
 import {
  GitBranch,
  Grid3X3,
  Network,
  Layers3,
  Workflow,
  Crown,
  Coins,
  ArrowUpCircle,
  Users,
  Repeat,
  Target,
  Trophy,
  ImageOff,
} from "lucide-react";

const mlmPlans = [
  {
    title: "Binary Plan",
    path: "/MLMPlans",
    image: "https://i.pinimg.com/1200x/dd/7c/50/dd7c501e118a859e18f3646efee2c174.jpg",
    icon: GitBranch,
    description:
      "The Binary Plan operates with two legs, left and right, allowing distributors to earn through pairing bonuses and spillover benefits. It is one of the most popular compensation models due to its simplicity, scalability, and strong team-building incentives.",
  },
  {
    title: "Matrix Plan",
    path: "/Matrix-Plans-mlm",
    image: "https://i.pinimg.com/1200x/5e/91/af/5e91af7280205331e699a355b38f8ed1.jpg",
    icon: Grid3X3,
    description:
      "The Matrix Plan follows a fixed width and depth structure, ensuring controlled growth and balanced expansion. It helps organizations manage distributor placement efficiently while providing predictable commission payouts across all levels.",
  },
  {
    title: "Unilevel Plan",
    path: "/Unilevel-Plans-mlm",
    image: "https://i.pinimg.com/1200x/50/81/cf/5081cf61e66fd53517704ab1aabdb4b7.jpg",
    icon: Layers3,
    description:
      "The Unilevel Plan allows unlimited frontline members with commissions distributed across multiple levels. It offers flexibility, straightforward management, and is ideal for businesses focusing on recruitment and product sales growth.",
  },
  {
    title: "Forex Plan",
    path: "/Forex-plan",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    icon: Layers3,
    description:
      "Our Forex MLM Plan is designed for forex trading and investment businesses, featuring automated commission distribution, referral rewards, multi-level earnings, secure wallet management, and real-time transaction tracking for seamless global operations.",
  },
  {
    title: "Decentralized Plan",
    path: "/DetailsPages",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    icon: Layers3,
    description:
      "The Decentralized MLM Plan leverages blockchain technology to provide transparent, secure, and trustless network operations. It enables smart contract-based commissions, decentralized member management, and enhanced data security for modern digital businesses.",
  },
  {
    title: "Generation Plan",
    path: "/Generation-plan",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: Network,
    description:
      "The Generation Plan rewards leaders based on generations rather than traditional levels. It encourages mentorship, leadership development, and long-term team performance by recognizing active and productive downlines.",
  },
  {
    title: "Hybrid Plan",
    path: "/Hybrid-plan",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    icon: Workflow,
    description:
      "The Hybrid Plan combines the strengths of Binary, Matrix, and Unilevel systems into one powerful compensation model. Businesses can customize rewards and structures according to their unique operational requirements and growth strategies.",
  },
  {
    title: "Board Plan",
    path: "/Board-plan",
    image: "https://i.pinimg.com/736x/98/33/66/983366a25448ea1436b74989f67bc398.jpg",
    icon: Crown,
    description:
      "The Board Plan uses a cycling mechanism where members move through different boards to unlock bonuses and rewards. It is designed to create excitement, faster earnings, and continuous engagement among participants.",
  },
  {
    title: "Investment Plan",
    path: "/Investment-plan",
    image: "https://www.dngwebtech.com/images/investment-plan-mlm-software-diagram.jpg",
    icon: Coins,
    description:
      "The Investment Plan focuses on ROI-based earnings where members invest capital and receive predefined returns. It supports flexible investment packages, automated payouts, and comprehensive financial reporting features.",
  },
  {
    title: "Crowdfunding Plan",
    path: "/Crowdfunding-Plan",
    image: "https://i.pinimg.com/1200x/b9/81/8b/b9818be51ebe0aece0611b52b341e15d.jpg",
    icon: ArrowUpCircle,
    description:
      "The Crowdfunding Plan enables peer-to-peer contributions and community-driven growth. Members support each other through structured funding models while benefiting from transparent tracking and automated distribution systems.",
  },
  {
    title: "Donation Plan",
    path: "/Donation-Plan",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/5/512240030/WE/BO/DH/66324564/donation-plan-mlm-software-solution-service.jpg",
    icon: Users,
    description:
      "The Donation Plan is built around helping communities through voluntary contributions and mutual support networks. It emphasizes collaboration, social impact, and sustainable growth through shared participation.",
  },
  {
    title: "Repurchase Plan",
    path: "/Repurchase",
    image: "https://i.pinimg.com/1200x/45/8a/96/458a965f743c3f70dd16446096ec58fb.jpg",
    icon: Repeat,
    description:
      "The Repurchase Plan rewards distributors for recurring purchases and customer retention activities. It encourages long-term engagement, increases product consumption, and strengthens overall business sustainability.",
  },
  {
    title: "Monoline Plan",
    path: "/monoline-plan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: Target,
    description:
      "The Monoline Plan places every new member in a single sequential line without width limitations. It ensures fairness, simplicity, and equal opportunities for all participants regardless of their joining position.",
  },
  {
    title: "Stair Step Breakaway Plan",
    path: "/Stair-step-Breakaway-Plan",
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&q=80",
    icon: Trophy,
    description:
      "The Stair Step Breakaway Plan promotes leadership by allowing high-performing distributors to break away and build independent teams. It offers advanced incentives, rank advancements, and substantial long-term income opportunities.",
  },
];

function PlanImage({ src, alt, IconComp }) {
  const [status, setStatus] = useState("loading"); // loading | loaded | error

  return (
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-white">
      {status !== "error" ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-50 to-gray-100 text-gray-400">
          <ImageOff size={32} />
          <span className="text-xs font-medium">Image unavailable</span>
        </div>
      )}

      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
        <IconComp size={20} className="text-orange-500" />
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  const Icon = plan.icon;
  return (
    <Link to={plan.path} className="block h-full">
      <div className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl">
        <PlanImage src={plan.image} alt={plan.title} IconComp={Icon} />

        <div className="flex h-[calc(100%-theme(spacing.0))] flex-col p-6">
          <h3 className="text-xl font-bold text-black">{plan.title}</h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 line-clamp-4">
            {plan.description}
          </p>

          <button className="mt-5 w-fit rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function AllPlansSection() {
  return (
    <section className="section-pad bg-white">
      <Trastedby />
      <Aboutform />

      <div className="container-app pt-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mt-3 text-4xl font-bold text-orange-500">
            All MLM Plans We Develop
          </h2>

          <p className="mt-5 text-lg text-black">
            We provide custom MLM software development for every major
            compensation model used across the global direct selling
            industry.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mlmPlans.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 0.04}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>



  <section className="bg-white py-16">
      <div className="container-app grid gap-8 lg:grid-cols-2">
        {/* LEFT: Tech stack card */}
        <div className="rounded-2xl bg-gray-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-black md:text-3xl">
            Built With The Latest Tech
          </h3>
 
          <p className="mt-3 text-gray-600">
            Developed using{" "}
            <span className="font-medium text-blue-600">
              modern technologies
            </span>{" "}
            like:
          </p>
 
          <div className="mt-6 flex  items-start justify-between gap-4 overflow-x-auto pb-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex shrink-0 flex-col items-center gap-3"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={tech.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <span className="whitespace-nowrap text-xs font-bold text-orange-500">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
 
          <a
            href="/technology"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            See All Technology
            <ArrowRight size={16} />
          </a>
        </div>
 
        {/* RIGHT: Security card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1A3A] p-8 md:p-10">
          {/* Decorative dotted grid */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(59,130,246,0.5) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 70% 40%, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 70% 40%, black 40%, transparent 80%)",
            }}
          />
 
          {/* Decorative glowing shield */}
          <svg
            viewBox="0 0 300 300"
            className="pointer-events-none absolute -right-6 bottom-0 h-72 w-72 opacity-90 md:h-80 md:w-80"
          >
            <ellipse
              cx="150"
              cy="160"
              rx="110"
              ry="55"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="2"
              transform="rotate(-15 150 160)"
            />
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0B1A3A" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M150 40 L230 75 V150 C230 210 195 250 150 270 C105 250 70 210 70 150 V75 Z"
              fill="url(#shieldGradient)"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <circle cx="150" cy="150" r="18" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <rect x="142" y="163" width="16" height="26" rx="3" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          </svg>
 
          {/* Content */}
          <div className="relative z-10">
            <h3 className="max-w-md text-2xl font-bold text-white md:text-3xl">
              Enterprise-Grade Security & Compliance
            </h3>
 
            <div className="mt-5 flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={14} className="text-white" />
              </span>
              <p className="max-w-sm text-sm leading-6 text-white/80">
                We offer a secure, compliant MLM software with the following
                certifications:
              </p>
            </div>
 
            <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 rounded-full bg-white/10 py-2.5 pl-2.5 pr-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ">
                    <ShieldCheck size={12} className="text-white" />
                  </span>
                  <span className="rounded  px-2 py-0.5 text-xs font-bold text-white">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
 
            
          </div>
        </div>
      </div>
    </section>
    
    </section>
  );
}