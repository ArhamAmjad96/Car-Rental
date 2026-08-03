import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { footerLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <Container size="full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-black font-heading tracking-[0.2em] text-white">
                  REXX
                </span>
                <span className="w-2 h-2 rounded-full bg-red-600" />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400 block -mt-1">
                Luxury Car Rental · Kuala Lumpur
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Refined vehicle rentals, executive chauffeur experiences, and airport transit across Kuala Lumpur, Malaysia.
            </p>
            <div className="flex items-center space-x-3 text-xs text-neutral-300 pt-2">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Bangsar, Kuala Lumpur, Malaysia</span>
            </div>
            <div className="pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-300 hover:text-red-500 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-200 mb-4 font-heading">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-200 mb-4 font-heading">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Terms */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-200 mb-4 font-heading">
              Enquiries
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              All vehicle rentals and executive services are available subject to date confirmation and driver verification.
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 hover:text-red-400 border-b border-red-500 pb-0.5 transition-colors"
            >
              Submit Rental Request →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} REXX Luxury Car Rental. All rights reserved.</p>
          <p className="text-neutral-500">Speculative redesign concept · Bangsar, Kuala Lumpur</p>
        </div>
      </Container>
    </footer>
  );
}
