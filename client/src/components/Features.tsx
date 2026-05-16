import {
  Activity,
  Brain,
  AlertCircle,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

/**
 * Features Section Component - Mobile-Optimized Premium Edition
 * Responsive typography, enhanced spacing, animated background glows
 * Design: Dark SaaS UI with minimal layout
 */
export default function Features() {
  const features = [
    {
      icon: Activity,
      title: "Real-Time ECG Monitoring",
      description:
        "Continuous electrocardiogram tracking with instant anomaly detection and live waveform visualization.",
      accentColor: "cyan" as const,
    },
    {
      icon: Brain,
      title: "AI Risk Detection",
      description:
        "Machine learning algorithms analyze patterns to predict cardiac risks before they become critical.",
      accentColor: "purple" as const,
    },
    {
      icon: AlertCircle,
      title: "Emergency Alerts",
      description:
        "Automatic notifications to patients and healthcare providers when abnormal patterns are detected.",
      accentColor: "pink" as const,
    },
    {
      icon: Users,
      title: "Doctor Collaboration",
      description:
        "Seamless integration with healthcare providers for real-time consultation and patient management.",
      accentColor: "green" as const,
    },
    {
      icon: FileText,
      title: "Health Reports",
      description:
        "Comprehensive cardiac health reports with historical trends and personalized insights.",
      accentColor: "cyan" as const,
    },
    {
      icon: MessageCircle,
      title: "AI Health Assistant",
      description:
        "Conversational AI providing personalized health guidance and answering cardiac-related questions.",
      accentColor: "purple" as const,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right purple glow */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl glow-orb-pulse" />

        {/* Bottom left cyan glow */}
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-cyan-600/20 to-transparent rounded-full blur-3xl glow-orb-pulse-delayed" />

        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 rounded-full blur-3xl opacity-50" style={{ animation: "glowPulse 8s ease-in-out infinite" }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32 space-y-6 md:space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-tight">
            <span className="gradient-text block mb-2 md:mb-4">Powerful Features</span>
            <span className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">for Modern Healthcare</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Comprehensive cardiac health monitoring powered by cutting-edge AI technology and clinical expertise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-24 lg:mt-32 pt-16 md:pt-24 lg:pt-32 border-t border-white/10">
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Ready to revolutionize cardiac care?
            </h3>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Join healthcare providers worldwide who trust CardiacAI for advanced patient monitoring
            </p>
            <button className="mt-6 md:mt-8 px-6 md:px-10 py-3 md:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-base md:text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 neon-glow-purple">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
