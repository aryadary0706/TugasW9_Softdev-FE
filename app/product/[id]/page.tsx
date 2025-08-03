// app/product/[id]/page.tsx

import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

// Function to fetch product details
async function getProductDetails(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product details');
  return res.json();
}

// Main product page component (with inline typed params)
export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await getProductDetails(id);

  return (
    <main className="max-w-xl mx-auto p-6">
      <Link href="/" className="border rounded-2xl p-2 bg-blue-500 text-amber-50 mb-4 inline-block">
        Back to Products
      </Link>

      <h1 className="text-2xl font-bold mb-4">Detail Produk (SSG)</h1>

      <div className="mb-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="rounded mx-auto object-contain"
          sizes="(max-width: 600px) 100vw, 300px"
        />
      </div>

      <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
      <p className="text-green-700 font-semibold mb-2">${product.price}</p>
      <p className="text-gray-800 mb-2">{product.description}</p>
    </main>
  );
}

// SSG: generate dynamic routes
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
