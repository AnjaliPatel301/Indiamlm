import Reveal from "@components/common/Reveal";
import { Link } from "react-router-dom";
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
  image:
    "https://i.pinimg.com/1200x/50/81/cf/5081cf61e66fd53517704ab1aabdb4b7.jpg",
  icon: Layers3,
  description:
    "Our Forex MLM Plan is designed for forex trading and investment businesses, featuring automated commission distribution, referral rewards, multi-level earnings, secure wallet management, and real-time transaction tracking for seamless global operations.",
},
{
  title: "Decentralized Plan",
  path: "/DetailsPages",
  image:
    "https://i.pinimg.com/1200x/50/81/cf/5081cf61e66fd53517704ab1aabdb4b7.jpg",
  icon: Layers3,
  description:
    "The Decentralized MLM Plan leverages blockchain technology to provide transparent, secure, and trustless network operations. It enables smart contract-based commissions, decentralized member management, and enhanced data security for modern digital businesses.",
},
  {
    title: "Generation Plan",
    path: "/Generation-plan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnTDlsQrE71AQ9hGxXaFz5cdz261bD5s9FHwuQ5T2LdJUhGhyqtVG7ZA&s=10",
    icon: Network,
   description:
  "The Generation Plan rewards leaders based on generations rather than traditional levels. It encourages mentorship, leadership development, and long-term team performance by recognizing active and productive downlines.",
  },
  {
    title: "Hybrid Plan",
    path: "/Hybrid-plan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zDiymGNNrlSXwJNVXAT2vtsEzAQI7z6bmuj-IdGn7Q&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4V79hy4GUT286dyJXMg58eJ51emKSL1KVaSx8efED8fZl9CI3Gs79UxDc&s=10",
    icon: Target,
   description:
  "The Monoline Plan places every new member in a single sequential line without width limitations. It ensures fairness, simplicity, and equal opportunities for all participants regardless of their joining position.",
  },
  {
    title: "Stair Step Breakaway Plan",
    path: "/Stair-step-Breakaway-Plan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzBJwZmcGHc4QKjagWNEmv_VNJQGkj-mki2SIZ_AIXtn_lIgd9sHRgY0&s=10",
    icon: Trophy,
    description:
  "The Stair Step Breakaway Plan promotes leadership by allowing high-performing distributors to break away and build independent teams. It offers advanced incentives, rank advancements, and substantial long-term income opportunities.",
  },
];


export default function AllPlansSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">

        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">MLM Compensation Plans</p>

          <h2 className="mt-3 text-4xl font-bold text-black">
            All MLM Plans We Develop
          </h2>

          <p className="mt-5 text-lg text-ink-400">
            We provide custom MLM software development for every major
            compensation model used across the global direct selling industry.
          </p>
        </Reveal>
<div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {mlmPlans.map((plan, index) => {
    const Icon = plan.icon;

    return (
      <Reveal key={plan.title} delay={index * 0.05}>
      <Link to={plan.path} className="block h-full">
  <div className="group h-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    {/* Plan Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={plan.image}
        alt={plan.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Icon */}
     
    </div>

    {/* Content */}
    <div className="p-7">
      <h3 className="text-2xl font-bold text-black">
        {plan.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-600">
        {plan.description}
      </p>

      <button className="mt-6 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
        View Details
      </button>
    </div>

  </div>
</Link>
      </Reveal>
    );
  })}
</div>

      </div>
    </section>
  );
}