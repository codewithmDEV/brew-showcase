import { useState } from "react";

function CheckoutPage() {
  const [form, setForm] = useState({ name: "", address: "", phone: "", notes: "" });
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
    return <h2>✅ Order placed! Thank you.</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="address" placeholder="Delivery Address" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <textarea name="notes" placeholder="Delivery Notes" onChange={handleChange} />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;