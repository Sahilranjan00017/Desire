import { FormEvent, useEffect, useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  FlaskConical,
  Languages,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

const WHATSAPP_NUMBER = "918873399866";

const heroSlides = [
  {
    src: "/desire-campus.jpg",
    alt: "Desire Institute campus entrance",
    objectPosition: "center center",
  },
  {
    src: "/desire-classroom.jpg",
    alt: "Desire Institute classroom session",
    objectPosition: "center center",
  },
];

const courseCards = [
  {
    title: "Foundation Physics",
    subtitle: "After 10th - Class 11 Start",
    description:
      "A structured launch program for students who want to start NEET and JEE preparation with strong Physics fundamentals.",
    image: "https://img.youtube.com/vi/Xta4cOjGMps/hqdefault.jpg",
  },
  {
    title: "Regular NEET-JEE Physics",
    subtitle: "Class 11 & 12 Complete Syllabus",
    description:
      "Complete topic coverage with class tests, doubt solving, revision planning, and exam-focused practice support.",
    image: "https://img.youtube.com/vi/zBnmmw1-HC4/hqdefault.jpg",
  },
  {
    title: "Doubt-Solving & Crash Courses",
    subtitle: "Intensive Revision & Exam Prep",
    description:
      "Fast-track revision sessions built for board exams, NEET, and JEE with targeted problem solving.",
    image: "https://img.youtube.com/vi/IZRKzYJPPYw/hqdefault.jpg",
  },
];

const academicPrograms = [
  {
    icon: GraduationCap,
    title: "Class 7 to 10 Foundation",
    description:
      "Build strong basics in Maths, Science, English, and disciplined study habits before senior secondary preparation begins.",
  },
  {
    icon: BookOpen,
    title: "Class 11 & 12 Boards",
    description:
      "Clear subject understanding, regular tests, and board-focused preparation designed for consistent academic performance.",
  },
  {
    icon: Target,
    title: "JEE & NEET Preparation",
    description:
      "Concept-based coaching with subject specialists, revision cycles, and targeted practice for competitive exam success.",
  },
];

const valueHighlights = [
  {
    icon: GraduationCap,
    title: "Student to experienced faculty connection",
    description:
      "Students learn directly from experienced teachers who track progress closely and guide every academic stage with clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Well-disciplined classroom culture",
    description:
      "Structured classes, focused batch management, and an academic environment that keeps students attentive and regular.",
  },
  {
    icon: TrendingUp,
    title: "Teacher consistency and follow-through",
    description:
      "Regular classes, doubt support, revision continuity, and steady academic monitoring help students improve without gaps.",
  },
];

const facultyMembers = [
  {
    name: "Gautam Singh",
    subject: "Chemistry Faculty",
    experience: "10 Years Experience",
    image: "/faculty-gautam-singh.jpg",
    accent: FlaskConical,
  },
  {
    name: "Shyam Kumar",
    subject: "Mathematics Faculty",
    experience: "10 Years Experience",
    image: "/faculty-shyam-kumar.jpg",
    accent: TrendingUp,
  },
  {
    name: "Kapil Kumar",
    subject: "Physics Faculty",
    experience: "8 Years Experience",
    image: "/faculty-kapil-kumar.jpg",
    accent: Award,
  },
  {
    name: "Kamlesh Kumar",
    subject: "Mathematics Faculty",
    experience: "7 Years Experience",
    image: "/faculty-kamlesh-kumar.jpg",
    accent: BookOpen,
  },
  {
    name: "Adarsh Bharti",
    subject: "Founder & CEO | Physics Wizard",
    experience: "10 Years Experience",
    image: "/faculty-adarsh-bharti.jpg",
    accent: Star,
  },
  {
    name: "Vikash Bharti",
    subject: "Biology Faculty",
    experience: "10 Years Experience",
    image: "/faculty-vikash-bharti.jpg",
    accent: CheckCircle2,
  },
  {
    name: "Nitish Kumar Karn",
    subject: "English Faculty",
    experience: "8 Years Experience",
    image: "",
    accent: Languages,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "NEET Aspirant",
    image: "https://images.pexels.com/photos/16504587/pexels-photo-16504587.jpeg",
    quote:
      "Adarsh Sir made Physics simple and practical. I now approach NEET-level questions with much more confidence.",
  },
  {
    name: "Arjun Kumar",
    role: "JEE Aspirant",
    image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg",
    quote:
      "Starting early after 10th gave me a real advantage. The small-batch format meant every doubt was properly addressed.",
  },
  {
    name: "Ananya Patel",
    role: "NEET Qualifier",
    image: "https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg",
    quote:
      "The regular tests and concept-first teaching style helped me fix weak areas and improve consistently.",
  },
  {
    name: "Sakshi Kumari",
    role: "Class 10 Top Performer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote:
      "The teachers kept me disciplined and confident. My concepts became much stronger, especially in Science and Maths.",
  },
  {
    name: "Rahul Verma",
    role: "Class 11 JEE Student",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote:
      "The classroom environment is serious and focused. Regular guidance from faculty helped me study with much better consistency.",
  },
  {
    name: "Nidhi Singh",
    role: "Board + NEET Student",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote:
      "I improved both board preparation and NEET confidence together because the teaching stayed clear, practical, and well managed.",
  },
];

const galleryImages = [
  {
    src: "/desire-classroom.jpg",
    alt: "Desire Institute classroom with students in coaching session",
    title: "Focused Classroom Learning",
  },
  {
    src: "/desire-campus.jpg",
    alt: "Desire Institute campus entrance",
    title: "Disciplined Institute Environment",
  },
  {
    src: "https://img.youtube.com/vi/IZRKzYJPPYw/hqdefault.jpg",
    alt: "Live study session for class 12 students",
    title: "Live Study Sessions for Senior Batches",
  },
  {
    src: "https://img.youtube.com/vi/7sB2Jrg1OZA/hqdefault.jpg",
    alt: "Motivation and academic guidance session for students",
    title: "Motivation and Academic Guidance",
  },
  {
    src: "https://img.youtube.com/vi/Xta4cOjGMps/hqdefault.jpg",
    alt: "Physics concept class from Desire Institute YouTube session",
    title: "Concept Sessions for JEE & NEET",
  },
  {
    src: "https://img.youtube.com/vi/zBnmmw1-HC4/hqdefault.jpg",
    alt: "Class 12 coaching batch session from institute channel",
    title: "Board + Competitive Batch Guidance",
  },
];

const videos = [
  {
    title: "Photon: A Packet of Energy for JEE/NEET",
    url: "https://www.youtube.com/embed/Xta4cOjGMps",
  },
  {
    title: "सफल और असफल में क्या फर्क होता है?",
    url: "https://www.youtube.com/embed/7sB2Jrg1OZA",
  },
  {
    title: "10th टॉपर साक्षी की सफलता की कहानी",
    url: "https://www.youtube.com/embed/8njGfkyoo9M",
  },
  {
    title: "New Batch 2026 - 12th English Medium",
    url: "https://www.youtube.com/embed/zBnmmw1-HC4",
  },
  {
    title: "JEET 2.0 Live Classes for 12th",
    url: "https://www.youtube.com/embed/IZRKzYJPPYw",
  },
];

const repeatedTestimonials = [...testimonials, ...testimonials];

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchParams.get("demo") === "1") {
      setIsDemoOpen(true);
    }
  }, [searchParams]);

  const openDemoDialog = () => {
    setIsDemoOpen(true);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDemoOpen(open);

    if (!open && searchParams.get("demo") === "1") {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("demo");
      setSearchParams(nextParams, { replace: true });
    }
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello Desire Institute,",
      "I want to book a demo class.",
      `Name: ${name.trim()}`,
      `Class: ${studentClass}`,
      `Contact Number: ${contactNumber.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="w-full overflow-hidden bg-background">
      <Dialog open={isDemoOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-[460px] rounded-[1.5rem] border-white/80 bg-white p-0 shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:rounded-[1.75rem]">
          <div className="p-6 sm:p-7">
            <DialogHeader className="mb-5 text-left">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                    Free Counselling
                  </p>
                  <DialogTitle className="mt-2 text-2xl font-bold text-primary">
                    Book your seat with Desire Institute
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-sm leading-6 text-slate-600">
                    Our counsellor will contact you within 24 hours.
                  </DialogDescription>
                </div>
                <div className="rounded-full bg-secondary/10 p-3 text-secondary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              </div>
            </DialogHeader>

            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="student-name">
                  Name
                </label>
                <Input
                  id="student-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter student name"
                  required
                  className="h-11 rounded-xl border-slate-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Class
                </label>
                  <Select value={studentClass} onValueChange={setStudentClass} required>
                    <SelectTrigger className="h-11 rounded-xl border-slate-200">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7-10">7-10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="contact-number">
                  Contact Number
                </label>
                <Input
                  id="contact-number"
                  type="tel"
                  inputMode="numeric"
                  value={contactNumber}
                  onChange={(event) => setContactNumber(event.target.value)}
                  placeholder="Enter contact number"
                  required
                  className="h-11 rounded-xl border-slate-200"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-primary">
                Get Free Counselling
              </Button>
            </form>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-primary">Expert Faculty</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-primary">Regular Tests</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-primary">Parent Updates</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`hero-slide absolute inset-0 h-full w-full ${
                activeSlide === index ? "is-active" : ""
              }`}
              style={{ objectPosition: slide.objectPosition }}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,250,255,0.18)_0%,rgba(247,250,255,0.08)_28%,rgba(2,6,23,0.08)_58%,rgba(2,6,23,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_26%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-16 sm:pb-20">
          <div className="flex min-h-[320px] items-end justify-center sm:min-h-[380px] lg:min-h-[calc(100vh-9rem)]">
            <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2 px-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#f7fbff,#eef4ff)] p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Academic Coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                Complete learning support from Class 7 to 12, plus JEE and NEET
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Desire Institute combines school academics, competitive exam preparation,
                and a disciplined study environment so students grow with confidence at every level.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academicPrograms.map((program) => {
                const Icon = program.icon;

                return (
                <article
                  key={program.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{program.description}</p>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Why Parents Trust Us
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Stronger academic values for serious students
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Our system is built around teacher consistency, disciplined classrooms,
              and close student-faculty guidance so preparation remains focused and measurable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                A focused place to learn Physics the right way.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Desire Institute is built for students who want to begin serious
                NEET and JEE preparation with discipline, conceptual clarity, and
                strong Physics fundamentals.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We keep the learning environment direct and personal so students
                understand every concept properly instead of memorizing formulas
                without depth.
              </p>
            </div>
            <div className="order-1 relative lg:order-2">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-secondary/10 blur-2xl sm:h-28 sm:w-28" />
              <img
                src="/desire-classroom.jpg"
                alt="Desire Institute classroom session"
                className="relative h-[280px] w-full rounded-[1.75rem] object-cover object-center shadow-xl sm:h-[360px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/faculty-adarsh-bharti.jpg"
                alt="Adarsh Bharti - Physics Teacher"
                className="h-[320px] w-full max-w-[340px] rounded-[1.75rem] object-cover object-top shadow-xl sm:h-[420px]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Meet The Mentor
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                Adarsh Bharti
              </h2>
              <p className="mt-2 text-lg font-semibold text-secondary">
                Physics Faculty | NEET & JEE Expert | 10+ Years Experience
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Adarsh Bharti is known for explaining difficult Physics topics in
                a clear, practical, student-friendly way that helps learners build
                confidence from the basics.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                His teaching approach is built around concept mastery, problem
                solving, and long-term exam readiness for students targeting NEET
                and JEE.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Our Best Faculty
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Experienced subject experts guiding every student with consistency
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Our faculty team brings subject depth, classroom discipline, and practical
              teaching methods to help students perform in school exams and competitive exams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {facultyMembers.map((member) => {
              const Icon = member.accent;

              return (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-[1.85rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-80 w-full object-cover object-top"
                    />
                  ) : (
                    <div className="relative flex h-80 items-end overflow-hidden bg-[linear-gradient(145deg,#dbeafe,#eff6ff)] p-6">
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.24),transparent_52%)]" />
                      <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="relative w-full rounded-[1.5rem] border border-white/80 bg-white/88 p-5 shadow-lg backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                          Faculty Profile
                        </p>
                        <p className="mt-3 text-2xl font-bold text-primary">{member.name}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-600">{member.subject}</p>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          Professional faculty profile will be added here soon. Current details remain active for admissions and counselling.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {member.experience}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-primary">{member.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-secondary">{member.subject}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Why Choose Desire Institute?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <TrendingUp size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">
                Strong Foundation for NEET & JEE
              </h3>
              <p className="mt-3 text-slate-700">
                Build conceptual strength from the start so advanced topics become easier later.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">Conceptual Teaching</h3>
              <p className="mt-3 text-slate-700">
                We explain the logic behind each idea so students learn with understanding, not guesswork.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <Users size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">Small Batches</h3>
              <p className="mt-3 text-slate-700">
                Smaller groups mean better doubt support, more interaction, and closer academic tracking.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <Award size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">Regular Tests & Practice</h3>
              <p className="mt-3 text-slate-700">
                Consistent evaluation helps students find weak areas early and improve with structure.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <Star size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">Expert Mentorship</h3>
              <p className="mt-3 text-slate-700">
                Learn under a mentor who understands the preparation path for both NEET and JEE aspirants.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">Clear Progress Tracking</h3>
              <p className="mt-3 text-slate-700">
                Parents and students get a more disciplined academic path instead of unstructured study.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-sky-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start early. Learn clearly. Aim higher.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-100">
            The right guidance after 10th can shape your full academic direction.
            Desire Institute helps students begin that journey with depth,
            discipline, and strong Physics understanding.
          </p>
        </div>
      </section>

      <section id="courses" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Our Courses
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {courseCards.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-primary">{course.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-secondary">
                    {course.subtitle}
                  </p>
                  <p className="mt-4 text-slate-700">{course.description}</p>
                  <Button className="mt-6 w-full rounded-xl" onClick={openDemoDialog}>
                    Book Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Students&apos; Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Real student feedback that reflects the institute&apos;s discipline, teacher
              consistency, and exam-focused learning environment.
            </p>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="testimonial-marquee flex gap-6">
              {repeatedTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="w-[280px] shrink-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:w-[320px] sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        className="fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mt-4 italic leading-7 text-slate-700">
                    "{testimonial.quote}"
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Inside Desire Institute
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              A closer look at the classroom atmosphere, student learning environment,
              and faculty-led sessions that shape daily preparation at Desire Institute.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-64 w-full object-cover"
                />
                <div className="bg-slate-50 p-5">
                  <p className="font-semibold text-primary">{image.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to book a demo class?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-100">
            Share your details once and continue directly on WhatsApp with
            Desire Institute.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={openDemoDialog}
              className="w-full rounded-full bg-white px-8 text-primary hover:bg-slate-100 sm:w-auto"
            >
              Book Demo
            </Button>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-primary sm:w-auto"
              >
                Talk on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Learn from Our Channel
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Explore curated lessons, exam strategy sessions, motivation talks, and
              academic guidance from Adarsh Bharti to support classroom learning beyond campus.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.url}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                    Featured Session
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-primary">{video.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[1.75rem] bg-gradient-to-r from-primary to-sky-900 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-white">
              Follow Us for More Updates
            </h3>
            <p className="mt-4 text-slate-100">
              Subscribe on YouTube and follow on Instagram for Physics tips, exam
              guidance, and student success stories.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/@desireofphysics7522?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-full px-8">
                  Subscribe on YouTube
                </Button>
              </a>
              <a
                href="https://www.instagram.com/adarshbharti1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white bg-white px-8 text-primary hover:bg-slate-100"
                >
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Contact Us
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <MapPin size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Location</h3>
              <p className="mt-3 text-slate-700">
                Shiv Sharan Path, Uttarayan
                <br />
                Kashipur, Samastipur
                <br />
                Bihar 848101, India
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <Phone size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Phone</h3>
              <p className="mt-3 text-slate-700">
                <a href="tel:+918873399866" className="transition-colors hover:text-secondary">
                  +91 88733 99866
                </a>
                <br />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="font-medium text-secondary transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <Mail size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Email</h3>
              <p className="mt-3 text-slate-700">
                <a
                  href="mailto:info@desireinstitute.com"
                  className="transition-colors hover:text-secondary"
                >
                  info@desireinstitute.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-center text-2xl font-bold text-primary">Find Us On Map</h3>
            <div className="mt-6 h-[320px] overflow-hidden rounded-[1.5rem] shadow-lg sm:h-96 sm:rounded-[1.75rem]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.2766206989707!2d86.42506!3d25.877891!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed7a1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sShiv%20Sharan%20Path%2C%20Uttarayan%2C%20Kashipur%2C%20Samastipur%2C%20Bihar%20848101!5e0!3m2!1sen!2sin!4v1706000000000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
