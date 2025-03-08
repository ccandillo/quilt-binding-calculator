import BindingCalculator from "@/components/BindingCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quilt Binding Calculator | Calculate Binding for Regular and Bias Binding",
  description: "Use our free quilt binding calculator to determine exactly how much fabric you need for your quilt binding. Supports both regular and bias binding calculations.",
  keywords: "quilt binding calculator, quilting tools, bias binding calculator, regular binding calculator, quilt binding strips, how much binding for quilt",
};

export default function CalculatorPage() {
  return (
    <div className="py-12 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#5D4037] sm:text-4xl">
            Quilt Binding Calculator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Calculate exactly how much binding you need for your quilt.
          </p>
        </div>
        
        <BindingCalculator />
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#5D4037] mb-4">About Quilt Binding</h2>
          
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Regular Binding</h3>
              <p className="text-gray-600 mb-4">
                Regular binding (also called straight-grain binding) is cut parallel to the selvage of the fabric. 
                This type of binding works well for quilts with straight edges and is the most common binding method.
              </p>
              
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Bias Binding</h3>
              <p className="text-gray-600 mb-4">
                Bias binding is cut at a 45° angle to the selvage of the fabric. This gives the binding more 
                flexibility and stretch, making it ideal for quilts with curved edges. Bias binding is also more 
                durable as the bias cut distributes wear more evenly.
              </p>
              
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">How to Use This Calculator</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Enter your quilt's length and width in inches.</li>
                <li>Select whether you're using regular or bias binding.</li>
                <li>Adjust the fabric width if needed (standard is 42-44 inches).</li>
                <li>Adjust the binding strip width if needed (standard is 2.5 inches).</li>
                <li>Click "Calculate Binding" to get your results.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
