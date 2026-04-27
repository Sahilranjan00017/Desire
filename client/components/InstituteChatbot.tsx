import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WHATSAPP_NUMBER = "918873399866";

const starterQuestions = [
  "Which classes do you teach?",
  "Tell me about JEE and NEET coaching",
  "Who are the faculty members?",
  "How can I contact the institute?",
];

const facultySummary = [
  "Adarsh Bharti: Founder & CEO, Physics, 10 years",
  "Gautam Singh: Chemistry, 10 years",
  "Shyam Kumar: Mathematics, 10 years",
  "Kamlesh Kumar: Mathematics, 7 years",
  "Kapil Kumar: Physics, 8 years",
  "Vikash Bharti: Biology, 10 years",
  "Nitish Kumar Karn: English, 8 years",
].join("; ");

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text:
      "Hello, I am the Desire Institute assistant. I can help with classes, JEE/NEET preparation, faculty details, classroom discipline, and contact information.",
  },
];

function getBotReply(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("class") ||
    text.includes("7") ||
    text.includes("8") ||
    text.includes("9") ||
    text.includes("10") ||
    text.includes("11") ||
    text.includes("12")
  ) {
    return "Desire Institute supports Class 7 to 10 foundation learning, Class 11 and 12 board preparation, and focused JEE and NEET coaching.";
  }

  if (text.includes("jee") || text.includes("neet") || text.includes("exam")) {
    return "For JEE and NEET, the institute focuses on concept-based teaching, subject specialist faculty, regular tests, revision cycles, and disciplined classroom follow-through.";
  }

  if (text.includes("faculty") || text.includes("teacher") || text.includes("sir")) {
    return `Our faculty team includes ${facultySummary}.`;
  }

  if (text.includes("biology")) {
    return "Biology is handled by Vikash Bharti with 10 years of teaching experience.";
  }

  if (text.includes("physics")) {
    return "Physics is led by Adarsh Bharti, Founder & CEO, with 10 years of experience, along with Kapil Kumar who brings 8 years of physics teaching experience.";
  }

  if (text.includes("chemistry")) {
    return "Chemistry is taught by Gautam Singh, who has 10 years of experience.";
  }

  if (text.includes("math")) {
    return "Mathematics is taught by Shyam Kumar with 10 years of experience and Kamlesh Kumar with 7 years of experience.";
  }

  if (text.includes("english")) {
    return "English is taught by Nitish Kumar Karn, who has 8 years of experience.";
  }

  if (text.includes("discipline") || text.includes("classroom")) {
    return "A well-disciplined classroom is one of the institute’s core strengths. The focus is on attention, regularity, teacher consistency, and a structured academic environment.";
  }

  if (text.includes("contact") || text.includes("phone") || text.includes("whatsapp") || text.includes("call")) {
    return "You can contact Desire Institute on WhatsApp or phone at +91 88733 99866 for counselling and admissions.";
  }

  if (text.includes("why") || text.includes("best") || text.includes("choose")) {
    return "Students choose Desire Institute for experienced faculty, teacher consistency, disciplined classrooms, school-plus-competitive preparation, and close academic guidance.";
  }

  return "I can help with classes 7 to 12, JEE and NEET coaching, faculty details, classroom values, and contact information. Ask me anything specific.";
}

export default function InstituteChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");

  const whatsappLink = useMemo(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Desire Institute, I want counselling.")}`,
    [],
  );

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: current.length + 1, role: "user", text: trimmed },
      { id: current.length + 2, role: "assistant", text: getBotReply(trimmed) },
    ]);
    setDraft("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(draft);
  };

  return (
    <div className="fixed bottom-4 right-3 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="w-[calc(100vw-1.5rem)] max-w-[380px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:w-[calc(100vw-2rem)] sm:rounded-[1.75rem]">
          <div className="flex items-center justify-between bg-[linear-gradient(135deg,#0f3c8a,#1595b8)] px-4 py-4 text-white sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 p-1">
                <img
                  src="/desire-logo.png"
                  alt="Desire Institute logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-semibold">Desire Assistant</div>
                <div className="text-xs text-white/80">Instant institute guidance</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/90 transition hover:bg-white/10"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[58vh] space-y-4 overflow-y-auto bg-slate-50 px-3 py-3 sm:max-h-[420px] sm:px-4 sm:py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-primary hover:text-primary"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-3 sm:p-4">
            <div className="mb-3 flex gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about classes, JEE, NEET, faculty..."
                className="h-11 rounded-xl text-sm"
              />
              <Button type="submit" size="icon" className="h-11 w-11 rounded-xl">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_18px_45px_rgba(15,23,42,0.28)] transition hover:bg-primary/90 sm:h-14 sm:w-14"
        aria-label="Open institute chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
