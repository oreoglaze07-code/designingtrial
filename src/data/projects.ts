import projectModernLiving from "@/assets/project-modern-living.jpg";
import projectMinimalBedroom from "@/assets/project-minimal-bedroom.jpg";
import projectLuxuryKitchen from "@/assets/project-luxury-kitchen.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectWorkspace from "@/assets/project-workspace.jpg";
import projectApartment from "@/assets/project-apartment.jpg";
import modernLiving2 from "@/assets/modern-living-2.jpg";
import modernLiving3 from "@/assets/modern-living-3.jpg";
import minimalBedroom2 from "@/assets/minimal-bedroom-2.jpg";
import luxuryKitchen2 from "@/assets/luxury-kitchen-2.jpg";
import villa2 from "@/assets/villa-2.jpg";
import workspace2 from "@/assets/workspace-2.jpg";
import apartment2 from "@/assets/apartment-2.jpg";

export interface Project {
  slug: string;
  name: string;
  image: string;
  description: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "modern-living",
    name: "Modern Living",
    image: projectModernLiving,
    description: "A contemporary living space designed around natural light, clean lines, and curated comfort. Every element serves both form and function.",
    gallery: [projectModernLiving, modernLiving2, modernLiving3],
  },
  {
    slug: "minimal-bedroom",
    name: "Minimal Bedroom",
    image: projectMinimalBedroom,
    description: "A serene retreat emphasizing calm through a restrained palette, soft textures, and thoughtful spatial flow.",
    gallery: [projectMinimalBedroom, minimalBedroom2],
  },
  {
    slug: "luxury-kitchen",
    name: "Luxury Kitchen",
    image: projectLuxuryKitchen,
    description: "Where culinary artistry meets design excellence — premium materials, intelligent layout, and striking details.",
    gallery: [projectLuxuryKitchen, luxuryKitchen2],
  },
  {
    slug: "villa-interior",
    name: "Villa Interior",
    image: projectVilla,
    description: "Grand proportions harmonized with warm, organic materials to create an inviting yet impressive residence.",
    gallery: [projectVilla, villa2],
  },
  {
    slug: "workspace",
    name: "Workspace",
    image: projectWorkspace,
    description: "A productive environment that balances focus and creativity through ergonomic design and natural elements.",
    gallery: [projectWorkspace, workspace2],
  },
  {
    slug: "premium-apartment",
    name: "Premium Apartment",
    image: projectApartment,
    description: "Urban luxury redefined — sophisticated finishes, panoramic views, and meticulously curated living spaces.",
    gallery: [projectApartment, apartment2],
  },
];
