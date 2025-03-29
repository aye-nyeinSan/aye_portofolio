
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/task-app"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website designed to showcase projects and skills.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <section id="projects" className="section container px-4 md:px-8">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </a>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
