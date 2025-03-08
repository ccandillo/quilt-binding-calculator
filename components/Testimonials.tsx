'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "This binding calculator has saved me so much time and fabric! I used to always cut too much or too little, but now I get it right every time.",
      author: "Sarah J.",
      role: "Quilter for 15 years",
    },
    {
      content:
        "The bias binding calculator is a game-changer for my art quilts with curved edges. Precise calculations every time!",
      author: "Michael T.",
      role: "Art Quilter",
    },
    {
      content:
        "As a quilting teacher, I recommend this calculator to all my students. It's simple to use and gives accurate results.",
      author: "Emma R.",
      role: "Quilting Instructor",
    },
  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-[#5D4037] sm:text-4xl">
              What Quilters Are Saying
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Quilters around the world trust our calculator for their binding needs.
            </p>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#FF5722]">Testimonial</p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        <span className="text-3xl leading-none text-[#5D4037]">&ldquo;</span>
                        {testimonial.content}
                        <span className="text-3xl leading-none text-[#5D4037]">&rdquo;</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#5D4037] font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
