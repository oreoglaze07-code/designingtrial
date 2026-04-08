import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about.jpg";
import showcaseImg from "@/assets/showcase.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const transformations = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
];

const testimonials = [
  "Transformed our home into something truly luxurious.",
  "Smooth process and outstanding attention to detail.",
  "Our space feels completely elevated now.",
];

const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <img src={heroBg} alt="Luxury interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">IBR Designs</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Designing elevated living experiences through timeless interiors.</p>
          <Button variant="hero" className="mt-8" onClick={scrollToProjects}>Explore Projects</Button>
        </motion.div>
      </section>

      <div className="text-center text-muted-foreground pb-10">Scroll to explore ↓</div>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 md:px-20 scroll-mt-8">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-4xl font-semibold mb-16 text-center">
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <motion.div
              key={item.slug}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/project/${item.slug}`)}
              className="h-72 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src={item.image} alt={item.name} loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <p className="absolute bottom-6 left-6 text-lg font-medium z-10 group-hover:-translate-y-1 transition-transform">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="h-[80vh] relative flex items-center justify-center text-center px-6">
        <img src={showcaseImg} alt="Effortless interior space" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Spaces That Feel Effortless</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Every detail is crafted to create harmony between design, comfort, and lifestyle.</p>
        </motion.div>
      </section>

      {/* Transformations */}
      <section className="py-28 px-6 md:px-20 bg-card">
        <h2 className="text-4xl font-semibold mb-16 text-center">Transformations</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {transformations.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="h-72 rounded-3xl overflow-hidden relative">
                <img src={t.before} alt="Before" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground">Before</span>
              </div>
              <div className="h-72 rounded-3xl overflow-hidden relative">
                <img src={t.after} alt="After" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground">After</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6">About IBR Designs</h2>
          <p className="text-muted-foreground leading-relaxed">We specialize in creating refined interiors that reflect individuality and elevate everyday living. Our process is rooted in simplicity, precision, and attention to detail.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="h-96 rounded-3xl overflow-hidden">
          <img src={aboutImg} alt="About IBR Designs" loading="lazy" width={800} height={960} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 md:px-20">
        <h2 className="text-4xl font-semibold mb-16 text-center">Client Experience</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((review, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-10 rounded-3xl bg-glass backdrop-blur-lg">
              <p className="text-muted-foreground">"{review}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-semibold">
          Let's Design Your Space
        </motion.h2>
        <p className="mt-6 text-muted-foreground">Start your journey towards a refined living experience.</p>
        <Button variant="hero" className="mt-10">Book a Consultation</Button>
      </section>
    </div>
  );
};

export default Index;
