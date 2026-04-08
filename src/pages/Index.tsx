import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = ["Modern Living", "Minimal Bedroom", "Luxury Kitchen", "Villa Interior", "Workspace", "Premium Apartment"];
const testimonials = [
  "Transformed our home into something truly luxurious.",
  "Smooth process and outstanding attention to detail.",
  "Our space feels completely elevated now.",
];

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            IBR Designs
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Designing elevated living experiences through timeless interiors.
          </p>
          <Button variant="hero" className="mt-8">
            Explore Projects
          </Button>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <div className="text-center text-muted-foreground pb-10">Scroll to explore ↓</div>

      {/* Projects */}
      <section className="py-28 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-16 text-center"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-72 rounded-3xl bg-glass backdrop-blur-lg flex items-end p-6 group cursor-pointer"
            >
              <p className="text-lg group-hover:-translate-y-1 transition-transform">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="h-[80vh] bg-glass flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Spaces That Feel Effortless
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Every detail is crafted to create harmony between design, comfort, and lifestyle.
          </p>
        </motion.div>
      </section>

      {/* Transformations */}
      <section className="py-28 px-6 md:px-20 bg-card">
        <h2 className="text-4xl font-semibold mb-16 text-center">Transformations</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="h-72 bg-glass rounded-3xl flex items-center justify-center text-muted-foreground">
                Before
              </div>
              <div className="h-72 bg-glass-hover rounded-3xl flex items-center justify-center text-secondary-foreground">
                After
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6">About IBR Designs</h2>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in creating refined interiors that reflect individuality and elevate everyday living. Our process is rooted in simplicity, precision, and attention to detail.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-96 bg-glass rounded-3xl"
        />
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 md:px-20">
        <h2 className="text-4xl font-semibold mb-16 text-center">Client Experience</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl bg-glass backdrop-blur-lg"
            >
              <p className="text-muted-foreground">"{review}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Let's Design Your Space
        </motion.h2>
        <p className="mt-6 text-muted-foreground">Start your journey towards a refined living experience.</p>
        <Button variant="hero" className="mt-10">
          Book a Consultation
        </Button>
      </section>
    </div>
  );
};

export default Index;
