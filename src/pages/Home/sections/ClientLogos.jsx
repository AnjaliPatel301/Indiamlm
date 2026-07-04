export default function ClientLogos() {
  const clientLogos = [
    {
      name: "Cloudaraa",
      image: "/1.png",
    },
    {
      name: "Bit Mine Trade FX",
      image: "/p1.png",
    },
    {
      name: "SOS Education",
      image: "/p2.png",
    },
     {
      name: "Cloudaraa",
      image: "/1.png",
    },
    {
      name: "Bit Mine Trade FX",
      image: "/p1.png",
    },
    {
      name: "SOS Education",
      image: "/p2.png",
    },
     {
      name: "Cloudaraa",
      image: "/1.png",
    },
    {
      name: "Bit Mine Trade FX",
      image: "/p1.png",
    },
    {
      name: "SOS Education",
      image: "/p2.png",
    },
   
  ];

  const loopedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-white/[0.06] bg-black py-10">
      <div className="container-app">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-600">
          Trusted By Global Businesses
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Gradient */}
  
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16">
          {loopedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex min-w-[180px] items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}