export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "s1",
    slug: "luxury-vehicle-rental",
    title: "Luxury Vehicle Rental",
    shortDescription: "Explore a curated selection of premium vehicles for business, leisure and important occasions.",
    fullDescription:
      "Whether for an executive meeting in Bangsar or a weekend getaway across Peninsular Malaysia, REXX delivers meticulously maintained luxury vehicles tailored to your personal schedule.",
    image: "/assets/rexx/fleet/performance-suv-silver.jpg",
    badge: "Self-Drive & Fleet",
    features: [
      "Curated fleet of premium sedans & SUVs",
      "Flexible short-term reservation terms",
      "Direct vehicle presentation & orientation",
      "Available subject to date confirmation",
    ],
  },
  {
    id: "s2",
    slug: "executive-chauffeur",
    title: "Executive Chauffeur",
    shortDescription: "A refined transport experience for executive journeys and important arrivals.",
    fullDescription:
      "Arrive with absolute composure. Our executive chauffeur service pairs flagship vehicles with professional driver presentation, guaranteeing discretion, punctuality, and seamless route navigation.",
    image: "/assets/rexx/services/executive-chauffeur-mercedes.jpg",
    badge: "Chauffeur Driven",
    features: [
      "Discreet, professionally presented drivers",
      "Corporate itinerary management",
      "VIP event transfers & state visits",
      "Point-to-point or hourly hire options",
    ],
  },
  {
    id: "s3",
    slug: "airport-transfers",
    title: "Airport Transfers",
    shortDescription: "Premium transportation enquiries for arrivals and departures across Kuala Lumpur.",
    fullDescription:
      "Eliminate travel friction between KLIA / Subang Airport and Kuala Lumpur city center. Enjoy plush seating, flight tracking, and effortless luggage handling for stress-free arrivals.",
    image: "/assets/rexx/fleet/toyota-luxury-mpv.jpg",
    badge: "KLIA & Subang",
    features: [
      "KLIA Terminal 1 & 2 direct transfers",
      "Subang Sultan Abdul Aziz Shah Airport routes",
      "Flight arrival time monitoring",
      "Spacious MPV & sedan luggage accommodation",
    ],
  },
  {
    id: "s4",
    slug: "flexible-long-term",
    title: "Flexible Long-Term",
    shortDescription: "Short and long-term rental enquiries based around your journey requirements.",
    fullDescription:
      "Bespoke mobility programs for expatriates, corporate executives, and businesses seeking premium vehicles on extended terms without long-term ownership commitments.",
    image: "/assets/rexx/fleet/premium-sedan-black.jpg",
    badge: "Corporate & Monthly",
    features: [
      "Monthly & quarterly rental arrangements",
      "Comprehensive vehicle servicing included",
      "Replacement vehicle support during maintenance",
      "Tailored corporate billing options",
    ],
  },
];
