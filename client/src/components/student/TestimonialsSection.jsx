import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Discover what our students have to say about their learning experience, growth,
        and how our <br /> platform helped them achieve their goals.
      </p>

      {/* ✅ Horizontal Scrollable Row */}
      <div className="flex overflow-x-auto space-x-6 mt-14 scrollbar-thin scrollbar-thumb-gray-400">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='min-w-[300px] max-w-[320px] flex-shrink-0 text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img
                className='h-12 w-12 rounded-full'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>

            <div className='px-5 pt-3'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                    className='h-5'
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
