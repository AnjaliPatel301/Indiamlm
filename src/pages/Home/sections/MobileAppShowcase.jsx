import { useState } from "react";
import {
  ClipboardList,
  LayoutDashboard,
  Share2,
  Bell,
  IndianRupee,
  FileText,
} from "lucide-react";

/**
 * 👉 SWAP YOUR PHONE-SCREEN IMAGES HERE.
 * Just replace each value with the path/URL of your real screenshot
 * (e.g. "/images/app/registration.png"). Nothing else needs to change —
 * the phone frame below will automatically show whichever image
 * matches the active tab.
 */
const SCREEN_IMAGES = {
  registration: "/11.png",
  dashboard: "/12.png",
  network: "/13.png",
  notifications: "/15.png",
  commission: "/14.png",
  reports: "/17.png",
};

const TABS = [
  {
    id: "registration",
    label: "Registration",
    icon: ClipboardList,
    title: "Registration",
    intro:
      "Welcome to the ultimate mobile app for direct selling! By registering, you unlock access to powerful features designed to optimize your selling experience. Here's what you can expect:",
    steps: [
      {
        step: "Step 1: Create Your Account",
        points: [
          {
            label: "Sign Up Using Your Email Or Social Media Accounts:",
            text: "The easiest way to sign up is by using your email or connecting your current social media accounts like Facebook or Google for a quick and simple registration process.",
          },
          {
            label: "Enter Your Personal Information:",
            text: "Provide your name, email, phone number, and preferred username to create a personalized account.",
          },
        ],
      },
      {
        step: "Step 2: Set Up Your Profile",
        points: [
          {
            label: "Add Your Profile Picture:",
            text: "Enhance your account by adding a profile picture that reflects who you are in the app.",
          },
          {
            label: "Customize Your Bio And Preferences:",
            text: "Briefly describe yourself and your sales journey. Select your preferred language and region to tailor the app experience.",
          },
        ],
      },
      {
        step: "Step 3: Verify Your Email",
        points: [
          {
            label: "Email Confirmation:",
            text: "To keep your account secure and fully functional, please verify your email address. We will send you a confirmation email — simply click the link to activate your account.",
          },
          {
            label: "Secure Your Account:",
            text: "For extra security, you can set up two-factor authentication.",
          },
        ],
      },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    intro:
      "Your dashboard is mission control for your business. The moment you log in, every number that matters is right in front of you:",
    steps: [
      {
        step: "Step 1: See Your Business At A Glance",
        points: [
          {
            label: "Real-Time Performance Cards:",
            text: "Track sales, active team members, and monthly earnings the instant they update — no refresh needed.",
          },
          {
            label: "Goal Progress Bars:",
            text: "Visualize how close you are to your next rank or bonus target.",
          },
        ],
      },
      {
        step: "Step 2: Personalize Your View",
        points: [
          {
            label: "Rearrange Widgets:",
            text: "Drag and drop the cards that matter most to you to the top of your screen.",
          },
          {
            label: "Choose A Reporting Period:",
            text: "Switch between daily, weekly, and monthly views in one tap.",
          },
        ],
      },
    ],
  },
  {
    id: "network",
    label: "My Network",
    icon: Share2,
    title: "My Network",
    intro:
      "Grow and manage your downline without ever opening a spreadsheet. My Network gives you a live map of your entire team:",
    steps: [
      {
        step: "Step 1: Visualize Your Team",
        points: [
          {
            label: "Interactive Genealogy Tree:",
            text: "Pinch, zoom, and tap through every level of your downline to see who's active and who needs support.",
          },
          {
            label: "Rank & Level Badges:",
            text: "Instantly spot each member's current rank right on the tree.",
          },
        ],
      },
      {
        step: "Step 2: Support Your Team",
        points: [
          {
            label: "Direct Messaging:",
            text: "Reach out to any team member straight from their profile card.",
          },
          {
            label: "Performance Alerts:",
            text: "Get notified when a team member is close to a promotion or falling behind on activity.",
          },
        ],
      },
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    title: "Notifications",
    intro:
      "Never miss a sale, a signup, or a payout. Notifications keep you in the loop the moment something happens:",
    steps: [
      {
        step: "Step 1: Stay Informed",
        points: [
          {
            label: "Push Alerts:",
            text: "Get instant updates for new orders, team joins, and commission payouts.",
          },
          {
            label: "Smart Grouping:",
            text: "Related updates are grouped together so your feed stays easy to scan.",
          },
        ],
      },
      {
        step: "Step 2: Take Control",
        points: [
          {
            label: "Custom Preferences:",
            text: "Choose exactly which events you want to be notified about.",
          },
          {
            label: "Quiet Hours:",
            text: "Mute non-urgent alerts during the hours that work for you.",
          },
        ],
      },
    ],
  },
  {
    id: "commission",
    label: "Commission",
    icon: IndianRupee,
    title: "Commission",
    intro:
      "Understand exactly how you're earning, down to the last rupee. The Commission tab breaks every payout into plain, transparent numbers:",
    steps: [
      {
        step: "Step 1: Track Your Earnings",
        points: [
          {
            label: "Live Commission Ledger:",
            text: "See every bonus type — direct, level, matching, and rank — updated as it's earned.",
          },
          {
            label: "Payout Breakdown:",
            text: "Tap any entry to see exactly which sale or team activity generated it.",
          },
        ],
      },
      {
        step: "Step 2: Get Paid",
        points: [
          {
            label: "Withdrawal Requests:",
            text: "Request a payout to your linked bank account or wallet in a few taps.",
          },
          {
            label: "Payout History:",
            text: "Keep a complete, searchable record of every payment you've received.",
          },
        ],
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
    title: "Reports",
    intro:
      "Make decisions backed by data. Reports turns your raw activity into clear, exportable insights:",
    steps: [
      {
        step: "Step 1: Analyze Performance",
        points: [
          {
            label: "Sales & Growth Charts:",
            text: "Compare your performance across weeks, months, or custom date ranges.",
          },
          {
            label: "Team Activity Reports:",
            text: "See which team members are driving the most volume.",
          },
        ],
      },
      {
        step: "Step 2: Share & Export",
        points: [
          {
            label: "One-Tap Export:",
            text: "Download any report as a PDF or spreadsheet to share with your team.",
          },
          {
            label: "Scheduled Reports:",
            text: "Set reports to land in your inbox automatically every week or month.",
          },
        ],
      },
    ],
  },
];

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative mx-auto h-[560px] w-[280px]">
      {/* Bezel */}
      <div className="absolute inset-0 rounded-[2.75rem] bg-gray-900 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-24 h-8 w-1 rounded-l bg-black" />
        <div className="absolute -left-[2px] top-36 h-14 w-1 rounded-l bg-black" />
        <div className="absolute -right-[2px] top-28 h-16 w-1 rounded-r bg-black" />

        {/* Screen */}
        <div className="absolute inset-[10px] overflow-hidden rounded-[2.1rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-black px-5 pb-1.5 pt-2 text-[10px] font-medium text-white">
            <span>9:41</span>
            <span className="tracking-wide">SAMSUNG</span>
            <span>●●●</span>
          </div>

          {/* Screenshot / content area — swap the `src` in SCREEN_IMAGES above */}
          <div className="h-[calc(100%-26px)] w-full bg-gray-50">
            {src ? (
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="hidden h-full w-full flex-col items-center justify-center gap-2 text-center text-black"
              style={{ display: src ? "none" : "flex" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-200 text-2xl font-bold text-black">
                {alt?.charAt(0)}
              </div>
              <p className="px-6 text-xs font-medium">{alt} screen preview</p>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gray-700" />
      </div>
    </div>
  );
}

export default function FeatureShowcaseSection() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId);

  return (
    <section className="bg-white py-16">
      <div className="container-app">
        <h2 className="text-center text-3xl font-bold text-orange-600 md:text-4xl">
          Top Features For A Direct Selling Mobile App
        </h2>

        {/* Tabs */}
        <div className="mt-10 flex justify-center border-b border-gray-200">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-orange-600 text-orange-600"
                      : "border-transparent text-black hover:text-gray-800"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Left: text content */}
          <div>
            <h3 className="text-xl font-bold text-black">{active.title}</h3>
            <p className="mt-3 text-sm leading-6 text-black">{active.intro}</p>

            <ul className="mt-5 space-y-4">
              {active.steps.map((s) => (
                <li key={s.step}>
                  <p className="text-sm font-semibold text-blue-700">
                    • {s.step}
                  </p>
                  <ul className="ml-5 mt-2 space-y-2">
                    {s.points.map((p) => (
                      <li key={p.label} className="text-sm leading-6 text-black">
                        <span className="font-semibold text-orange-600">
                          ◦ {p.label}
                        </span>{" "}
                        {p.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: phone mockup — swap image via SCREEN_IMAGES[active.id] */}
          <PhoneFrame src={SCREEN_IMAGES[active.id]} alt={active.title} />
        </div>
      </div>
    </section>
  );
}