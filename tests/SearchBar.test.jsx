import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar";

describe("SearchBar", () => {
  it("renders the search input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search products/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onSearch with the correct value when typing", () => {
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(onSearchMock).toHaveBeenCalledWith("test");
  });
});