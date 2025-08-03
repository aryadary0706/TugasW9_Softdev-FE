import Link from 'next/link'
import Image from 'next/image'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', // SSR: fetch tiap request
  });
  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();
  const products = data;

  return (
    <div>
  <h1 className="text-2xl font-bold mb-4">Product List</h1>

    <head className="flex flex-col items-center">
      <title>Product List</title>
      <meta name="description" content="List of products from the fake store API" />
      <link rel="icon" href="/favicon.ico" />
    </head>

  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-wrap">
    {products.map((product: any) => (
      <li key={product.id} className="border p-2 rounded-2xl shadow-md hover:shadow-md transition">
        <Link href={`/product/${product.id}`} className="block space-y-2">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            priority
            placeholder='blur'
            blurDataURL='https://via.placeholder.com/100'
            className="rounded mx-auto object-contain"
          />

          <h2 className="text-md font">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price}</p>
        </Link>
      </li>
    ))}
  </ul>
</div>

  );
}
