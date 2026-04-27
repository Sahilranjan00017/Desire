import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[88px] flex-wrap items-center justify-between gap-3 py-3 sm:min-h-[80px] sm:flex-nowrap sm:gap-4 sm:py-0">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/desire-logo.png"
              alt="Desire Institute logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
            />
            <div className="min-w-0">
              <div className="truncate text-base font-extrabold tracking-tight text-primary sm:text-lg">
                Desire Institute
              </div>
              <div className="truncate text-xs font-medium text-slate-500 sm:text-sm">
                A Premier Institute
              </div>
            </div>
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

          <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-3">
            <a
              href="https://wa.me/918873399866"
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full border border-primary/15 bg-white px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-slate-50 sm:flex-none sm:px-5"
            >
              Contact
            </a>
            <Link
              to="/?demo=1"
              className="flex-1 rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:flex-none sm:px-6"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-slate-200/70 pb-3 pt-1 md:hidden">
          <a
            href="#about"
            className="flex-1 rounded-full bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700"
          >
            About
          </a>
          <a
            href="#courses"
            className="flex-1 rounded-full bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="flex-1 rounded-full bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
