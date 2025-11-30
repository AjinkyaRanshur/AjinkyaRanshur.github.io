import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

/**
 * Mellow Minimalist Academic Design Philosophy:
 * - Warm, soft color palette (warm beige, muted browns)
 * - Smooth transitions and animations (0.3s ease)
 * - Tabbed navigation for different sections
 * - Clean typography with generous whitespace
 * - Subtle hover effects with smooth transforms
 */

type Section = "home" | "projects" | "resume" | "blog" | "goals" | "connect";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year: string;
  details?: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

interface Goal {
  title: string;
  description: string;
  status: "in-progress" | "planned" | "completed";
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      title: "Quantum Computing Simulation",
      description:
        "Developed a quantum circuit simulator using Python and NumPy. Implemented Grover's algorithm and quantum Fourier transform with visualization tools.",
      tags: ["Python", "Quantum Computing", "NumPy"],
      link: "#",
      year: "2024",
    },
    {
      title: "Machine Learning for Climate Prediction",
      description:
        "Built a neural network model to predict climate patterns using historical meteorological data. Achieved 92% accuracy on test datasets.",
      tags: ["TensorFlow", "Python", "Data Science"],
      link: "#",
      year: "2023",
    },
    {
      title: "Bioinformatics Pipeline",
      description:
        "Created an automated pipeline for DNA sequence analysis and protein structure prediction. Integrated with public databases for real-time analysis.",
      tags: ["Bioinformatics", "Python", "Bash"],
      link: "#",
      year: "2023",
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Physics",
      institution: "University of Technology",
      year: "2020–2024",
      details:
        "Focus on computational physics and quantum mechanics. GPA: 3.8/4.0",
    },
    {
      degree: "Advanced Diploma in Data Science",
      institution: "Online Learning Platform",
      year: "2022–2023",
      details: "Specialized in machine learning and statistical analysis.",
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      title: "Understanding Quantum Entanglement",
      excerpt:
        "A deep dive into the phenomenon of quantum entanglement and its implications for quantum computing.",
      date: "November 15, 2024",
      slug: "quantum-entanglement",
    },
    {
      title: "My Journey into Scientific Research",
      excerpt:
        "Reflections on starting my research career and lessons learned from my first major project.",
      date: "October 28, 2024",
      slug: "research-journey",
    },
    {
      title: "Best Practices for Data Visualization",
      excerpt:
        "A guide to creating clear, effective visualizations for scientific data.",
      date: "October 5, 2024",
      slug: "data-visualization",
    },
  ];

  const goals: Goal[] = [
    {
      title: "Publish in a Peer-Reviewed Journal",
      description: "Submit and publish research on quantum algorithms.",
      status: "in-progress",
    },
    {
      title: "Complete Advanced ML Certification",
      description: "Finish the advanced machine learning specialization.",
      status: "in-progress",
    },
    {
      title: "Contribute to Open Source",
      description: "Make meaningful contributions to scientific computing libraries.",
      status: "planned",
    },
    {
      title: "Learn Rust for Systems Programming",
      description: "Master Rust for high-performance computing applications.",
      status: "planned",
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "your.email@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      label: "github.com/yourprofile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "linkedin.com/in/yourprofile",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      label: "@yourhandle",
    },
  ];

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Blog" },
    { id: "goals", label: "Goals" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-4xl">
          <div className="flex justify-between items-center py-4 mb-0">
            <h1 className="text-2xl font-bold">Ajinkya Ranshur</h1>
          </div>
          {/* Navigation Tabs */}
          <nav className="nav-tabs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-tab ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl py-12 md:py-16">
        {/* Home Section */}
        {activeSection === "home" && (
          <section className="content-section">
            <div className="mb-12">
              <p className="text-lg text-foreground/80 mb-4">
                Physicist | Data Scientist | Open Source Enthusiast
              </p>
              <p className="text-base text-foreground/70 max-w-2xl leading-relaxed">
                Exploring the intersection of physics, computation, and data science.
                Passionate about scientific research and building tools that advance
                human knowledge. Welcome to my corner of the internet.
              </p>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8">Scientific Projects</h2>
            <div className="space-y-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="project-item cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-foreground/60">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-accent text-sm font-medium hover:underline">
                    Click to view details →
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resume Section */}
        {activeSection === "resume" && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8">Education & Experience</h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="project-item">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-foreground/70 mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground/60 mb-3">{edu.year}</p>
                  <p className="text-foreground/80">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Blog Section */}
        {activeSection === "blog" && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8">Blog</h2>
            <div className="space-y-6">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="blog-preview">
                  <a href={`/blog/${post.slug}`} className="block group">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-foreground/80 mb-3">{post.excerpt}</p>
                  <p className="text-sm text-foreground/60">{post.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Goals Section */}
        {activeSection === "goals" && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8">Life Goals</h2>
            <div className="space-y-6">
              {goals.map((goal, idx) => (
                <div key={idx} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{goal.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 transition-all ${
                        goal.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : goal.status === "in-progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {goal.status === "in-progress"
                        ? "In Progress"
                        : goal.status === "completed"
                          ? "Completed"
                          : "Planned"}
                    </span>
                  </div>
                  <p className="text-foreground/80">{goal.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Connect Section */}
        {activeSection === "connect" && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl">
              Feel free to reach out through any of these channels. I'm always
              interested in discussing science, technology, and new ideas.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    className="flex items-center gap-3 p-4 hover:bg-secondary/30 transition-colors duration-300 group"
                  >
                    <Icon
                      size={20}
                      className="text-accent group-hover:text-accent/80 transition-colors"
                    />
                    <span className="text-foreground/80 group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container max-w-4xl">
          <p className="text-sm text-foreground/60 text-center">
            © 2024 Ajinkya Ranshur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

