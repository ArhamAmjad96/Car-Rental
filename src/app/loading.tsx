import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#060606] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-neutral-800 border-t-red-600 animate-spin" />
        <span className="text-[10px] font-black text-white font-heading tracking-tighter">
          REXX
        </span>
      </div>
      <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-500">
        Loading Mobility Experience...
      </p>
    </div>
  );
}
