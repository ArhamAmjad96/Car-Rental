export interface NavItem {
  label: string;
  href: string;
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Luxury Vehicle Rental", href: "/services#rental" },
    { label: "Executive Chauffeur", href: "/services#chauffeur" },
    { label: "Airport Transfers", href: "/services#transfers" },
    { label: "Flexible Long-Term", href: "/services#flexible" },
  ],
  company: [
    { label: "About REXX", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Enquire Now", href: "/contact" },
    { label: "Location & Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Rental Policies", href: "/policies" },
  ],
};
