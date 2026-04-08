import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
          <Button variant="hero" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[70vh]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold">{project.name}</h1>
            <p className="mt-4 max-w-xl text-muted-foreground text-lg">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-12">Project Gallery</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden"
            >
              <img
                src={img}
                alt={`${project.name} ${i + 1}`}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20 px-6 md:px-20 bg-card">
        <h2 className="text-3xl font-semibold mb-12">More Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((p) => (
            <motion.div
              key={p.slug}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/project/${p.slug}`)}
              className="h-64 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <p className="absolute bottom-6 left-6 text-lg font-medium z-10">
                {p.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
