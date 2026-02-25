import { Project, SkillCategory, SocialLink, ContactMethod } from './types';

export const personalInfo = {
    name: "Abhinav",
    nickname: "Tyson",
    fullName: "Abhinav (Tyson)",
    initials: "ABHINAV",
    title: "Full Stack Developer",
    email: "management.abhiiinav@gmail.com",
    location: "India",
    status: "Student",
};

export const typingTexts = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "MERN Stack Developer",
    "Problem Solver",
];

export const projects: Project[] = [
    {
        id: 1,
        title: "Chakraax",
        description: "A comprehensive web application showcasing modern design and functionality. Built with cutting-edge technologies for optimal performance.",
        image: "https://api.screenshotmachine.com/?key=demo&url=chakraax.com&dimension=1024x768",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://chakraax.com",
        github: "https://github.com/abhiiinavpc369",
    },
    {
        id: 2,
        title: "Whisp Chat App",
        description: "Real-time chat application with modern UI/UX. Features include instant messaging, user authentication, and responsive design.",
        image: "https://api.screenshotmachine.com/?key=demo&url=whisp-chat-app.onrender.com&dimension=1024x768",
        tags: ["React", "Socket.io", "Node.js", "Express"],
        link: "https://whisp-chat-app.onrender.com",
        github: "https://github.com/abhiiinavpc369",
    },
    {
        id: 3,
        title: "Aryavrat Studios",
        description: "Professional studio website featuring elegant design and smooth user experience. Showcases creative work and services with modern web technologies.",
        image: "https://api.screenshotmachine.com/?key=demo&url=aryavratstudios.netlify.app&dimension=1024x768",
        tags: ["Web Design", "Netlify", "Modern UI", "Responsive"],
        link: "https://aryavratstudios.netlify.app/",
        github: "https://github.com/abhiiinavpc369",
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
        image: "https://api.screenshotmachine.com/?key=demo&url=localhost:3000&dimension=1024x768",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "#",
        github: "https://github.com/abhiiinavpc369",
    },
];

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "JavaScript", level: 92 },
            { name: "TypeScript", level: 80 },
            { name: "HTML/CSS", level: 95 },
            { name: "Tailwind CSS", level: 88 },
        ],
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", level: 88 },
            { name: "Express.js", level: 90 },
            { name: "REST APIs", level: 85 },
            { name: "Socket.io", level: 82 },
        ],
    },
    {
        title: "Database",
        icon: "💾",
        skills: [
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 75 },
            { name: "Firebase", level: 80 },
            { name: "Redis", level: 70 },
        ],
    },
    {
        title: "Tools & Others",
        icon: "🛠️",
        skills: [
            { name: "Git/GitHub", level: 92 },
            { name: "Docker", level: 75 },
            { name: "Vercel/Render", level: 85 },
            { name: "VS Code", level: 95 },
        ],
    },
];

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/abhiiinavpc369",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abhinav-tyson",
        icon: "linkedin",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/abhiiinavpc369",
        icon: "twitter",
    },
];

export const contactMethods: ContactMethod[] = [
    {
        label: "Email",
        value: "management.abhiiinav@gmail.com",
        icon: "envelope",
        link: "mailto:management.abhiiinav@gmail.com",
    },
    {
        label: "GitHub",
        value: "@abhiiinavpc369",
        icon: "github",
        link: "https://github.com/abhiiinavpc369",
    },
    {
        label: "LinkedIn",
        value: "Abhinav (Tyson)",
        icon: "linkedin",
        link: "https://linkedin.com/in/abhinav-tyson",
    },
    {
        label: "Twitter",
        value: "@abhiiinavpc369",
        icon: "twitter",
        link: "https://twitter.com/abhiiinavpc369",
    },
];

export const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "20+" },
];

export const faqs = [
    {
        question: "What technologies do you specialize in?",
        answer: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with Next.js, TypeScript, and modern web technologies. I'm passionate about building scalable, performant applications with clean code.",
    },
    {
        question: "Are you available for freelance work?",
        answer: "Yes! I'm currently available for freelance projects and collaborations. Whether it's a full-stack application, frontend development, or backend API work, I'm open to discussing your project needs.",
    },
    {
        question: "What's your development process?",
        answer: "I follow an agile approach with clear communication at every step. From initial planning and design to development, testing, and deployment, I ensure quality and transparency throughout the project lifecycle.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and requirements. A simple website might take 1-2 weeks, while a full-stack application could take 4-8 weeks. I provide detailed timelines during the planning phase.",
    },
    {
        question: "Do you provide ongoing support after project completion?",
        answer: "Absolutely! I believe in long-term relationships and provide ongoing support, maintenance, and updates as needed. Your success is my success.",
    },
];

export const whyMeReasons = [
    {
        title: "Quality Code",
        icon: "💎",
        description: "I write clean, maintainable code following industry best practices. Every line is crafted with care and attention to detail.",
    },
    {
        title: "Fast Delivery",
        icon: "⚡",
        description: "I respect deadlines and deliver projects on time without compromising quality. Efficient workflows ensure rapid development.",
    },
    {
        title: "Modern Tech Stack",
        icon: "🚀",
        description: "I use cutting-edge technologies and frameworks to build scalable, performant applications that stand the test of time.",
    },
    {
        title: "Clear Communication",
        icon: "💬",
        description: "Regular updates, transparent processes, and open communication ensure you're always in the loop about your project.",
    },
    {
        title: "Problem Solver",
        icon: "🧩",
        description: "I don't just code—I solve problems. I analyze requirements deeply and provide innovative solutions to complex challenges.",
    },
    {
        title: "Continuous Learning",
        icon: "📚",
        description: "The tech world evolves rapidly, and so do I. I'm constantly learning new technologies and improving my skills.",
    },
];
