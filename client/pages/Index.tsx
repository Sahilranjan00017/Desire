import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "918873399866";

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
];

const galleryImages = [
  {
    src: "https://i.postimg.cc/6pwKWLRZ/j96Bc.jpg",
    alt: "Desire Institute classroom session",
  },
  {
    src: "https://i.postimg.cc/VNMwFGj0/New.jpg",
    alt: "Adarsh Bharti teaching at Desire Institute",
  },
  {
    src: "https://img.youtube.com/vi/Xta4cOjGMps/hqdefault.jpg",
    alt: "Physics concept class for NEET and JEE students",
  },
  {
    src: "https://img.youtube.com/vi/7sB2Jrg1OZA/hqdefault.jpg",
    alt: "Indian classroom motivation session for students",
  },
  {
    src: "https://img.youtube.com/vi/8njGfkyoo9M/hqdefault.jpg",
    alt: "Indian school student success session",
  },
  {
    src: "https://img.youtube.com/vi/zBnmmw1-HC4/hqdefault.jpg",
    alt: "Class 12 coaching batch session",
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

export default function Index() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [contactNumber, setContactNumber] = useState("");

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
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(12,74,110,0.18),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#eef6fb_100%)]">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-secondary/20 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
                Trusted coaching for Class 11 and 12 Physics
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl">
                Build a strong NEET & JEE foundation with Desire Institute.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Start early, learn Physics with clarity, and prepare with a focused
                system designed for serious Class 11 and 12 students.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book-demo">
                  <Button size="lg" className="rounded-full px-7">
                    Book Demo
                    <ArrowRight />
                  </Button>
                </a>
                <a href="#courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-primary/20 bg-white/80 px-7 text-primary hover:bg-primary hover:text-white"
                  >
                    Explore Courses
                  </Button>
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">10+</p>
                  <p className="mt-1 text-sm text-slate-600">Years of Physics mentoring</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">11 & 12</p>
                  <p className="mt-1 text-sm text-slate-600">Dedicated batches for focused learning</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">NEET + JEE</p>
                  <p className="mt-1 text-sm text-slate-600">Concept-first preparation strategy</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(8,47,73,0.16)]">
                <img
                  src="https://i.postimg.cc/6pwKWLRZ/j96Bc.jpg"
                  alt="Desire Institute hero visual"
                  className="h-[300px] w-full rounded-[1.5rem] object-cover object-top sm:h-[360px] lg:h-[400px]"
                />
                <div className="absolute left-7 top-7 max-w-[220px] rounded-2xl bg-primary/90 px-5 py-4 text-white shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-foreground/80">
                    Desire Institute
                  </p>
                  <p className="mt-2 text-xl font-bold leading-tight">
                    Smart start for ambitious Physics students.
                  </p>
                </div>
              </div>

              <div
                id="book-demo"
                className="relative -mt-10 mx-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(8,47,73,0.16)] sm:mx-8 sm:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                      Book Demo
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-primary">
                      Send your details on WhatsApp
                    </h2>
                  </div>
                  <div className="rounded-full bg-secondary/10 p-3 text-secondary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>

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

                  <Button type="submit" size="lg" className="w-full rounded-xl">
                    Send on WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
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
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />
              <img
                src="https://img.youtube.com/vi/7sB2Jrg1OZA/hqdefault.jpg"
                alt="Desire Institute teaching session"
                className="relative h-96 w-full rounded-[1.75rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/VNMwFGj0/New.jpg"
                alt="Adarsh Bharti - Physics Teacher"
                className="h-96 w-80 rounded-[1.75rem] object-cover shadow-xl"
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

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Why Choose Desire Institute?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary">{course.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-secondary">
                    {course.subtitle}
                  </p>
                  <p className="mt-4 text-slate-700">{course.description}</p>
                  <a href="#book-demo" className="mt-6 inline-flex w-full">
                    <Button className="w-full rounded-xl">Book Demo</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Students&apos; Success Stories
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm"
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
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="mt-4 italic leading-7 text-slate-700">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Inside Desire Institute
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-64 w-full rounded-[1.5rem] object-cover shadow-lg transition-shadow hover:shadow-xl"
              />
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
            <a href="#book-demo">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 text-primary hover:bg-slate-100"
              >
                Book Demo
              </Button>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-primary"
              >
                Talk on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl">
            Learn from Our Channel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Watch tutorials, preparation advice, and success-focused guidance
            from Adarsh Bharti.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.url}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-lg transition-shadow hover:shadow-xl"
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
                <div className="bg-slate-50 p-4">
                  <p className="font-semibold text-primary">{video.title}</p>
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

          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
            <div className="mt-6 h-96 overflow-hidden rounded-[1.75rem] shadow-lg">
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
