import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Quilt Binding Calculator",
  description: "Frequently asked questions about quilt binding, including standard binding width, how to cut strips, the golden rule for quilt borders, and more.",
  keywords: "quilt binding FAQ, quilting questions, quilt borders, binding strips, quilt binding width",
};

export default function FAQPage() {
  // FAQ data
  const faqItems = [
    {
      question: "What is the standard binding for a quilt?",
      answer: "The standard binding for a quilt is typically 2.5 inches wide, double-fold binding. This width works well for most quilts and provides enough fabric to wrap around the edge of the quilt and be securely stitched down. Regular binding (cut parallel to the selvage) is most common for quilts with straight edges, while bias binding (cut at a 45&deg; angle) is preferred for quilts with curved edges."
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
    },
    {
      question: "How do I calculate how much binding I need for my quilt?",
      answer: "To calculate binding, measure the perimeter of your quilt (2 × length + 2 × width), then add about 10 inches for corners and joining. For regular binding, divide this total by the width of your fabric (typically 42-44 inches) to determine how many strips you need. For bias binding, multiply the total length by 1.414 (the diagonal factor) before dividing by the fabric width. Our Quilt Binding Calculator automates this process for you."
    },
    {
      question: "What's the difference between regular and bias binding?",
      answer: "Regular binding is cut parallel to the selvage (along the grain) of the fabric. It&apos;s less stretchy and works well for quilts with straight edges. Bias binding is cut at a 45&deg; angle to the selvage, giving it more stretch and flexibility. This makes it ideal for quilts with curved edges. Bias binding also tends to be more durable as the bias cut distributes wear more evenly across the binding."
    },
    {
      question: "How do I join binding strips together?",
      answer: "The most common method for joining binding strips is with a diagonal seam. Place two strips right sides together at a 90&deg; angle, with the end of one strip overlapping the end of the other. Sew from corner to corner, then trim the excess fabric to a 1/4 inch seam allowance and press open. This diagonal join distributes bulk and is less visible in the finished binding."
    },
    {
      question: "How do I finish the ends of my binding?",
      answer: "To finish binding ends, leave about 8 inches of binding unattached. Overlap the starting tail by about 2.5 inches (or the width of your binding), then trim the ending tail. Open both ends and place them right sides together at a 90&deg; angle, just like when joining strips. Mark a diagonal line, sew along it, trim excess, and press open. Then finish attaching the binding to complete your quilt."
    }
  ];

  return (
    <div className="py-12 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#5D4037] sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Find answers to common questions about quilt binding and borders.
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <FAQ faqs={faqItems} />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Don't see your question here? <a href="/contact" className="text-[#FF5722] font-medium hover:underline">Contact us</a> and we'll be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}
