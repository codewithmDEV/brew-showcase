import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import ProductForm from '../src/components/ProductForm'

describe('ProductForm', () => {
  test('renders all form fields and the submit button', () => {
    const onAddProduct = vi.fn()

    render(<ProductForm onAddProduct={onAddProduct} />)

    expect(screen.getByLabelText(/coffee name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/origin/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument()
  })

  test('allows the user to enter product information and submit it', () => {
    const onAddProduct = vi.fn()

    render(<ProductForm onAddProduct={onAddProduct} />)

    fireEvent.change(screen.getByLabelText(/coffee name/i), {
      target: { value: 'Kenyan Coffee' },
    })

    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'Rich medium roast coffee' },
    })

    fireEvent.change(screen.getByLabelText(/origin/i), {
      target: { value: 'Kenya' },
    })

    fireEvent.change(screen.getByLabelText(/price/i), {
      target: { value: '15' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: /submit/i })
    )

    expect(onAddProduct).toHaveBeenCalledTimes(1)

    expect(onAddProduct).toHaveBeenCalledWith({
      name: 'Kenyan Coffee',
      description: 'Rich medium roast coffee',
      origin: 'Kenya',
      price: 15,
    })
  })

  test('clears the form after submitting', () => {
    const onAddProduct = vi.fn()

    render(<ProductForm onAddProduct={onAddProduct} />)

    const nameInput = screen.getByLabelText(/coffee name/i)
    const descriptionInput = screen.getByLabelText(/description/i)
    const originInput = screen.getByLabelText(/origin/i)
    const priceInput = screen.getByLabelText(/price/i)

    fireEvent.change(nameInput, {
      target: { value: 'Ethiopian Sunrise' },
    })

    fireEvent.change(descriptionInput, {
      target: { value: 'Bright and fruity coffee' },
    })

    fireEvent.change(originInput, {
      target: { value: 'Ethiopia' },
    })

    fireEvent.change(priceInput, {
      target: { value: '14' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: /submit/i })
    )

    expect(nameInput).toHaveValue('')
    expect(descriptionInput).toHaveValue('')
    expect(originInput).toHaveValue('')
    expect(priceInput).toHaveValue(null)
  })
})