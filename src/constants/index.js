const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  /* {
    id: 1,
    img: "/icons/wifi.svg",
  }, */
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari"
  },
  {
    id: 3,
    img: "/icons/music.svg",
    type: "music",
  },
  {
    id: 4,
    img: "/icons/user.svg",
    type: "finder",
    action: "about",
  },
  /* {
    id: 5,
    img: "/icons/mode.svg",
  }, */

];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "vscode",
    name: "Deal Drop",
    icon: "deal-drop.png",
    canOpen: true,
  },
  {
    id: "music",
    name: "Music", // was "Trash"
    icon: "music.png",
    canOpen: true,
  },
  {
    id: "ner",
    name: "Weather App",
    icon: "weather.webp", // You can update this later
    canOpen: true,
  },
  {
    id: "trash", // unique id to avoid duplicate keys in Dock
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
    action: "trash",
  },
];

const blogPosts = [
  
  {
    id: 2,
    date: "July 5, 2025",
    title: "Mastering Frontend Performance: Speed Up Your Website",
    image: "/images/blog3.png",
    link: "https://swastiksharma15.github.io/Portfolio/blogs.html#post-4",
  },
  {
    id: 1,
    date: "June 10, 2025",
    title:"Developing Dynamic Web Experiences Using React",
    image: "/images/blog1.png",
    link: "https://swastiksharma15.github.io/Portfolio/blogs.html#post-1",
  },
  {
    id: 3,
    date: "May 20, 2025",
    title: "CSS Animations: Bringing Your Website to Life",
    image: "/images/blog2.png",
    link: "https://swastiksharma15.github.io/Portfolio/blogs.html#post-3",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "Vite", "Typescript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "GSAP", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Next.js", "Python","REST APIs",],
  },
  {
    category: "Database",
    items: ["SQL", "Postgress SQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub","Axios", "Postman", "Figma"],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Aaditya9187",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/aaditya-chhatraliya-b5889b3b0/",
  },
  {
    id: 3,
    text: "Discord",
    icon: "/icons/discord.svg",
    bg: "#ff866b",
    link: "https://discord.gg/JZ7AeCMF",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal2.jpg",
  },
  {
    id: 2,
    img: "/images/gal3.jpg",
  },
  {
    id: 3,
    img: "/images/gal5.png",
  },
  {
    id: 4,
    img: "/images/gal4.webp",
  },
  {
    id: 5,
    img: "/images/gal1.jpg",
  },
  {
    id: 6,
    img: "/images/gal6.jpg",
  },
  {
    id: 7,
    img: "/images/wallpaper.png",
  },
  {
    id: 8,
    img: "/images/gal7.jpg",
  },
  {
    id: 9,
    img: "/images/gal8.jpg",
  },
  {
    id: 10,
    img: "/images/gal15.jpg",
  },
  {
    id: 11,
    img: "/images/gal10.jpg",
  },
  {    
    id: 12,
    img: "/images/gal11.jpg",
  },
  {
    id: 13,
    img: "/images/gal12.jpg",
  },
  {
    id: 14,
    img: "/images/gal13.jpg",
  },
  {
    id: 15,
    img: "/images/gal14.jpg",
  },
  {
    id: 16,
    img: "/images/gal9.webp",
  },
  {
    id: 17,
    img: "/images/gal16.jpg",
  },
  {
    id: 18,
    img: "/images/gal17.jpg",
  }
];

const songs = [
  {
    id: 1,
    title: "",
    author: "",
    src: "/audio/",
    cover: "/images/cover.jpg",
  },
];


