import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProduct(productTitle: string) {
    const filteredProduct = productList.filter(product => product.title.includes(productTitle))

    setFilteredProducts(filteredProduct)
  }

  return (
    <div>
      <input type="text" onChange={(inputProduct) => searchProduct(inputProduct.target.value)} />

      {filteredProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

