export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I request vehicle availability with REXX?",
    answer:
      "You can submit an availability request directly through our online reservation form or contact us via WhatsApp. All requests are subject to confirmation based on date and vehicle fleet availability in Kuala Lumpur.",
  },
  {
    id: "faq-2",
    question: "Where is REXX Luxury Car Rental located?",
    answer:
      "Our core operational base is situated in Bangsar, Kuala Lumpur. We cater to clients across the Klang Valley, including Mont Kiara, KLCC, Damansara, and major airports.",
  },
  {
    id: "faq-3",
    question: "What documents are required to initiate a rental enquiry?",
    answer:
      "Standard identification including a valid driver's license (Malaysian or recognized International Driving Permit) and identity documentation (MyKad or Passport) will be requested during the confirmation process.",
  },
  {
    id: "faq-4",
    question: "Are chauffeur services available for airport transfers?",
    answer:
      "Yes. We offer executive chauffeur services for both KLIA (Terminal 1 & 2) and Subang Airport (SZB) transfers. You can specify chauffeur requirements when submitting your enquiry.",
  },
  {
    id: "faq-5",
    question: "Can I enquire about long-term corporate rental terms?",
    answer:
      "Absolutely. REXX provides tailored extended rental arrangements for expatriates, diplomatic visits, and corporate fleets in Kuala Lumpur.",
  },
];
