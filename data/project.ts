export type Project = {
  id: number;
  title: string;
  img: string;
  des: string;
  live: string;
  github: string;
  status: string;

  iconLists: string[];

  tech: string[];
  features: string[];

  story: {
    problem: string;
    solution: string;
    impact: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Timbre AI",
    img: "/timbre.png",

    des: "AI-powered Text-to-Speech SaaS for generating realistic speech and cloning voices instantly.",

    live: "https://timbre-ai.vercel.app",
    github: "https://github.com/anuj-singal/Timbre_AI",
    status: "Completed",

    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/prisma.png",
      "/postgressql.png"
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Polar"
    ],

    features: [
      "AI-powered text-to-speech with adjustable voice parameters",
      "Zero-shot voice cloning from short samples",
      "Waveform audio player with playback and download",
      "Multi-tenant team-based architecture",
      "Usage-based billing system",
      "Audio generation history tracking"
    ],

    story: {
      problem:
        "Creating high-quality voice content is expensive and requires complex tools or technical expertise.",
      solution:
        "Built an AI-powered platform that enables instant voice generation and cloning using zero-shot models.",
      impact:
        "Simplified advanced AI workflows into a scalable SaaS product enabling faster content creation."
    }
  },

  {
    id: 2,
    title: "Cloudinary Studio",
    img: "/cloudinary.png",

    des: "AI-powered media platform for uploading, editing, and optimizing images and videos.",

    live: "https://cloudinarystudio.vercel.app",
    github: "https://github.com/anuj-singal/CloudinaryStudio",
    status: "Completed",

    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/cloudinaryyy.png",
      "/mongodb.png"
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cloudinary",
      "Framer Motion",
      "MongoDB"
    ],

    features: [
      "Upload and manage images & videos",
      "AI enhancements like background removal",
      "Advanced editing tools (crop, filters, resize)",
      "Video processing tools (trim, compress)",
      "Authentication with Clerk",
      "Download optimized media"
    ],

    story: {
      problem:
        "Media workflows are fragmented across multiple tools for uploading and editing.",
      solution:
        "Built a unified platform integrating Cloudinary APIs with AI-powered editing tools.",
      impact:
        "Reduced tool fragmentation and improved efficiency for developers and creators."
    }
  },

  {
    id: 3,
    title: "Chatzy",
    img: "/chatzy.png",

    des: "Real-time chat application with secure authentication and instant messaging.",

    live: "https://chatzy-0u8l.onrender.com",
    github: "https://github.com/anuj-singal/chatzy",
    status: "Completed",

    iconLists: [
      "/react.png",
      "/node.png",
      "/mongodb.png",
      "/javascript.png"
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],

    features: [
      "Real-time messaging with WebSockets",
      "JWT-based authentication",
      "Online/offline presence tracking",
      "Image uploads with cloud storage",
      "Typing indicators and notifications",
      "API rate limiting"
    ],

    story: {
      problem:
        "Real-time communication systems are difficult to build and scale.",
      solution:
        "Developed a chat platform using WebSockets with secure authentication.",
      impact:
        "Delivered a production-ready messaging system with scalable backend architecture."
    }
  },

  {
    id: 4,
    title: "Vidtube",
    img: "/vidtube.png",

    des: "Backend system for a video streaming platform with social features.",

    live: "",
    github: "https://github.com/anuj-singal/Vidtube",
    status: "Completed",

    iconLists: [
      "/node.png",
      "/mongodb.png",
      "/javascript.png"
    ],

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary"
    ],

    features: [
      "Video upload and streaming system",
      "User authentication",
      "Comments, likes, subscriptions",
      "User playlists",
      "Cloud media storage",
      "Custom backend middleware"
    ],

    story: {
      problem:
        "Building scalable video platforms requires handling media and user interactions efficiently.",
      solution:
        "Built a backend system supporting uploads, streaming, and social features.",
      impact:
        "Created a scalable architecture for media-heavy applications."
    }
  }
];