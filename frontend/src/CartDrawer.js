import React from "react";

export default function CartDrawer({ open, onClose, items, incQty, decQty, removeItem, clearCart, total }) {
  return (
    <aside className={open ? "drawer open" : "drawer"} role="dialog" aria-label="Cart">
      <div className="drawer-header">
        <div style={{fontWeight:700}}>Your Cart</div>
        <button onClick={onClose} className="cart-btn" aria-label="Close cart">✖</button>
      </div>
      <div className="drawer-body">
        {items.length === 0 && <div>Your cart is empty.</div>}
        {items.map((it) => (
          <div className="cart-row" key={it.id}>
            <img src={it.image} alt={it.name} />
            <div className="row-info">
              <div style={{fontWeight:600}}>{it.name}</div>
              <div>₹{it.price}</div>
            </div>
            <div className="qty">
              <div className="counter">
                <button onClick={() => decQty(it.id)}>-</button>
                <span>{it.qty}</span>
                <button onClick={() => incQty(it.id)}>+</button>
              </div>
            </div>
            <button onClick={() => removeItem(it.id)} className="cart-btn" aria-label="Remove">🗑️</button>
          </div>
        ))}
      </div>
      <div className="drawer-footer">
        <div className="total"><span>Total</span><span>₹{total}</span></div>
        <button className="checkout" onClick={() => { alert("Order placed successfully!"); clearCart(); }}>Checkout</button>
        <button className="clear" onClick={clearCart}>Clear Cart</button>
      </div>
    </aside>
  );
}
