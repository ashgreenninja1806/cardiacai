import { Heart, Github, Linkedin, Twitter } from "lucide-react";

/**
 * Footer Component - Premium Edition
 * Enhanced glassmorphism with smooth gradients and polished styling
 * Design: Dark SaaS UI minimal footer
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-background/50 to-background backdrop-blur-xl">
      <div className="container py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40">
                <Heart className="w-5 h-5 text-cyan-400" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CardiacAI
                </span>
                <p className="text-xs text-foreground/50 font-medium">v1.0</p>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Advanced AI-powered cardiac health monitoring for modern healthcare providers and patients.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Product</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  HIPAA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <p className="text-sm text-foreground/50 font-medium">
              © {currentYear} CardiacAI. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="group p-3 rounded-lg glass-effect border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
