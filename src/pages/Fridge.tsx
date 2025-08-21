import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, Search } from 'lucide-react';

// Define product type
type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  brand: string;
  category: string;
};

const Fridge = () => {
  const [fridgeProducts, setFridgeProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const brands = ['Samsung', 'LG', 'Sony'];
  const priceRanges = [
    { label: 'Under $1500', value: 'under-1500' },
    { label: '$1500 - $2000', value: '1500-2000' },
    { label: '$2000 - $2500', value: '2000-2500' },
    { label: 'Above $2500', value: 'above-2500' }
  ];

  // Fetch data from FastAPI backend
  useEffect(() => {
    fetch('http://localhost:8000/fridges')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch fridge data');
        return res.json();
      })
      .then((data) => {
        setFridgeProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = fridgeProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;

    let matchesPrice = true;
    switch (priceRange) {
      case 'under-1500':
        matchesPrice = product.price < 1500;
        break;
      case '1500-2000':
        matchesPrice = product.price >= 1500 && product.price <= 2000;
        break;
      case '2000-2500':
        matchesPrice = product.price > 2000 && product.price <= 2500;
        break;
      case 'above-2500':
        matchesPrice = product.price > 2500;
        break;
    }

    return matchesSearch && matchesBrand && matchesPrice;
  });

  if (loading) return <div className="text-center py-12">Loading refrigerators...</div>;
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Refrigerators</h1>
        <p className="text-xl text-gray-600">
          Energy-efficient refrigerators with smart features and ample storage
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-lg font-semibold text-gray-900">Filters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search refrigerators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">All Prices</option>
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedBrand('');
              setPriceRange('');
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Fridge;
