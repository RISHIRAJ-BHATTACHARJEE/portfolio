export const technologies = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Bun.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/bun/bun-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Socket IO",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/socketio/socketio-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  // {
  //   name: "GraphQL",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql plain.svg",
  // },
  {
    name: "TailwindCSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Framer Motion",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/framermotion/framermotion-original.svg",
  },
  {
    name: "Appwrite",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/appwrite/appwrite-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vercel/vercel-original.svg",
  },
  {
    name: "Redis",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/redis/redis-original.svg",
  },
  {
    name: "Postman",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postman/postman-original.svg",
  },
  {
    name: "Express",
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/express/express-original.svg",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://avatar.iran.liara.run/public/1",
    content:
      "John's ability to transform our vision into reality was exceptional. His technical expertise and attention to detail made our project a huge success.",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateLabs",
    image: "https://avatar.iran.liara.run/public/2",
    content:
      "Working with John was a game changer for our startup. His full stack expertise and problem solving skills are truly remarkable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DevCorp",
    image: "https://avatar.iran.liara.run/public/3",
    content:
      "John not only delivered outstanding code but also brought innovative solutions to our challenges. His collaborative approach made him a valuable team member.",
  },
];

export const projects = [
  {
    title: "E - Commerce Platform",
    description:
      "A full featured e commerce platform with real time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/e-com.png",
    technologies: [
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
      "Redis",
      "Cloudinary",
    ],
    liveUrl: "https://mern-e-commerce-blush.vercel.app/",
    githubUrl: "https://github.com/RISHIRAJ-BHATTACHARJEE/MERN-E-Commerce",
    features: [
      "Full stack e commerce platform",
      "Secure authentication system (JWT)",
      "Optimized caching with Redis",
      "Cloud storage for images (Cloudinary)",
      "Payment gateway integration (Stripe)",
      "Modern frontend with React & TailwindCSS",
    ],
  },
  {
    title: "Jira Clone",
    description:
      "A project management tool built with Next.js 14, Appwrite SDK, and Hono.js, featuring tasks, Kanban, calendar, user roles, authentication, invites, analytics, and a responsive design with Shadcn UI & TailwindCSS.",
    image: "/jira.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Hono.js",
      "Appwrite",
      "Vercel",
    ],
    liveUrl: "https://jira-clone-three-pearl.vercel.app/",
    githubUrl: "https://github.com/RISHIRAJ-BHATTACHARJEE/jira-clone",
    features: [
      "Project & Task Management",
      "Role-Based Access & Invites",
      "Authentication & Security",
      "Advanced Search & Analytics",
      "Media & Storage Integration",
      "Optimized Performance & UI",
    ],
  },
  {
    title: "Social Book",
    description:
      "A frontend only UI application for a social media app built using pure HTML, CSS & JS ",
    image: "/social-book.png",
    technologies: [
      "HTML 5",
      "CSS3",
      "Vanilla Javascript"
    ],
    liveUrl: "https://social-book-one.vercel.app/",
    githubUrl: "https://github.com/RISHIRAJ-BHATTACHARJEE/socialbook",
    features: [
      "Responsive Web Design",
      "Clean UI and smooth UX"
    ],
  },
  {
    title: "Notion Clone",
    description:
      "Built with the latest Next.js, TypeScript, React, Convex this project replicates Notion, a productivity and note-taking web application. It enables users to securely log in, write, publish, and organize notes.",
    image: "/notion.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Convex",
      "Edgestore",
      "Tailwind CSS",
      "Shadcn",
    ],
    liveUrl: "https://notion-clone-lime-one.vercel.app/",
    githubUrl: "https://github.com/RISHIRAJ-BHATTACHARJEE/notion-clone",
    features: [
      "Real-time Database",
      "Notion-Style Editor & Infinite Hierarchy",
      "Dark/Light Mode & Responsive Design",
      "Authentication & Security",
      "File Management & Recovery",
      "Publish Online",
    ],
  },
  {
    title: "Zoom Clone",
    description:
      "This project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    image: "/zoom.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "getstream",
      "Tailwind CSS",
      "Shadcn",
    ],
    liveUrl: "https://voom-six.vercel.app/",
    githubUrl: "https://github.com/RISHIRAJ-BHATTACHARJEE/voom",
    features: [
      "Authentication & Authorization",
      "Meeting Management",
      "Scheduling & History",
      "Personal Room & Quick Join",
      "Real-time Secure Communication",
      "Comprehensive Meeting Controls",
      "Responsive & Scalable Design",
    ],
  },
];
