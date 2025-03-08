import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Quilt Binding Calculator",
  description: "Learn about the Quilt Binding Calculator, our mission to help quilters, and the team behind this free quilting tool.",
  keywords: "about quilt binding calculator, quilting tools, quilting resources, quilt binding",
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#5D4037] sm:text-4xl">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            The story behind the Quilt Binding Calculator
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-64 w-full md:w-64 md:h-full">
                <Image
                  className="object-cover"
                  src="/images/quilt-stacked.jpg"
                  alt="Stacked quilts"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-[#FF5722] font-semibold">Our Mission</div>
              <h2 className="mt-2 text-2xl font-bold text-[#5D4037]">Helping Quilters Create Beautiful Bindings</h2>
              <p className="mt-4 text-gray-600">
                The Quilt Binding Calculator was created by a team of passionate quilters who understand the importance of precise measurements in quilting. We know that calculating binding requirements can be tricky, especially for beginners or when working with complex quilt shapes.
              </p>
              <p className="mt-4 text-gray-600">
                Our mission is to provide quilters with a simple, accurate tool that takes the guesswork out of binding calculations. Whether you're making a small wall hanging or a king-sized quilt, whether you prefer regular binding or bias binding, our calculator helps you determine exactly how much fabric you need.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-8 py-6">
            <h2 className="text-xl font-bold text-[#5D4037] mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#5D4037] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#5D4037]">Quality</h3>
                <p className="mt-2 text-gray-600">
                  We believe in providing accurate, reliable calculations that quilters can trust for their projects.
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#5D4037] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#5D4037]">Simplicity</h3>
                <p className="mt-2 text-gray-600">
                  We strive to make our tools intuitive and easy to use, regardless of your quilting experience level.
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#5D4037] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#5D4037]">Community</h3>
                <p className="mt-2 text-gray-600">
                  We're committed to supporting the quilting community by providing free, accessible tools and resources.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-8 py-6">
            <h2 className="text-xl font-bold text-[#5D4037] mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              The idea for the Quilt Binding Calculator came from our own experiences as quilters. We found ourselves repeatedly calculating binding requirements for different projects, often using scribbled notes or spreadsheets. We realized there was a need for a simple, dedicated tool that could handle these calculations quickly and accurately.
            </p>
            <p className="text-gray-600 mb-4">
              We launched the Quilt Binding Calculator in 2025 with a focus on user-friendly design and accurate calculations. Since then, we've been thrilled to see quilters around the world using our tool to simplify their binding process.
            </p>
            <p className="text-gray-600">
              We're constantly working to improve our calculator and add new features based on user feedback. Our goal is to make the binding process as smooth and enjoyable as possible, so quilters can focus on the creative aspects of their craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
