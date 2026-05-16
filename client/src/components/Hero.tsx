import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section Component - Mobile-Optimized Premium Edition
 * Responsive typography, enhanced spacing, animated glows
 * Design: Dark SaaS UI with glassmorphism and neon gradients
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 pb-12 md:pb-20">
      {/* Animated background glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right purple glow */}
        <div className="absolute -top-40 -right-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-purple-600 to-transparent rounded-full blur-3xl opacity-30 glow-orb-pulse" />
        
        {/* Left cyan glow */}
        <div className="absolute top-1/3 -left-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-cyan-600 to-transparent rounded-full blur-3xl opacity-25 glow-orb-pulse-delayed" />
        
        {/* Bottom center glow */}
        <div className="absolute -bottom-40 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-t from-purple-600/30 to-transparent rounded-full blur-3xl opacity-20" style={{ animation: "glowPulse 8s ease-in-out infinite" }} />
      </div>

      {/* Hero Background Image - Low opacity */}
      <div
        className="absolute inset-0 opacity-15 md:opacity-20"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663664175166/SAzKNGzN6Zksxbu3AkyCKi/cardiac-hero-bg-XQ5dJ9szQRGF8PMcP86BKj.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-20">
        {/* Left: Text Content */}
        <div className="space-y-8 md:space-y-12 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full glass-effect border-cyan-500/40 w-fit neon-glow-cyan transition-all duration-300 hover:neon-glow-cyan">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs md:text-sm font-semibold text-cyan-300">AI-Powered Healthcare</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-tight">
              <span className="gradient-text block mb-2 md:mb-3">Clinical Cardiac</span>
              <span className="text-white block">Health Monitoring</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-2xl leading-relaxed font-light">
              Real-time ECG monitoring, AI-powered risk analysis, and automated emergency alerts for comprehensive cardiac health management.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-4">
            <Button
              size="lg"
              className="gap-2 md:gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 font-bold text-base md:text-lg px-6 md:px-8 py-6 md:py-7 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 rounded-xl neon-glow-purple active:scale-95"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              className="gap-2 md:gap-3 glass-effect glass-effect-hover text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 md:py-7 rounded-xl border-cyan-500/40 hover:border-cyan-500/60 neon-glow-cyan active:scale-95 transition-all duration-300"
            >
              Ask AI Assistant
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            </Button>
          </div>
        </div>

        {/* Right: Stats Card */}
        <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          {/* Premium glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/20 rounded-3xl blur-3xl" />

          {/* Stats Card with enhanced glassmorphism */}
          <div className="relative p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl glass-effect border-cyan-500/30 card-lift neon-glow-purple transition-all duration-500">
            {/* Card Header with gradient */}
            <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10 pb-6 md:pb-8 border-b border-white/10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Live Metrics</h3>
                <p className="text-xs md:text-sm text-foreground/60 mt-1">Real-time cardiac data</p>
              </div>
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse shadow-lg shadow-green-400/50" />
            </div>

            {/* Stats Grid */}
            <div className="space-y-3 md:space-y-5">
              {/* Heart Rate */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl glass-effect border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-white/[0.12] cursor-default neon-glow-cyan">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-foreground/60 mb-1 md:mb-2">Heart Rate</p>
                    <p className="text-3xl md:text-4xl font-bold text-cyan-400">72</p>
                    <p className="text-xs text-foreground/50 mt-1">bpm</p>
                  </div>
                  <div className="text-4xl md:text-5xl">❤️</div>
                </div>
              </div>

              {/* SpO2 Level */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl glass-effect border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-white/[0.12] cursor-default neon-glow-purple">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-foreground/60 mb-1 md:mb-2">SpO₂ Level</p>
                    <p className="text-3xl md:text-4xl font-bold text-purple-400">98</p>
                    <p className="text-xs text-foreground/50 mt-1">%</p>
                  </div>
                  <div className="text-4xl md:text-5xl">💨</div>
                </div>
              </div>

              {/* Risk Level */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl glass-effect border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:bg-white/[0.12] cursor-default neon-glow-cyan">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-foreground/60 mb-1 md:mb-2">Risk Level</p>
                    <p className="text-3xl md:text-4xl font-bold text-green-400">Normal</p>
                    <p className="text-xs text-foreground/50 mt-1">Status</p>
                  </div>
                  <div className="text-4xl md:text-5xl">✓</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-xs text-foreground/50 flex items-center justify-between">
              <span>Last updated: 2 minutes ago</span>
              <span className="text-cyan-400/60">● Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
