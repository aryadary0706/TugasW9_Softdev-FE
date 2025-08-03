// app/product/[id]/layout.tsx
import React, { ReactNode } from 'react'

export default function ProductDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
