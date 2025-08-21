import React from 'react';
import { Package, Truck, MapPin, CheckCircle } from 'lucide-react';

const OrderTracking = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-15',
      status: 'delivered',
      total: 1299.99,
      items: [
        {
          name: 'iPhone 15 Pro Max',
          image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
          quantity: 1
        }
      ],
      tracking: 'TRK123456789',
      estimatedDelivery: '2025-01-18'
    },
    {
      id: 'ORD-002',
      date: '2025-01-20',
      status: 'shipped',
      total: 2399.99,
      items: [
        {
          name: 'MacBook Pro 16"',
          image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
          quantity: 1
        }
      ],
      tracking: 'TRK987654321',
      estimatedDelivery: '2025-01-25'
    },
    {
      id: 'ORD-003',
      date: '2025-01-22',
      status: 'processing',
      total: 649.99,
      items: [
        {
          name: 'Samsung Galaxy Watch Ultra',
          image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
          quantity: 1
        }
      ],
      tracking: 'TRK456789123',
      estimatedDelivery: '2025-01-28'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'processing':
        return <Package className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Order Tracking</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package className="mx-auto h-24 w-24 text-gray-400 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No orders found</h2>
          <p className="text-xl text-gray-600">Start shopping to see your orders here</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Order Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${order.total.toFixed(2)}
                    </p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Items */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{item.name}</h5>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Tracking Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Tracking Number</p>
                          <p className="text-sm text-gray-600 font-mono">{order.tracking}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Estimated Delivery</p>
                          <p className="text-sm text-gray-600">
                            {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Status Timeline */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h4>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center ${order.status !== 'processing' ? 'text-green-600' : 'text-blue-600'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status !== 'processing' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <Package className="h-4 w-4" />
                      </div>
                      <span className="ml-2 text-sm font-medium">Order Placed</span>
                    </div>
                    
                    <div className={`flex items-center ${order.status === 'delivered' || order.status === 'shipped' ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status === 'delivered' || order.status === 'shipped' ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <Truck className="h-4 w-4" />
                      </div>
                      <span className="ml-2 text-sm font-medium">Shipped</span>
                    </div>
                    
                    <div className={`flex items-center ${order.status === 'delivered' ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status === 'delivered' ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="ml-2 text-sm font-medium">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTracking;