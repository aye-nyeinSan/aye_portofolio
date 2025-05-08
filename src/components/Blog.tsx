
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function Blog() {
  const posts: BlogPost[] = [
    {
      title: "How to reduce docker image size using multiStage",
      excerpt:
        "A comprehensive guide on how to reduce the size of your Docker images using multi-stage builds.",
      date: "Apr 1, 2025",
      slug: "https://medium.com/@ayenyeinsan/how-to-reduce-docker-image-size-using-multistage-77ba8fc1df71",
    },
    {
      title: "How to Recover an EC2 Instance After Losing the Key Pair",
      excerpt:
        "Learn how to recover access to your EC2 instance even if you've lost the key pair.",
      date: "March 10, 2025",
      slug: "https://medium.com/aws-in-plain-english/how-to-recover-an-ec2-instance-after-losing-the-key-pair-74f56103c9a6",
    },
    {
      title:
        "Installing Nginx Server and Tomcat in AWS EC2 in window without WinScp",
      excerpt: "",
      date: "Jan 28, 2024",
      slug: "https://medium.com/aws-in-plain-english/installing-nginx-server-and-tomcat-in-aws-ec2-in-window-without-winscp-320cad9d3387",
    },
  ];

  return (
    <section id="blog" className="section container px-4 md:px-8">
      <h2 className="section-title">Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card
            key={index}
            className="flex flex-col h-full animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className="line-clamp-2 leading-8 ">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="outline" asChild>
                <a href={`${post.slug}`} target="_blank">
                  Read More
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <a href="https://ayenyeinsan.medium.com/"
          target="_blank">View All Posts</a>
        </Button>
      </div>
    </section>
  );
}
