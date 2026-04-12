import { Link } from "react-router-dom";
import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 text-lg font-bold">Desire Institute</div>
            <p className="text-gray-300 text-sm">
              Transform your physics, transform your future. Expert coaching for NEET & JEE after 10th class.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={16} />
                <a href="tel:+918873399866">+91 88733 99866</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:info@desireinstitute.com">
                  info@desireinstitute.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/adarshbharti1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@desireofphysics7522?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Desire Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
