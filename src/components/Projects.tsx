
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
      title: "2024 Paris Olympics Medal Report",
      description:
        "A website where user can check the paris olympic medal for each country.",
      tags: ["Vue", "Node.js"],
      liveUrl:
        "https://project-1-olympic-report-malatang-friends-jyio.vercel.app/",
      githubUrl:
        "https://github.com/aye-nyeinSan/project-1-Olympic-Report-malatang-friends",
    },
    {
      title: "WaterMarkJavaFX",
      description:
        "A JavaFX application that allows users to add watermarks and resize to images.",
      tags: ["Java", "JavaFX"],
      githubUrl: "https://github.com/aye-nyeinSan/WaterMarkJavaFX",
    },
    {
      title: "Space Invader Game",
      description:
        "A desktop game application that allows users to play the classic Space Invader game.",
      tags: ["Java", "JavaFX"],
      githubUrl: "https://github.com/aye-nyeinSan/SpaceInvaderJavaFXGame",
    },
  
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
