let cache = null
let cacheTime = null

export const fetchProducts = async () => {
  if (cache) {
    console.log("Using cached data")
    return cache
  }

  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json()

  cache = data.products
  cacheTime = Date.now()

  return cache
}