import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProductPage from "../src/pages/ProductPage";
import { AuthProvider } from "../src/context/AuthContext";

global.fetch = vi.fn();
describe("ProductPage Component", () => {
  const mockProduct = {
    id: "1",
    name: "Vanilla Bean",
    description: "Medium Roast, nutty flavor",
    origin: "Colombia",
    price: 10,
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders product details after successful fetch", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/products/1"]}>
          <Routes>
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>,
    );
    expect(screen.getByText("Loading product details...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Vanilla Bean")).toBeInTheDocument();
      expect(screen.getByText("Colombia")).toBeInTheDocument();
      expect(screen.getByText("KES10.00")).toBeInTheDocument();
    });
  });

  it("handles price editing via PATCH request", async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ...mockProduct, price: 15 }),
      });

    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/products/1"]}>
          <Routes>
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Vanilla Bean")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Edit Price"));

    const priceInput = screen.getByLabelText("New Price (KES):");
    fireEvent.change(priceInput, { target: { value: "15.00" } });

    fireEvent.click(screen.getByText("Save Price"));

    await waitFor(() => {
      expect(
        screen.getByText("Price updated successfully!"),
      ).toBeInTheDocument();
      expect(screen.getByText("KES15.00")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenLastCalledWith(
      "http://localhost:3000/products/1",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify({ price: 15 }),
      }),
    );
  });
});