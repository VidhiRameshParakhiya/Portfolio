import { Icons } from "@/components/icons";
import { url } from "inspector";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Vidhi Ramesh Parakhiya",
  initials: "DV",
  url: "https://dillion.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a passionate frontend developer with expertise in HTML, CSS,JavaScript and React. I excel at creating responsive, user-friendly interfaces and enjoy designing visually appealing and intuitive user experiences.",
  summary:
  " My primary interest lies in creating responsive, user-friendly interfaces and designing visually appealing, intuitive user experiences. I love UI design and designing web pages, and I am particularly passionate about frontend design. I completed my Master's in Computer Application in 2022 and am currently pursuing a Master's degree in Software Development and Engineering to deepen my expertise. With a keen eye for detail and a love for innovation, I strive to build web applications that not only meet but exceed user expectations. I am always eager to learn new technologies and improve my skills to stay at the forefront of the rapidly evolving field of frontend development."
,
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/VidhiProfile.jpeg",
  
  skills: [
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "Bootsrap",
    "React",
    "Javascript",
    "Figma",
    "Node.js",
    "MYSQL",
    "Ajax",
    "UI/UX"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VidhiRameshParakhiya?tab=repositories",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vidhi-parakhiya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      // X: {
      //   name: "X",
      //   url: "https://www.linkedin.com/in/vidhi-parakhiya/",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
       {
      company: "Fincrux Technologies",
      badges: [],
      href: "https://www.finlatics.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/fincrux.jpeg",
      start: "May 2022",
      end: "Mar 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Virash technologies Internship",
      href: "https://virash.in/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Android development",
      logoUrl: "/virash.jpeg",
      start: "Apr 2018",
      end: "oct 2018",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
   
  ],
  education: [
    {
      school: "Pace University",
      href: "https://www.pace.edu/",
      degree: "Masters in software engineer ",
      logoUrl: "/pace.jpeg",
      start: "Jan 2024",
      end: "Jan 2026",
    },
    {
      school: "Mumbai University",
      href: "https://mu.ac.in/university-of-mumbai-law-academyumla",
      degree: "Masters in Computer Application ",
      logoUrl: "/mumbai.jpeg",
      start: "July 2019",
      end: "July 2022",
    },
    {
      school: "Yashwantrao University",
      href: "https://ycmou.digitaluniversity.ac/",
      degree: "Bachelor's in Computer Application",
      logoUrl: "/ycmou.jpeg",
      start: "Aug 2016",
      end: "May 2019",
    },
  ],
  projects: [
    {
      title: "Coffee Holic",
      href: "https://coffe-holic.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
        // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      "I have developed a coffee e-commerce website using HTML, CSS, and JavaScript. As a passionate coffee enthusiast, I was excited to create a platform where users can easily select and purchase their favorite coffee. The website features an intuitive and visually appealing UI design, allowing users to browse various coffee options, learn about each type, and make their selections effortlessly.",
        technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://coffe-holic.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VidhiRameshParakhiya/CoffeHolic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "video.mp4",
    },
    {
      title: "Amazon UI",
      href: "https://amazon-ui-clone-orcin.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
        "I have created an Amazon clone UI design using HTML and CSS. This project replicates the look and feel of the Amazon website, showcasing my skills in front-end development. The design includes various elements such as the navigation bar, product listings, and footer, all styled to closely match the original Amazon site. This project highlights my ability to create detailed and visually consistent web interfaces.",
      technologies: [
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://amazon-ui-clone-orcin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VidhiRameshParakhiya/Amazon-UI-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "Amazon.mp4",
    },
    {
      title: "Money Tracker UI",
      href: "https://llm.report",
      dates: "April 2024",
      active: true,
      description:
        // "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
     "I have designed a Money Tracker UI application targeted at children using Figma. This application helps kids track their spending and set personal savings goals for future purchases. The user-friendly interface encourages financial literacy by making it easy and fun for children to manage their money and work towards their savings targets.",
        technologies: [
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.figma.com/proto/BtkbH06jQXFaPfFxtUQDX5/Untitled?node-id=18-24&t=IMeJKq1pDb0nb9vw-1",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "MoneyTracker.mp4",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  // hackathons: [
  //    ],
} as const;
