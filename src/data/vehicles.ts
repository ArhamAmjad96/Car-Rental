export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Performance" | "Executive Sedan" | "Chauffeur" | "Executive Transport";
  categoryLabel: string;
  image: string;
  imagePosition?: string;
  gallery: string[];
  featured: boolean;
  highlightedInShowcase: boolean;
  specs: {
    transmission: string;
    seating: string;
    fuelType: string;
    location: string;
  };
  description: string;
  highlights: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    slug: "performance-luxury-suv",
    name: "Performance Luxury SUV",
    tagline: "Commanding presence, elevated comfort and versatile performance across Kuala Lumpur.",
    category: "Performance",
    categoryLabel: "Performance Luxury SUV",
    image: "/assets/rexx/fleet/performance-suv-silver.jpg",
    imagePosition: "object-[center_50%]",
    gallery: [
      "/assets/rexx/fleet/performance-suv-silver.jpg",
      "/assets/rexx/signature/mercedes-angle-03.jpg",
      "/assets/rexx/signature/mercedes-interior.jpg",
    ],
    featured: true,
    highlightedInShowcase: true,
    specs: {
      transmission: "Automatic",
      seating: "5 Executive Seats",
      fuelType: "Premium Petrol",
      location: "Kuala Lumpur",
    },
    description:
      "A commanding luxury SUV crafted for executive road trips, business engagements, and refined city travel in Kuala Lumpur. Featuring responsive dynamics, high seating elevation, and sophisticated interior cabin isolation.",
    highlights: [
      "All-wheel drive stability",
      "Executive cabin acoustics",
      "Panoramic view elevation",
      "Versatile luggage capacity",
    ],
  },
  {
    id: "v2",
    slug: "signature-mercedes-sedan",
    name: "Signature Mercedes Sedan",
    tagline: "The flagship automotive expression of elegance, prestige, and seamless executive comfort.",
    category: "Executive Sedan",
    categoryLabel: "Flagship Executive Sedan",
    image: "/assets/rexx/hero/signature-mercedes-hero.jpg",
    imagePosition: "object-[center_60%]",
    gallery: [
      "/assets/rexx/hero/signature-mercedes-hero.jpg",
      "/assets/rexx/signature/mercedes-angle-03.jpg",
      "/assets/rexx/signature/mercedes-angle-02.jpg",
      "/assets/rexx/signature/mercedes-interior.jpg",
    ],
    featured: true,
    highlightedInShowcase: true,
    specs: {
      transmission: "Automatic",
      seating: "5 Executive Seats",
      fuelType: "Premium Petrol",
      location: "Bangsar, KL",
    },
    description:
      "The flagship Mercedes experience offered by REXX. Tailored for corporate VIP transfers, high-profile events, and executive self-drive, providing unmatched refinement and prestige on every street of Kuala Lumpur.",
    highlights: [
      "Signature LED exterior styling",
      "Ambient interior mood lighting",
      "Acoustic glass insulation",
      "Intuitive digital driver cockpit",
    ],
  },
  {
    id: "v3",
    slug: "executive-mercedes-chauffeur",
    name: "Executive Chauffeur Mercedes",
    tagline: "Designed around your arrival, featuring dedicated chauffeur presentation and privacy.",
    category: "Chauffeur",
    categoryLabel: "Executive Chauffeur",
    image: "/assets/rexx/services/executive-chauffeur-mercedes.jpg",
    imagePosition: "object-[center_65%]",
    gallery: [
      "/assets/rexx/services/executive-chauffeur-mercedes.jpg",
      "/assets/rexx/signature/mercedes-angle-02.jpg",
      "/assets/rexx/signature/mercedes-interior.jpg",
    ],
    featured: true,
    highlightedInShowcase: false,
    specs: {
      transmission: "Automatic",
      seating: "4 Passengers + Chauffeur",
      fuelType: "Premium Petrol",
      location: "Kuala Lumpur & Airport",
    },
    description:
      "A pristine white Mercedes vehicle configured specifically for executive chauffeur inquiries and corporate hospitality. Delivered with trained professional driver options for important events, state visits, and airport transfers.",
    highlights: [
      "Dedicated chauffeur service option",
      "Rear executive passenger controls",
      "Complementary airport luggage handling",
      "Punctual point-to-point transfers",
    ],
  },
  {
    id: "v4",
    slug: "premium-executive-sedan",
    name: "Premium Executive Sedan",
    tagline: "Understated elegance and smooth executive power for daily business mobility.",
    category: "Executive Sedan",
    categoryLabel: "Executive Business Sedan",
    image: "/assets/rexx/fleet/premium-sedan-black.jpg",
    imagePosition: "object-[center_60%]",
    gallery: [
      "/assets/rexx/fleet/premium-sedan-black.jpg",
      "/assets/rexx/fleet/mercedes-sedan-black.jpg",
      "/assets/rexx/signature/mercedes-interior.jpg",
    ],
    featured: true,
    highlightedInShowcase: false,
    specs: {
      transmission: "Automatic",
      seating: "5 Seats",
      fuelType: "Premium Petrol",
      location: "Bangsar, KL",
    },
    description:
      "Finished in deep onyx black, this executive sedan combines sleek exterior lines with effortless cruising dynamics. Ideal for corporate rentals, visiting diplomats, and individuals seeking understated luxury.",
    highlights: [
      "Onyx black exterior finish",
      "Smooth ride suppression system",
      "Ergonomic leather seating",
      "Spacious rear legroom",
    ],
  },
  {
    id: "v5",
    slug: "executive-bmw-sedan",
    name: "Executive BMW Sedan",
    tagline: "Dynamic agility meets executive luxury for an engaging driver-focused experience.",
    category: "Executive Sedan",
    categoryLabel: "Driver-Focused Luxury",
    image: "/assets/rexx/fleet/bmw-executive-sedan.jpg",
    imagePosition: "object-[center_60%]",
    gallery: [
      "/assets/rexx/fleet/bmw-executive-sedan.jpg",
      "/assets/rexx/signature/mercedes-angle-03.jpg",
    ],
    featured: false,
    highlightedInShowcase: false,
    specs: {
      transmission: "Automatic",
      seating: "5 Seats",
      fuelType: "Premium Petrol",
      location: "Kuala Lumpur",
    },
    description:
      "Precision engineering paired with distinctive design styling. The BMW executive sedan provides an invigorating driver experience for clients who appreciate responsive handling and modern luxury tech.",
    highlights: [
      "Responsive sports automatic box",
      "Driver-oriented digital dashboard",
      "Distinctive kidney grille styling",
      "Adaptive chassis control",
    ],
  },
  {
    id: "v6",
    slug: "premium-luxury-mpv",
    name: "Premium Luxury MPV",
    tagline: "First-class cabin comfort for executive groups, family tours, and airport transfers.",
    category: "Executive Transport",
    categoryLabel: "Luxury Transport MPV",
    image: "/assets/rexx/fleet/toyota-luxury-mpv.jpg",
    imagePosition: "object-[center_60%]",
    gallery: [
      "/assets/rexx/fleet/toyota-luxury-mpv.jpg",
      "/assets/rexx/signature/mercedes-interior.jpg",
    ],
    featured: true,
    highlightedInShowcase: true,
    specs: {
      transmission: "Automatic",
      seating: "7 Captain Seats",
      fuelType: "Petrol",
      location: "Kuala Lumpur",
    },
    description:
      "The pinnacle of group luxury transport. Featuring individual captain chairs, twin power sliding doors, and generous luggage capacity, perfect for corporate delegations and premium airport transit across KL.",
    highlights: [
      "Individual power captain seats",
      "Dual power sliding doors",
      "Triple-zone climate control",
      "Expansive rear cargo space",
    ],
  },
];
