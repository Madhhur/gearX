import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import { Smartphone, Laptop, Watch, Tv, Refrigerator, Wind, Waves, Router } from 'lucide-react';

const Home = () => {
  const categories = [
    { name: 'Mobiles', icon: Smartphone, path: '/mobiles', color: 'from-blue-500 to-cyan-500', count: '200+' },
    { name: 'Laptops', icon: Laptop, path: '/laptops', color: 'from-purple-500 to-pink-500', count: '150+' },
    { name: 'Watches', icon: Watch, path: '/watches', color: 'from-green-500 to-emerald-500', count: '100+' },
    { name: 'Television', icon: Tv, path: '/television', color: 'from-orange-500 to-red-500', count: '80+' },
    { name: 'Fridge', icon: Refrigerator, path: '/fridge', color: 'from-teal-500 to-blue-500', count: '60+' },
    { name: 'AC', icon: Wind, path: '/air-conditioner', color: 'from-indigo-500 to-purple-500', count: '45+' },
    { name: 'Washing Machine', icon: Waves, path: '/washing-machine', color: 'from-pink-500 to-rose-500', count: '35+' },
    { name: 'Routers', icon: Router, path: '/routers', color: 'from-yellow-500 to-orange-500', count: '75+' }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      price: 1199,
      originalPrice: 1299,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      rating: 4.9,
      reviews: 2547,
      brand: 'Apple',
      category: 'mobiles'
    },
    {
      id: '2',
      name: 'MacBook Pro 16"',
      price: 2399,
      originalPrice: 2599,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      rating: 4.8,
      reviews: 1832,
      brand: 'Apple',
      category: 'laptops'
    },
    {
      id: '3',
      name: 'Samsung Galaxy Watch Ultra',
      price: 649,
      originalPrice: 749,
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
      rating: 4.7,
      reviews: 943,
      brand: 'Samsung',
      category: 'watches'
    },
    {
      id: '4',
      name: 'Sony 75" OLED TV',
      price: 2799,
      originalPrice: 3199,
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      rating: 4.9,
      reviews: 567,
      brand: 'Sony',
      category: 'television'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Image Slider */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <ImageSlider />
      </section>

      {/* Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600">
            Discover premium electronics across all categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.path}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="relative z-10">
                  <Icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} products</p>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Hand-picked premium electronics just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showAddToCart={false}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300">
            View All Products
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest deals and product launches directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full focus:border-blue-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;