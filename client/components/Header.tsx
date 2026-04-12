import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">
            Desire Institute
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          <a
            href="#book-demo"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
}
