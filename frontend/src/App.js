import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // [{id, name, price, image, qty}]

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  const toggleCart = () => setCartOpen((s) => !s);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const incQty = (id) => setCart((prev) => prev.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  const decQty = (id) => setCart((prev) => prev.flatMap((p) => {
    if (p.id !== id) return [p];
    const q = p.qty - 1;
    return q > 0 ? [{ ...p, qty: q }] : [];
  }));
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div>
      <Navbar onCartClick={toggleCart} cartCount={cart.reduce((s,p)=>s+p.qty,0)} />
      <Hero />
      <ProductList products={products} onAdd={addToCart} />
      <CartDrawer
        open={cartOpen}
        onClose={toggleCart}
        items={cart}
        incQty={incQty}
        decQty={decQty}
        removeItem={removeItem}
        clearCart={clearCart}
        total={total}
      />
    </div>
  );
}

export default App;
