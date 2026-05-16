import { Heart, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Navbar Component - Premium Mobile-Responsive Edition
 * Enhanced glassmorphism with smooth animations and mobile menu
 * Design: Cyberpunk minimalism with medical precision
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-background/40 border-b border-white/10 shadow-2xl neon-glow-purple transition-all duration-300">
      <div className="container flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 neon-glow-cyan">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CardiacAI
            </span>
            <span className="text-xs text-foreground/50 font-medium hidden sm:block">Healthcare Intelligence</span>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#"
            className="text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            Profile
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            AI Assistant
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Desktop Logout Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 neon-glow-purple"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/80 backdrop-blur-xl animate-fade-in-up">
          <div className="container px-4 py-4 space-y-4">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 py-2"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 py-2"
            >
              Profile
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-cyan-400 transition-colors duration-200 py-2"
            >
              AI Assistant
            </a>
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 font-semibold mt-4 neon-glow-purple"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
