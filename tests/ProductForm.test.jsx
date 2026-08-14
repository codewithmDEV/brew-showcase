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
      screen.getByRole('