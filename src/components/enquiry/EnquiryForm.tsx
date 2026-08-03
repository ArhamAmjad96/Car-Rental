"use client";

import React, { useState } from "react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { CheckCircle, AlertCircle, ArrowLeft, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnquiryFormProps {
  initialVehicle?: string;
  initialService?: string;
  className?: string;
}

export function EnquiryForm({ initialVehicle, initialService, className }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredVehicle: initialVehicle || "",
    rentalType: initialService ? "Executive chauffeur" : "Self-drive enquiry",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "Bangsar, Kuala Lumpur",
    additionalRequest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = "Pickup date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("bg-[#141414] border border-neutral-800 p-8 sm:p-12 text-center space-y-6", className)}>
        <div className="w-16 h-16 bg-red-950/60 border border-red-800 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-bold font-heading text-white">
          Enquiry Received
        </h3>

        <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto leading-relaxed">
          Thank you. Enquiry submission will be connected after the official contact details are confirmed.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                preferredVehicle: "",
                rentalType: "Self-drive enquiry",
                pickupDate: "",
                returnDate: "",
                pickupLocation: "Bangsar, Kuala Lumpur",
                additionalRequest: "",
              });
            }}
            className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-800"
          >
            Submit Another Request
          </button>

          <Link
            href="/fleet"
            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Fleet</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("bg-[#141414] border border-neutral-800 p-6 sm:p-10 space-y-6", className)}>
      <div className="border-b border-neutral-800 pb-4 mb-6">
        <h3 className="text-xl font-bold font-heading text-white">
          Vehicle Availability Request
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Complete the details below to initiate your reservation enquiry in Kuala Lumpur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Alexander Tan"
            className={cn(
              "w-full bg-neutral-950 border px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors",
              errors.fullName ? "border-red-600 focus:border-red-500" : "border-neutral-800 focus:border-red-600"
            )}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alexander@example.com"
            className={cn(
              "w-full bg-neutral-950 border px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors",
              errors.email ? "border-red-600 focus:border-red-500" : "border-neutral-800 focus:border-red-600"
            )}
          />
          {errors.email && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+60 12 345 6789"
            className={cn(
              "w-full bg-neutral-950 border px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors",
              errors.phone ? "border-red-600 focus:border-red-500" : "border-neutral-800 focus:border-red-600"
            )}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Preferred Vehicle */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Preferred Vehicle
          </label>
          <select
            value={formData.preferredVehicle}
            onChange={(e) => setFormData({ ...formData, preferredVehicle: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="">-- Any Available Vehicle --</option>
            {vehicles.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.categoryLabel})
              </option>
            ))}
          </select>
        </div>

        {/* Rental Type */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Rental Type
          </label>
          <select
            value={formData.rentalType}
            onChange={(e) => setFormData({ ...formData, rentalType: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="Self-drive enquiry">Self-drive enquiry</option>
            <option value="Executive chauffeur">Executive chauffeur</option>
            <option value="Airport transfer">Airport transfer</option>
            <option value="Short-term rental">Short-term rental</option>
            <option value="Long-term rental">Long-term rental</option>
          </select>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
            placeholder="Bangsar, KLIA, Hotel, or Address"
            className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.pickupDate}
            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
            className={cn(
              "w-full bg-neutral-950 border px-4 py-3 text-sm text-white focus:outline-none transition-colors",
              errors.pickupDate ? "border-red-600 focus:border-red-500" : "border-neutral-800 focus:border-red-600"
            )}
          />
          {errors.pickupDate && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.pickupDate}</span>
            </p>
          )}
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Return Date
          </label>
          <input
            type="date"
            value={formData.returnDate}
            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      {/* Additional Requests */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
          Additional Requests / Itinerary Details
        </label>
        <textarea
          rows={4}
          value={formData.additionalRequest}
          onChange={(e) => setFormData({ ...formData, additionalRequest: e.target.value })}
          placeholder="Specify flight numbers, special chauffeur requests, or multi-day itinerary requirements..."
          className="w-full bg-neutral-950 border border-neutral-800 p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <p className="text-[11px] text-neutral-400">
          All requests are subject to vehicle confirmation.
        </p>

        <button
          type="submit"
          className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center space-x-2 border border-red-500/40"
        >
          <span>Submit Request</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
