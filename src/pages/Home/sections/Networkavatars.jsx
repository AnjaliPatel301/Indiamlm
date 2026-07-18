import React from "react";

/**
 * NetworkAvatars
 * -----------------------------------------------------------------
 * Center logo circle with real human avatar photos scattered around it,
 * connected by dashed lines. Every avatar gently drifts outward away
 * from the center and drifts back in, on a continuous loop (staggered
 * per node so it feels organic rather than mechanical).
 *
 * Usage:
 *   import NetworkAvatars from "./NetworkAvatars";
 *   <NetworkAvatars />
 *
 * No extra dependencies needed — photos are pulled from pravatar.cc
 * (free placeholder face photos). Swap the `img` values for your own
 * uploaded member photos whenever you're ready — same shape.
 * -----------------------------------------------------------------
 */

// Coordinate space is 940 x 580 — every node's left/top below is a
// percentage of this space, so the whole thing scales responsively
// while the SVG connector lines (same viewBox) always line up.
const W = 940;
const H = 580;
const CENTER = { x: 460, y: 150 };

const RING_COLORS = ["teal", "blue", "coral", "amber"];

const primaryNodes = [
  { id: "p1", x: 237, y: 170, img: 47, ring: 0 },
  { id: "p2", x: 588, y: 164, img: 21, ring: 0 },
  { id: "p3", x: 291, y: 278, img: 12, ring: 1 },
  { id: "p4", x: 460, y: 312, img: 5, ring: 1 },
  { id: "p5", x: 633, y: 274, img: 33, ring: 2 },
  { id: "p6", x: 750, y: 184, img: 14, ring: 2 },
];

const secondaryNodes = [
  { id: "s1", x: 48, y: 231, img: 44 },
  { id: "s2", x: 123, y: 359, img: 26 },
  { id: "s3", x: 237, y: 427, img: 9 },
  { id: "s4", x: 366, y: 481, img: 56 },
  { id: "s5", x: 501, y: 515, img: 30 },
  { id: "s6", x: 683, y: 427, img: 62 },
  { id: "s7", x: 791, y: 353, img: 18 },
  { id: "s8", x: 865, y: 238, img: 51 },
];

// How far each node has to travel from the center to reach its resting
// spot. Expressed as a % of the container WIDTH for both axes on purpose:
// CSS resolves percentage margins (even margin-top) against the
// containing block's width, never its height. Using W as the divisor
// for both ex and ey keeps the geometry correct since the aspect-ratio
// is locked, so this makes every node genuinely burst out from the
// exact center point instead of drifting off on the vertical axis.
function entryOffset(x, y) {
  return {
    ex: ((CENTER.x - x) / W) * 100,
    ey: ((CENTER.y - y) / W) * 100,
  };
}

function pct(v, axis) {
  return `${(v / (axis === "x" ? W : H)) * 100}%`;
}

function avatarUrl(id) {
  return `https://i.pravatar.cc/150?img=${id}`;
}

