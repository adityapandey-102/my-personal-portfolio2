// Portfolio data - centralized content management

export const portfolioData = {
  hero: {
    name: "Aditya Pandey",
    role: [
      " A Fullstack Developer.",
      "A Backend Engineer",
      "A Frontend Engineer.",
      "A.I Learner.",
      " A PolyMaths.",
    ],
    tagline:
      "Building scalable, high-performance web applications with clean architecture and modern tooling.",
    subtext:
      "Full Stack Developer with experience in Node.js, Spring Boot, PostgreSQL, and modern frontend frameworks. Focused on API design, performance, and maintainable architecture.",
  },

  about: {
    title: "About Me",
    content: [
      "I'm a Full Stack Developer with hands-on experience building production-ready applications across backend and frontend systems.",
      "I primarily work with Node.js, Express, PostgreSQL, and React-based frameworks, focusing on clean API design, authentication systems, and scalable application structure.",
      "I have experience working in remote teams, collaborating with designers and product stakeholders, and delivering features used in real-world applications.",
      "I value clean code, clear architecture, and performance-oriented development.",
    ],
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Redux Toolkit",
          "React Query",
          "shadcn/ui",
        ],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "Spring Boot (working knowledge)",
          "REST API Design",
          "Authentication & Authorization",
        ],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & DevOps",
        items: [
          "Docker",
          "Git & GitHub",
          "Postman",
          "CI/CD (basic)",
          "AWS S3 & Cognito",
        ],
      },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      {
        company: "House of Khalak (HOK)",
        position: "Full Stack Engineer",
        type: "Freelance",
        startDate: "Sep 2025",
        endDate: "Jan 2026",
        achievements: [
          "Designed and developed backend APIs using Node.js and Express with modular service-based architecture",
          "Implemented authentication and role-based authorization",
          "Optimized PostgreSQL queries for performance and consistency",
          "Built internal dashboard features using React, Tailwind CSS, shadcn/ui, and Redux Toolkit",
          "Used AI-assisted development tools for faster debugging and refactoring",
        ],
      },
      {
        company: "Truman (Via-Casia Brand)",
        position: "Full Stack Engineer",
        type: "Full-time",
        startDate: "Oct 2023",
        endDate: "Apr 2024",
        achievements: [
          "Migrated production frontend from React.js to Next.js",
          "Built bill upload and processing system using AWS S3 and OpenAI APIs, reducing processing time by ~85%",
          "Developed dashboard features including filtering, pagination, and status-based workflows",
          "Integrated OAuth login with Instagram and LinkedIn",
          "Managed deployments and authentication using Firebase Hosting and AWS Cognito",
        ],
      },
      {
        company: "Truman",
        position: "Frontend Developer Intern",
        type: "Internship",
        startDate: "Jul 2023",
        endDate: "Sep 2023",
        achievements: [
          "Improved frontend performance using lazy loading and component optimization",
          "Fixed UI bugs and improved overall UX consistency",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    items: [
      {
        id: 1,
        name: "Acquisition API",
        description:
          "Backend REST API built with Node.js and Express using modular controller-service architecture. Includes authentication, request validation, centralized error handling, and scalable database interactions.",
        tech: ["Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
        links: {
          github: "https://github.com/adityapandey-102/acquisitions",
        },
      },
      {
        id: 2,
        name: "YourCart – E-commerce Platform",
        description:
          "Full-stack e-commerce platform featuring product listing, cart management, order flow, and Razorpay payment integration.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
        links: {
          github: "https://github.com/adityapandey-102/YourCartFrontend",
        },
      },
      {
        id: 3,
        name: "Task Tracker System",
        description:
          "Kanban-style task management system with backend-driven task states and role-based workflows.",
        tech: ["React", "Node.js", "Express", "PostgreSQL"],
        links: {
          github: "https://github.com/adityapandey-102/taskmanagerFrontend",
        },
      },
      {
        id: 4,
        name: "Movies Verse (React Native App)",
        description:
          "Mobile movie discovery app built with React Native, allowing users to browse trending movies, view details, and manage a favorites list using TMDB API integration.",
        tech: ["React Native", "Expo", "TMDB API", "React Navigation"],
        links: {
          github:
            "https://github.com/adityapandey-102/movies-verse-react-native-app",
        },
      },
      {
        id: 5,
        name: "Life Trek Social Media App",
        description:
          "LifeTrek is a Flutter-based Instagram-like social media app with login, posts, profile updates, comments, user search, dark mode, and responsive web UI.",
        tech: ["Flutter", "Cubit", "Cloudinary", "Firebase Auth","Clean Architecture"],
        links: {
          github:
            "https://github.com/adityapandey-102/Life-Trek-Social-Media-App",
        },
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    description:
      "If you'd like to discuss opportunities, collaborations, or projects, feel free to reach out.",
    email: "adityapandeyp1234@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adityapandey-102",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-pandey-0661881ba",
        icon: "linkedin",
      },
      {
        name: "X(Twitter)",
        url: "https://x.com/AdityaP34493702",
        icon: "twitter",
      },
    //   {
    //     name: "LinkedIn",
    //     url: "https://linkedin.com/in/adityapandey",
    //     icon: "linkedin",
    //   }
    ],
  },

  footer: {
    text: "© 2026, Designed and Developed by Aditya Pandey.",
  },
};
