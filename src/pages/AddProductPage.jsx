import { useState } from 'react'
import ProductForm from '../components/ProductForm'

function AddProductPage() {
  const [message, setMessage] = useState('')

  const handleAddProduct = async (product) => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      if (!response.ok) {
        throw new Error('Failed to add product')
      }

      const newProduct = await response.json()

      console.log('Product added:', newProduct)
      setMessage('Product added successfully!')
    } catch (error) {
      console.error('Error adding product:', error)
      setMessage('Failed to add product.')
    }
  }

  return (
    <main>
      <h1>Add Product</h1>

      <ProductForm onAddProduct={handleAddProduct} />

      {message && <p>{message}</p>}
    </main>
  )
}

export default AddProductPage