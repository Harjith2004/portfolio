const config = {
  title: "Harjith K | Software Developer",
  description: {
    long: "Explore the portfolio of Harjith K, an aspiring Software Developer with a strong foundation in Java, Spring Boot, React.js, JavaScript, and SQL. Skilled in developing scalable web applications, REST APIs, and secure software solutions. Discover my latest work including Voice-Based Authentication System and Automated Urban Complaint Classification System.",
    short:
      "Discover the portfolio of Harjith K, a software developer building scalable web apps, REST APIs, and secure software solutions.",
  },
  keywords: [
    "Harjith K",
    "portfolio",
    "software developer",
    "Java",
    "Spring Boot",
    "React.js",
    "full-stack developer",
    "web development",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Node.js",
    "REST API",
    "automation testing",
  ],
  author: "Harjith K",
  email: "harjithharjith40711@gmail.com",
  site: "https://Harjith-Portfolio.com",

  // for github stars button
  githubUsername: "Harjith2004",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/harjith-k-839a55354",
    instagram: "",
    facebook: "",
    github: "https://github.com/Harjith2004",
  },
};
export { config };