const NetworkAvatars = () => {
  return (
    <div className="na-wrap">
      <style>{`
        .na-wrap{
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: ${W} / ${H};
          margin: 0 auto;
        }
        .na-lines{
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .na-line{
          stroke: #22c55e;
          stroke-width: 2;
          stroke-dasharray: 6 7;
          fill: none;
          opacity: 0.55;
          animation: na-dash 2.4s linear infinite;
        }
        .na-center{
          position: absolute;
          width: 15%;
          aspect-ratio: 1;
          left: ${pct(CENTER.x, "x")};
          top: ${pct(CENTER.y, "y")};
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #4f7bff, #2148d6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 10px rgba(59,130,246,0.12), 0 8px 24px rgba(33,72,214,0.35);
          animation: na-pulse 3.2s ease-in-out infinite;
          z-index: 3;
        }
        .na-center svg{ width: 42%; height: 42%; }
        .na-node{
          position: absolute;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          overflow: visible;
          opacity: 0;
          z-index: 2;
        }
        .na-node img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .na-node.na-primary{ width: 10.5%; }
        .na-node.na-secondary{ width: 7.5%; z-index: 1; }
        .na-ring{
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 3px solid var(--ring-color);
          pointer-events: none;
        }
        .na-ring-teal{ --ring-color: #14b8a6; }
        .na-ring-blue{ --ring-color: #3b82f6; }
        .na-ring-coral{ --ring-color: #fb7360; }
        .na-ring-amber{ --ring-color: #f5b642; }
        .na-ring-green{ --ring-color: #22c55e; }

        @keyframes na-enter{
          0%   { margin-left: var(--ex); margin-top: var(--ey); opacity: 0; transform: translate(-50%, -50%) scale(0.15); }
          70%  { opacity: 1; }
          100% { margin: 0; opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes na-cycle{
          0%   { margin: 0; opacity: 1; transform: translate(-50%, -50%) scale(1); }
          45%  { margin: 0; opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%  { margin-left: var(--ex); margin-top: var(--ey); opacity: 0.2; transform: translate(-50%, -50%) scale(0.15); }
          55%  { margin-left: var(--ex); margin-top: var(--ey); opacity: 0.2; transform: translate(-50%, -50%) scale(0.15); }
          100% { margin: 0; opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes na-pulse{
          0%, 100% { box-shadow: 0 0 0 10px rgba(59,130,246,0.12), 0 8px 24px rgba(33,72,214,0.35); }
          50%      { box-shadow: 0 0 0 16px rgba(59,130,246,0.05), 0 8px 30px rgba(33,72,214,0.45); }
        }
        @keyframes na-dash{
          to { stroke-dashoffset: -26; }
        }

        @media (prefers-reduced-motion: reduce){
          .na-node, .na-center, .na-line{ animation: none !important; }
          .na-node{ opacity: 1 !important; margin: 0 !important; }
        }
      `}</style>

      <svg
        className="na-lines"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[...primaryNodes, ...secondaryNodes].map((n) => (
          <line
            key={n.id}
            className="na-line"
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
          />
        ))}
      </svg>

      <div className="na-center">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill="white" />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x = 12 + 7 * Math.cos(rad);
            const y = 12 + 7 * Math.sin(rad);
            return (
              <React.Fragment key={deg}>
                <line
                  x1="12"
                  y1="12"
                  x2={x}
                  y2={y}
                  stroke="white"
                  strokeWidth="1.4"
                  opacity="0.85"
                />
                <circle cx={x} cy={y} r="1.6" fill="white" />
              </React.Fragment>
            );
          })}
        </svg>
      </div>

      {primaryNodes.map((n, i) => {
        const { ex, ey } = entryOffset(n.x, n.y);
        const enterDelay = i * 0.12;
        const enterDur = 0.9;
        return (
          <div
            key={n.id}
            className="na-node na-primary"
            style={{
              left: pct(n.x, "x"),
              top: pct(n.y, "y"),
              animationName: "na-enter, na-cycle",
              animationDuration: `${enterDur}s, ${5 + (i % 3) * 0.6}s`,
              animationDelay: `${enterDelay}s, ${enterDelay + enterDur}s`,
              animationTimingFunction: "cubic-bezier(.16,.84,.44,1), ease-in-out",
              animationIterationCount: "1, infinite",
              animationFillMode: "both, none",
              ["--ex"]: `${ex}%`,
              ["--ey"]: `${ey}%`,
            }}
          >
            <span className={`na-ring na-ring-${RING_COLORS[n.ring]}`} />
            <img src={avatarUrl(n.img)} alt="" />
          </div>
        );
      })}

      {secondaryNodes.map((n, i) => {
        const { ex, ey } = entryOffset(n.x, n.y);
        const enterDelay = 0.5 + i * 0.12;
        const enterDur = 0.8;
        return (
          <div
            key={n.id}
            className="na-node na-secondary"
            style={{
              left: pct(n.x, "x"),
              top: pct(n.y, "y"),
              animationName: "na-enter, na-cycle",
              animationDuration: `${enterDur}s, ${4.5 + (i % 4) * 0.5}s`,
              animationDelay: `${enterDelay}s, ${enterDelay + enterDur}s`,
              animationTimingFunction: "cubic-bezier(.16,.84,.44,1), ease-in-out",
              animationIterationCount: "1, infinite",
              animationFillMode: "both, none",
              ["--ex"]: `${ex}%`,
              ["--ey"]: `${ey}%`,
            }}
          >
            <span className="na-ring na-ring-green" />
            <img src={avatarUrl(n.img)} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default NetworkAvatars;