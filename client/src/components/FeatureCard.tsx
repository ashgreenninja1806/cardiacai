import { LucideIcon } from "lucide-react";

/**
 * FeatureCard Component - Mobile-Optimized Premium Edition
 * Enhanced glassmorphism with hover lift animation and neon accents
 * Design: Dark SaaS UI with smooth gradients and polished shadows
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: "cyan" | "purple" | "green" | "pink";
  index?: number;
}

const accentColorMap = {
  cyan: {
    border: "border-cyan-500/30",
    hover: "hover:border-cyan-500/60",
    icon: "text-cyan-400",
    glow: "from-cyan-600/30 to-cyan-600/10",
    iconBg: "bg-cyan-500/10 border-cyan-500/30",
    neonClass: "neon-glow-cyan",
  },
  purple: {
    border: "border-purple-500/30",
    hover: "hover:border-purple-500/60",
    icon: "text-purple-400",
    glow: "from-purple-600/30 to-purple-600/10",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    neonClass: "neon-glow-purple",
  },
  green: {
    border: "border-green-500/30",
    hover: "hover:border-green-500/60",
    icon: "text-green-400",
    glow: "from-green-600/30 to-green-600/10",
    iconBg: "bg-green-500/10 border-green-500/30",
    neonClass: "neon-glow-cyan",
  },
  pink: {
    border: "border-pink-500/30",
    hover: "hover:border-pink-500/60",
    icon: "text-pink-400",
    glow: "from-pink-600/30 to-pink-600/10",
    iconBg: "bg-pink-500/10 border-pink-500/30",
    neonClass: "neon-glow-purple",
  },
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accentColor = "cyan",
  index = 0,
}: FeatureCardProps) {
  const colors = accentColorMap[accentColor];

  return (
    <div
      className="group relative h-full"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.12}s both`,
      }}
    >
      {/* Animated glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors.glow}`}
      />

      {/* Premium Card */}
      <div
        className={`relative h-full p-6 md:p-8 lg:p-10 rounded-2xl glass-effect glass-effect-hover border transition-all duration-500 card-lift ${colors.border} ${colors.hover} ${colors.neonClass}`}
      >
        {/* Icon Container */}
        <div
          className={`mb-6 md:mb-8 p-3 md:p-4 w-fit rounded-xl border transition-all duration-300 ${colors.iconBg} group-hover:scale-110 group-hover:shadow-lg`}
          style={{
            boxShadow: `0 0 20px ${
              accentColor === "cyan"
                ? "rgba(0, 240, 255, 0.1)"
                : accentColor === "purple"
                  ? "rgba(168, 85, 247, 0.1)"
                  : accentColor === "green"
                    ? "rgba(34, 197, 94, 0.1)"
                    : "rgba(236, 72, 153, 0.1)"
            }`,
          }}
        >
          <Icon className={`w-6 h-6 md:w-7 md:h-7 ${colors.icon} transition-transform duration-300 group-hover:scale-125`} strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-200 transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4 md:mb-6 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Hover indicator with animation */}
        <div className="flex items-center gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
          <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${colors.icon}`} />
          <span className="text-xs md:text-sm font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors">
            Explore feature
          </span>
        </div>

        {/* Subtle top border accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${
          accentColor === "cyan"
            ? "from-cyan-500 to-transparent"
            : accentColor === "purple"
              ? "from-purple-500 to-transparent"
              : accentColor === "green"
                ? "from-green-500 to-transparent"
                : "from-pink-500 to-transparent"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </div>
  );
}
