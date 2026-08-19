import { useState } from "react";

function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f3eb",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "2.5rem",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#2d7a4f" }}>✅ Order placed!</h2>
          <p style={{ color: "#4a3428" }}>Thank you for your order, {form.name}.</p>
          <p style={{ color: "#6b5a4a" }}>We'll deliver to: {form.address}</p>
          <p style={{ color: "#6b5a4a", marginTop: "1rem", fontSize: "0.9rem" }}>
            We'll contact you at {form.phone} if needed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f3eb",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", color: "#3e2c1b", margin: "0 0 1.5rem 0" }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #8b5a2b")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
          <input
            name="address"
            placeholder="Delivery Address"
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #8b5a2b")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #8b5a2b")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
          <textarea
            name="notes"
            placeholder="Delivery Notes (optional)"
            onChange={handleChange}
            rows="3"
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1.5rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              fontFamily: "inherit",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #8b5a2b")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              background: "#8b5a2b",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#6f4620")}
            onMouseLeave={(e) => (e.target.style.background = "#8b5a2b")}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;