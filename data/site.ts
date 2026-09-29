export const site = {
  name: "KESHIKA",
  mark: "✳",
  location: "Erode, Tamil Nadu",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Websites for local businesses",
    title: "A clear, trustworthy website for your business.",
    description:
      "Thoughtful websites for clinics and businesses in Erode, designed to help people understand what you do and how to reach you.",
    primaryAction: "See the work",
    secondaryAction: "About the approach",
    visualWords: ["Good", "work", "starts", "with clarity."],
    visualIndex: "01 / 05",
    visualFooter: "KESHIKA",
  },
  work: {
    title: "Selected work",
    description: "Personal projects and design concepts. I'm a student building my portfolio, so each project is labelled by what it really is.",
    projects: [
      {
        title: "Dental clinic website concept",
        category: "Healthcare website concept",
        description:
          "A fictional clinic website concept with services, doctor profiles, opening hours and an appointment button. Created for this portfolio, not for a real clinic or client.",
        status: "Design concept",
      },
    ] as {
      title: string;
      category: string;
      description: string;
      status: string;
      image?: string;
      href?: string;
    }[],
  },
  about: {
    title: "I'm Keshika, a B.Tech IT student at Kongu Engineering College, Erode. I'm still learning and building experience, and I take each project seriously.",
    paragraphs: [
      "A good business website should make the next step feel easy. Visitors should quickly understand your services, find the details they need, and know how to get in touch.",
      "The focus is simple: clear information, considered design, and a smooth experience on mobile phones.",
    ],
  },
  skills: {
    title: "A practical approach to web design.",
    description:
      "From the first page structure to the final details, the work stays focused on clarity and ease of use.",
    items: [
      { name: "Next.js", description: "App Router pages and site metadata." },
      { name: "React", description: "Building page interfaces with components." },
      { name: "TypeScript", description: "Typed page components and site content." },
      { name: "HTML", description: "Semantic structure for page sections and links." },
      { name: "CSS", description: "Responsive layouts and visual styling." },
    ] as { name: string; description?: string }[],
    empty: "Skills and services will be listed here.",
  },
  contact: {
    title: "Have a project in mind?",
    description:
      "If you run a clinic or business in Erode and need a website, get in touch to talk through what would be useful.",
    email: "keshika0608@gmail.com",
    whatsapp: "918754381340",
    github: "https://github.com/syntaxelite",
    linkedin: "",
    whatsappMessage: "Hi, I’d like to discuss a website for my business.",
    linkLabels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  footer: "KESHIKA · Independent web design · Erode, Tamil Nadu",
  backToTop: "Back to top",
} as const;
