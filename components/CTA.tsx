'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-[#5D4037]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to calculate your binding?</span>
          <span className="block text-[#EFEBE9]">Try our calculator today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#5D4037] bg-white hover:bg-gray-50"
            >
              Get Started
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8D6E63] hover:bg-[#795548]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
