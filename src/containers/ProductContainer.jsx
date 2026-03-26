import React, { useEffect, useState, useRef } from "react"
import { fetchProducts } from "../services/productService"
import { trackFetch } from "../utils/fetchTracker"
import ProductList from "../components/ProductList"
import SkeletonLoader from "../components/SkeletonLoader"

const ProductContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const requestId = useRef(0)

  const loadProducts = async () => {

    const currentRequest = ++requestId.current

    const info = trackFetch()
    console.log("Fetch info:", info)

    setLoading(true)

    try {

      const data = await fetchProducts()

      // Prevent stale state
      if (currentRequest !== requestId.current) return

      setProducts(data)

    } catch (err) {
      console.error(err)
    } finally {

      if (currentRequest === requestId.current)
        setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div>

      <h2>Product List</h2>

      {loading
        ? <SkeletonLoader />
        : <ProductList products={products} />
      }

    </div>
  )
}

export default ProductContainer