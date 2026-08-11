import { useState } from 'react'

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const product = {
      name: formData.name,
      description: formData.description,
      origin: formData.origin,
      price: Number(formData.price),
    }

    onAddProduct(product)

    setFormData({
      name: '',
      description: '',
      origin: '',
      price: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Coffee Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label htmlFor="origin">Origin</label>
      <input
        id="origin"
        name="origin"
        type="text"
        value={formData.origin}
        onChange={handleChange}
        required
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ProductForm