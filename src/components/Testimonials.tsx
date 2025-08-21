import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      review: 'Amazing quality products and lightning-fast delivery! The iPhone I ordered exceeded my expectations.',
      product: 'iPhone 15 Pro'
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5,
      review: 'Best shopping experience ever! The customer service is outstanding and the products are genuine.',
      product: 'MacBook Pro'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      review: 'Love my new smartwatch! Great value for money and the features are incredible.',
      product: 'Apple Watch Series 9'
    },
    {
      id: 4,
      name: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 5,
      review: 'The home appliances section has everything I needed. Quick delivery and perfect condition!',
      product: 'Samsung Smart TV'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust GearX for their electronics needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:-rotate-1' : 'lg:rotate-1'
              } hover:rotate-0`}
            >
              <div className="relative mb-4">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-blue-200 -translate-x-2 -translate-y-2" />
                <p className="text-gray-700 italic relative z-10">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gradient-to-r from-blue-400 to-purple-400"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Purchased {testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;