export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  songs,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [

    // ▶ Project 1 Cyberpunk
    {
      id: 5,
      name: "Cyberpunk",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-45 right-80 ",
      windowPosition: "top-[10vh] left-15", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Cyberpunk Edgerunners.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A cinematic tribute website inspired by Cyberpunk: Edgerunners, built to capture the neon chaos and raw emotion of Night City.",
            "Instead of a simple fan page, it delivers an immersive experience with animated visuals, dynamic video transitions, and a UI styled straight out of the Cyberpunk universe.",
            "Think of it like stepping into Lucy and David’s world glitchy, vibrant, and alive with every interaction echoing the feel of the anime.",
            "It’s built with React, GSAP, and Tailwind CSS, ensuring smooth animations, fast performance, and a visually striking interface across all screen sizes.",
          ],
        },
        {
          id: 2,
          name: "CyberpunkEdgerunners.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cyber-punk-seven-beta.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Cyberpunk Edgerunners.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/cyberpunk.png",
        },
        {
          id: 5,
          name: "Cyberpunk Edgerunners.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/CyberPunk.git",
          position: "top-60 right-70",
        },
      ],
    },

    // ▶ Project 2 Gocart
    {
      id: 6,
      name: "GoCart",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-0", // icon position inside Finder
      windowPosition: "top-[25vh] left-30",
      children: [
        {
          id: 1,
          name: "GoCart Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is a full-featured Multi-Vendor E-Commerce Platform built with Next.js, developed and designed to deliver a fast and frictionless shopping experience.",
            "It integrates secure authentication using Clerk, background job processing with Inngest, and cloud-based image management via ImageKit. All application data is stored in a PostgreSQL database powered by Neon, ensuring reliability and performance.",
            "Users can create their own stores and sell products online. Every new store requires admin approval, maintaining platform quality and trust. Seamless login and account management are handled using Clerk, ensuring a smooth and secure user experience.",
            "A powerful admin panel allows administrators to: Approve or reject vendor stores, Manage discount coupons, Monitor platform activity, Control vendor permissions.",
            "Premium plans are implemented through subscription billing, enabling vendors to unlock advanced features. Product purchases are processed securely using Stripe, supporting modern and reliable payment workflows. After development, the application is deployed for free on Vercel, making it accessible online with high performance and global availability.",
            "Think of it as a lightweight Amazon-style interface built specifically for speed, usability, and real-world performance.",
          ],
        },
        {
          id: 2,
          name: "GoCart.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gocart-blush.vercel.app",
          position: "top-10 right-45",
        },
        {
          id: 4,
          name: "GoCart.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/GoCart.png",
        },
        {
          id: 5,
          name: "GoCart.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/gocart.git",
          position: "top-65 right-30",
        },
      ],
    },

    // ▶ Project 3 Fit Track
    {
      id: 7,
      name: "Fit Track",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[40vh] left-15",
      children: [
        {
          id: 1,
          name: "FitTrack.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-30",
          description: [
            "This project is an AI-powered fitness tracking web application that is built to help users manage their health through smart technology and modern design.",
            "It allows users to set fitness goals, track calories consumed and burned, log workouts, and manage their profiles. A key feature is AI-based food analysis using Google Gemini AI, which enables users to upload food images and automatically calculate calorie intake.",
            "The frontend is developed with React and Tailwind CSS by Tailwind Labs, while the backend is powered by Strapi. The application is deployed on Vercel for fast and reliable performance.",
            "This project demonstrates my ability to build full-stack, AI-integrated applications with a strong focus on usability, scalability, and real-world impact.",
          ],
        },
        {
          id: 2,
          name: "FitTrack.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fittrack-live.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "FitTrack.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-67 right-85",
          imageUrl: "/images/FitTrack.png",
        },
        {
          id: 5,
          name: "FitTrack.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/FitTrack.git",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4 Spott
    {
      id: 8,
      name: "Spott",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-55",
      windowPosition: "top-[55vh] left-30",
      children: [
        {
          id: 1,
          name: "Spott.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Event Organizer is an intelligent web platform designed to simplify and modernize the way events are planned, managed, and executed. It uses artificial intelligence to automate key processes, making event management more efficient and accessible for individuals, startups, and professional organizers.",
            "The platform enables users to create customized event pages, schedules, and agendas with AI-powered suggestions. It also provides a secure ticket booking system with QR code generation, allowing fast and contactless entry verification for a smooth on-site experience.",
            "With advanced attendee management features, users can track registrations, manage guest lists, and analyze participant engagement. Real-time analytics and reporting tools help organizers monitor attendance, ticket sales, and overall event performance.",
            "Built with modern full-stack technologies, AI Event Organizer focuses on usability, scalability, and smart automation. Designed and developed by Aaditya Chhatraliya, this project reflects a commitment to innovation and creating powerful, user-friendly event management solutions."
          ],
        },
        {
          id: 2,
          name: "Spott.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://spott-zeta.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Spott.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Spott.png",
        },
        {
          id: 5,
          name: "Spott.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/spott.git",
          position: "top-60 right-70",
        },
      ],
    },

    // ▶ Project 5 Mojito Mix
    {
      id: 9,
      name: "Mojito Mix",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-5",
      windowPosition: "top-[70vh] left-15",
      children: [
        {
          id: 1,
          name: "Mojito Mix.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MojitoMix is a niche beverage-store website focused entirely on handcrafted mojitos, built to showcase flavors in a clean, modern layout.",
            "Instead of a generic product grid, it delivers a refreshing browsing experience with vibrant visuals, smooth transitions, and detailed flavor profiles for every mojito variant.",
            "Think of it like walking into a specialty mojito bar each drink highlighted with its own look, description, and pricing, making the shopping flow effortless and enjoyable.",
            "Built with React and Tailwind, it offers fast performance, responsive design, and a polished UI that feels crisp across all screen sizes."
          ],
        },
        {
          id: 2,
          name: "MojitoMix.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mojito-mix-mu.vercel.app/",
          position: "top-50 left-20",
        },
        {
          id: 4,
          name: "Mojito Mix.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-15 right-30",
          imageUrl: "/images/mojito.png",
        },
        {
          id: 5,
          name: "Mojito Mix.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/Mojito-Mix.git",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 6 VS Code Web IDE
    {
      id: 10,
      name: "VS Code Web IDE",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-45 right-30",
      windowPosition: "top-[40vh] left-40",
      children: [
        {
          id: 1,
          name: "VS Code.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 right-40",
          description: [
            "VS Code Web IDE is a browser-based recreation of Visual Studio Code, built to simulate the look, feel, and interaction patterns of a real development environment.",
            "Instead of a static code viewer, it delivers an immersive IDE-like experience with a file explorer, multi-tab editor, terminal panel, and a VS Code–inspired dark theme.",
            "Think of it as opening VS Code directly in your browser where files, tabs, and panels behave like a real editor, making the interface familiar and intuitive for developers.",
            "Built with React, Vite, and modern UI patterns, it focuses on performance, responsiveness, and clean state management, while adding a Canvas-based interactive animation layer for an engaging twist."
          ],
        },
        {
          id: 2,
          name: "VSCode.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vs-code-web-ide-six.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "VS Code.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/vscode.png",
        },
        {
          id: 5,
          name: "VS Code.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Aaditya9187/VS-Code-Web-IDE.git",
          position: "top-60 right-70",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Aaditya.png",
    },
    {
      id: 2,
      name: "Swastik.linkedin",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.linkedin.com/in/aaditya-chhatraliya-b5889b3b0/",
      position: "top-60 left-50",
    },
    {
      id: 3,
      name: "Aaditya.github",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "fig",
      href: "https://github.com/Aaditya9187",
      position: "top-60 left-95",
    },
    {
      id: 4,
      name: "AboutMe.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-18 left-50",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Aaditya.png",
      description: [
        "I am Aaditya Chhatraliya, a passionate and disciplined web developer with a strong interest in building modern, practical, and impactful digital solutions. Hands-on learning in technology, constantly improving my skills in frontend, Backend and full-stack development. I believe in mastering fundamentals first and then applying them creatively to real-world projects.",
        "I specialize in developing and designing clean, responsive, and user-friendly websites and applications, with experience in projects such as AI-powered platforms, e-commerce systems, and portfolio websites. I enjoy working with modern tools and frameworks while maintaining a traditional approach to problem-solving—focusing on structure, reliability, and long-term value rather than shortcuts.",
        "My long-term goal is to become a successful entrepreneur and build my own technology-driven company. I am continuously exploring innovative ideas, learning new technologies, and refining my craft to stay ahead in a fast-changing digital world. With discipline, consistency, and a forward-thinking mindset, I aim to create meaningful products that make a real difference.",
      ],
    },
    {
      id: 5,
      name: "TechStack.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-95",
      subtitle: "Tech Stack",
      description: [
        "⚙️ Frontend:",
        "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, GSAP",
        "",
        "🧠 State Management:",
        "Redux, Redux Toolkit",
        "",
        "🛠️ Tools & Build Systems:",
        "Vite, npm, Git, GitHub, Axios, Figma, Postman",
        "",
        "🎨 UI & Workflow:",
        "Responsive Design, Component Architecture, Animations, Micro-interactions, Performance Optimization, Accessibility Basics",
        "",
        "📡 APIs & Data:",
        "REST APIs, JSON handling, Async data fetching",
        "",
        "📱 Other / Supporting:",
        "Python, SQL, Machine Learning, React Native",
      ],
    },
    {
      id: 6,
      name: "me2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-5",
      imageUrl: "/images/me3.jpeg",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/logo.png",
    },
    {
      id: 4,
      name: "Trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-65 left-80",
      imageUrl: "/images/trash-code.jpg",
    },
    {
      id: 3,
      name: "Trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-30",
      imageUrl: "/images/trash-design.png",
    },
    {
      id: 2,
      name: "Trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-55",
      imageUrl: "/images/trash-design2.png",
    },
    {
      id: 5,
      name: "Old Portfolio.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://aaditya-dev.vercel.app/",
      position: "top-10 right-10",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  ner: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
