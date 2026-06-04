"use client"

import { CatalogPage } from "@/components/catalog-page"
import { WaProvider } from "@/lib/wa-context"

export default function TomasPage() {
  return (
    <WaProvider value="5491127054075">
      <CatalogPage />
    </WaProvider>
  )
}
