import { Icon, Row } from "@once-ui-system/core";

import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Muhammad",
  middleName: "Abdul",
  lastName: "Karim",
  name: "Muhammad Abdul Karim",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "abdkarim.muh@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  // languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.lastName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdkarimmuh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdkarim/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/abdkarim.muh",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@abdkarim.muh",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  header: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Muhammad Abdul Karim</>,
  featured: {
    display: true,
    title: (
      <Row vertical="center">
        <Icon name="dot" onBackground="brand-medium" />
        <strong className="ml-4">
          Available for full-time & freelance projects
        </strong>{" "}
      </Row>
    ),
  },
  subline: (
    <>
      Software Engineer with 7+ Years of Experience. Specializing in React,
      Next.js, TypeScript, and Modern Web Technologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  header: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software Engineer with 7+ years of experience specializing in Frontend
        Development. Experienced in building modern, high-performance web
        applications using React, Next.js, JavaScript, and TypeScript. Strong
        expertise in UI/UX development, application performance optimization,
        API integration, and Agile collaboration. Passionate about delivering
        scalable, maintainable, and user-centric digital products that align
        with both business objectives and user needs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Bank INA Perdana Tbk",
        timeframe: "2025 - Present",
        role: "Senior Front End Developer",
        achievements: [
          <>
            Designed and developed scalable, responsive web applications using
            React.js, optimizing performance across devices and low-bandwidth
            environments.
          </>,
          <>
            Implemented core banking functionalities, including account
            management, transactions, loans, and customer interactions, ensuring
            security and efficiency.
          </>,
          <>
            Integrated real-time RESTFull APIs, enabling secure and efficient
            frontend-backend communication.
          </>,
          <>
            Conducted in-depth code reviews and integration testing, improving
            code quality, maintainability, and UI stability.
          </>,
        ],
      },
      {
        company: "PT Bank Rakyat Indonesia (Persero) Tbk",
        timeframe: "2024 - 2025",
        role: "Technical Lead (Tech Lead)",
        achievements: [
          <>
            Led a development team in building and maintaining a secure,
            scalable banking web app, establishing coding standards and best
            practices for maintainability.
          </>,
          <>
            Mentored junior developers and facilitated Agile ceremonies to
            enhance team productivity.
          </>,
          <>
            Collaborated with stakeholders to design and optimize fraud
            prevention, real-time monitoring, biometric validation, and account
            opening features.
          </>,
          <>
            Led migration from legacy systems to modern, scalable platforms,
            improving performance and maintainability.
          </>,
          <>
            Built a CI/CD pipeline with Bitbucket, Bamboo, Docker, and OpenShift
            for automated deployments.
          </>,
          <>
            Troubleshot and resolved system issues, ensuring seamless
            operations.
          </>,
        ],
      },
      {
        company: "PT Bank Rakyat Indonesia (Persero) Tbk",
        timeframe: "2021 - 2023",
        role: "Senior Front End Developer",
        achievements: [
          <>
            Led the migration to modern web platforms using Micro Frontends and
            optimized state management with Vuex / Pinia for seamless feature
            transitions.
          </>,
          <>
            Implemented core banking functionalities, including account
            management, transactions, and customer interactions, ensuring
            security and efficiency.
          </>,
          <>
            Integrated real-time gRPC APIs, enabling secure and efficient
            frontend-backend communication.
          </>,
          <>
            Conducted in-depth code reviews and integration testing, improving
            code quality, maintainability, and UI stability.
          </>,
        ],
      },
      {
        company: "PT Tetamba Studio Kreasi",
        timeframe: "2019 - 2021",
        role: "Full-Stack Developer (Web & Mobile)",
        achievements: [
          <>
            Designed, developed, and maintained full-stack web and mobile
            applications for clients across diverse industries.
          </>,
          <>
            Utilized cloud technologies and DevOps practices to streamline
            deployment, scaling, and maintenance of applications.
          </>,
          <>
            Performed code reviews and mentored junior developers, promoting
            best practices and maintainable code.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor in Informatics",
        description: (
          <>
            Sekolah Tinggi Teknologi Nurul Fikri
            <div>
              Honors : <strong>cum laude</strong> (GPA: 3.77/4.00)
            </div>
          </>
        ),
      },
      {
        name: "Computer and Network Engineering",
        description: <>SMK Negeri 3 Depok</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: (
      //     <>Able to prototype in Figma with Once UI with unnatural speed.</>
      //   ),
      //   tags: [
      //     {
      //       name: "Figma",
      //       icon: "figma",
      //     },
      //   ],
      // },
      {
        title: "Frontend",
        description: <>Frontend web skills</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Tailwindcss",
            icon: "tailwindcss",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Nextjs",
            icon: "nextjs",
          },
          {
            name: "Vue",
            icon: "vue",
          },
          {
            name: "Angular",
            icon: "angular",
          },
        ],
      },
      {
        title: "Mobile",
        description: <>Frontend mobile skills</>,
        tags: [
          {
            name: "React Native",
            icon: "reactnative",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
      },
      {
        title: "Backend",
        description: <>Backend skills</>,
        tags: [
          {
            name: "Golang",
            icon: "golang",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },

          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
      },
      {
        title: "DevOps",
        description: <>DevOps skills</>,
        tags: [
          {
            name: "git",
            icon: "git",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Redhat Openshift",
            icon: "openshift",
          },
          {
            name: "Bamboo",
            icon: "bamboo",
          },
        ],
      },
      {
        title: "UI/UX",
        description: <>UI/UX skills</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Canva",
            icon: "canva",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog - ${person.name}`,
  header: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  header: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
