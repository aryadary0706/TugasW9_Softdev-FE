import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
        <header className="bg-cyan-900 text-neutral-50 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">FakeStore</Link>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/Carts">Carts</Link>
            </div>
          </nav>
        </header>
    </div>
  )
}
