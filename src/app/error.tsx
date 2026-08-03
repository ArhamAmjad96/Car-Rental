"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#060606] flex items-center justify-center pt-24 pb-16 text-white text-center">
      <Container size="md">
        <div className="space-y-6 max-w-md mx-auto bg-[#0D0D0D] border border-neutral-800 p-10">
          <div className="w-16 h-16 bg-red-950/40 border border-red-800 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 block">
            System Alert
          </span>

          <h1 className="text-2xl font-black font-heading text-white">
            Unexpected Condition
          </h1>

          <p className="text-xs text-neutral-400 leading-relaxed">
            An unexpected error occurred while loading this view. Please try resetting the component or return to the fleet directory.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-red-500/40"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry Load</span>
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-800"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
