import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowLeft, Car } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#060606] flex items-center justify-center pt-24 pb-16 text-white text-center">
      <Container size="md">
        <div className="space-y-6 max-w-md mx-auto bg-[#0D0D0D] border border-neutral-800 p-10">
          <div className="w-16 h-16 bg-red-950/40 border border-red-800 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <Car className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 block">
            404 · Page Not Found
          </span>

          <h1 className="text-3xl font-black font-heading text-white">
            Off the Track
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            The page or vehicle record you are searching for does not exist or has been relocated.
          </p>

          <div className="pt-4">
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors border border-red-500/40"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Fleet</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
