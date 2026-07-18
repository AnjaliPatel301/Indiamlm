import {
  Award,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Users,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    title: "CMMI",
    subtitle: "Level 3 Certified",
  },
  {
    icon: MapPin,
    title: "18+",
    subtitle: "States",
  },
  {
    icon: CalendarCheck,
    title: "7 Years",
    subtitle: "IT Experience",
  },
  {
    icon: ShieldCheck,
    title: "92.1%",
    subtitle: "Satisfied Clients",
  },
  {
    icon: Users,
    title: "8500+",
    subtitle: "Clients",
  },
  {
    icon: Trophy,
    title: "Customer",
    subtitle: "Choice Award",
  },
];

export default function TrustStatsBar() {
  return (
    <div className="w-full bg-white py-6">
      <div className="container-app">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:flex-nowrap md:justify-between">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isLast = index === stats.length - 1;

            return (
              <div key={stat.title} className="flex items-center">
                <div className="flex items-center gap-3 px-4">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="shrink-0 text-gray-500"
                  />
                  <div className="leading-tight">
                    <p className="text-base font-bold text-orange-600">
                      {stat.title}
                    </p>
                    <p className="text-sm text-gray-700">{stat.subtitle}</p>
                  </div>
                </div>

                {!isLast && (
                  <span className="hidden h-10 w-px bg-orange-500/70 md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}