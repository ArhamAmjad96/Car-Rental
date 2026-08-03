# REXX Luxury Car Rental — Kuala Lumpur, Malaysia

A modern automotive editorial web application built for **REXX Luxury Car Rental** in Bangsar, Kuala Lumpur. Designed with cinematic dark aesthetics, asymmetrical layouts, smooth motion reveals, and complete responsive support.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation
Clone or navigate to the project root directory and install dependencies:

```bash
npm install
```

### Development Server
Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build & Type Checking
To compile the TypeScript project and generate the production bundle:

```bash
npm run build
```

To run the production server after building:

```bash
npm run start
```

---

## 📁 Project Architecture & Asset Structure

```
rexx-luxury-rentals/
├── _source-assets/                  # Preserved original high-res image files
├── public/
│   └── assets/rexx/
│       ├── brand/                  # Logo assets & brand reference images
│       ├── hero/                   # Hero section Mercedes asset
│       ├── signature/              # Signature editorial gallery images
│       ├── fleet/                  # Fleet roster vehicle images
│       ├── services/               # Executive mobility service images
│       └── backgrounds/            # Structural background textures
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Homepage (11 sequential sections)
│   │   ├── fleet/
│   │   │   ├── page.tsx            # Fleet Overview page with category filters
│   │   │   └── [slug]/page.tsx     # Dynamic Vehicle Detail route
│   │   ├── services/page.tsx       # Services Overview page
│   │   ├── about/page.tsx          # About REXX page
│   │   ├── contact/page.tsx        # Reservation Request & Contact page
│   │   ├── layout.tsx              # Root Layout (Google Fonts, Metadata, Navbar, Footer)
│   │   └── globals.css             # Design tokens & CSS custom utilities
│   ├── components/
│   │   ├── layout/                 # Sticky Navbar, Mobile Menu, Footer
│   │   ├── home/                   # All 11 homepage section components
│   │   ├── fleet/                  # FleetCard, FleetFilters, Showcase Grid
│   │   ├── enquiry/                # Client-side validated EnquiryForm
│   │   └── shared/                 # Container, SectionHeading, MagneticButton, AnimatedText
│   ├── config/
│   │   ├── site.ts                 # Centralized site information & contact placeholders
│   │   └── navigation.ts           # Navbar & Footer navigation links
│   ├── data/
│   │   ├── vehicles.ts             # Vehicle roster dataset & gallery mappings
│   │   ├── services.ts             # Core mobility services dataset
│   │   └── faqs.ts                 # Frequently Asked Questions dataset
│   └── lib/
│       ├── utils.ts                # Class merging utility (clsx + tailwind-merge)
│       └── animations.ts           # Framer Motion animation variants
├── ASSET-MANIFEST.md               # Complete mapping manifest for all image assets
└── README.md                       # Project documentation & configuration guide
```

---

## ⚙️ How to Update Content & Configurations

### 1. Updating Brand & Contact Information
All central business details, address, and social links are located in:
📍 **[`src/config/site.ts`](file:///d:/ARHAM/rexx-luxury-rentals/src/config/site.ts)**

```typescript
export const siteConfig = {
  name: "REXX Luxury Car Rental",
  location: "Bangsar, Kuala Lumpur",
  contact: {
    phone: "+60 12 345 6789", // Update phone number here
    email: "contact@rexx-luxury-rentals.com", // Update email here
    address: "Bangsar, Kuala Lumpur, Malaysia",
    instagram: "https://www.instagram.com/rexx_luxury_rentals",
  },
};
```

### 2. Updating Vehicle Roster & Gallery Images
To add, edit, or remove vehicles from the fleet, update:
🚗 **[`src/data/vehicles.ts`](file:///d:/ARHAM/rexx-luxury-rentals/src/data/vehicles.ts)**

Each vehicle entry defines the slug, category, specs, description, image path, and sub-gallery list.

### 3. Replacing Logos
To update the navbar branding:
- Text wordmark is managed inside **[`src/components/layout/Navbar.tsx`](file:///d:/ARHAM/rexx-luxury-rentals/src/components/layout/Navbar.tsx)**.
- If a transparent PNG logo becomes available, place it in `public/assets/rexx/brand/rexx-logo-white.png` and update `Navbar.tsx` to render `<Image />`.

### 4. Updating Services & FAQs
- Mobility Services: **[`src/data/services.ts`](file:///d:/ARHAM/rexx-luxury-rentals/src/data/services.ts)**
- FAQs: **[`src/data/faqs.ts`](file:///d:/ARHAM/rexx-luxury-rentals/src/data/faqs.ts)**

---

## 🎨 Visual Design System Tokens

- **Background**: `#060606`
- **Secondary Surface**: `#0D0D0D`
- **Elevated Surface**: `#141414`
- **Primary Accent**: REXX Crimson Red (`#DC2626`)
- **Primary Text**: `#F4F4F4`
- **Secondary Text**: `#A2A2A2`
- **Typography**: Manrope (Headings), Inter (Body)
