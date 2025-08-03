'use client';

import { useState, useEffect } from 'react';

type cartItem = {
  id: number;
  userId: number;
  date: string;
  products: Product[];
};

type Product = {
    productId: number;
    quantity: number;
}


export default function CartsPage() {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error('Failed to fetch carts:', err));
  }, []);

  if (!cartItems.length) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart List</h1>
      {cartItems.map((cart) => (
        <div key={cart.id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-lg font-semibold">Cart ID: {cart.id}</h2>
          <p className="text-sm mb-2">User ID: {cart.userId}</p>
          <div className="space-y-2">
            {cart.products.map((product, index) => (
              <div key={index} className="p-2 border rounded">
                <p className="font-semibold">Product ID: {product.productId}</p>
                <p className="text-sm">Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
