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
    title: "What I build, and how",
    intro:
      "Clear, fast websites for clinics and local businesses, designed around what visitors need to find.",
    items: [
      {
        title: "Mobile-first design",
        description:
          "Most patients look up a clinic on their phone first, so every page is designed for small screens before large ones.",
      },
      {
        title: "Clear information architecture",
        description:
          "Services, doctors, opening hours and location are organised so visitors find what they need without having to call.",
      },
      {
        title: "Simple to maintain",
        description:
          "Content is kept in one place, so timings, services or contact details can be updated without touching the design.",
      },
      {
        title: "Fast, readable pages",
        description:
          "Lightweight pages with readable text and clear contrast, built to load quickly on slower connections.",
      },
    ],
    toolsTitle: "Tools",
    tools: ["Next.js", "React", "TypeScript", "HTML", "CSS"],
    learning:
      "Currently learning accessibility and SEO basics.",
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
