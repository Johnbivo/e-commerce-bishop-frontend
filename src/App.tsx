import { Grid, GridItem } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Navbar from "./components/navbar"
import { ProductGrid } from "./components/products/ProductGrid"
import type { Product } from "./types/Product"
import { fetchProducts } from "./services/productService"

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError('Failed to load products. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <GridItem area="aside" p={5} display={{ base: "none", lg: "block" }}>
            {/* Add filters here later */}
        </GridItem>

        <GridItem area="main" p={5}>
          <ProductGrid 
            products={products}
            isLoading={isLoading}
            error={error}
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
