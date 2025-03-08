import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  // FAQ data
  const faqItems = [
    {
      question: "What is the standard binding for a quilt?",
      answer: "The standard binding for a quilt is typically 2.5 inches wide, double-fold binding. This width works well for most quilts and provides enough fabric to wrap around the edge of the quilt and be securely stitched down. Regular binding (cut parallel to the selvage) is most common for quilts with straight edges, while bias binding (cut at a 45° angle) is preferred for quilts with curved edges."
    },
    {
      question: "How wide to cut strips for quilt binding?",
      answer: "For standard double-fold binding, cut strips 2.5 inches wide. For a thinner binding, cut strips 2.25 inches wide. For a wider, more prominent binding, cut strips 2.75 to 3 inches wide. The width you choose depends on your preference and the thickness of your quilt. Thicker quilts may require wider binding strips to properly encase the edges."
    },
    {
      question: "What is the golden rule for quilt borders?",
      answer: "The golden rule for quilt borders is to measure through the center of your quilt, not along the edges. This helps prevent wavy or rippled borders. Take three measurements: one through the center and two about a quarter of the way in from each edge. Average these measurements to determine your border length. This ensures your borders lie flat and your quilt remains square."
    },
    {
      question: "Do you sew binding on the front or back of a quilt?",
      answer: "Traditionally, binding is first attached to the front of the quilt by machine, then folded over and hand-stitched to the back. However, some quilters prefer to attach it to the back first and then fold it to the front. The most important factor is consistency in your seam allowance to ensure the binding covers the stitching line when folded over. Either method can produce beautiful results, so it often comes down to personal preference."
    }
  ];

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqs={faqItems} />
        </div>
      </div>
      <CTA />
    </>
  );
}
