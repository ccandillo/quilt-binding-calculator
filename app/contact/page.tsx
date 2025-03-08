import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Quilt Binding Calculator",
  description: "Get in touch with the Quilt Binding Calculator team. We'd love to hear your feedback, questions, or suggestions.",
  keywords: "contact, quilting, quilt binding calculator, feedback, support",
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#5D4037] sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            We'd love to hear from you! Send us your questions, feedback, or suggestions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
