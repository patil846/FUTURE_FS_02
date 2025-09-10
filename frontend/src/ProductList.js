import React from "react";

export default function ProductList({ products, onAdd }) {
  return (
    <>
      {/* Inline CSS for this component */}
      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 10px;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .price {
          color: #333;
          font-weight: bold;
        }

        .btn {
          background: #007bff;
          color: white;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .btn:hover {
          background: #0056b3;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="section" id="products">
        <h2 style={{ marginBottom: "20px", fontSize: "1.5rem", fontWeight: "700" }}>
          All Products
        </h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} />
              <div className="info">
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div className="price">₹{p.price}</div>
                <button className="btn" onClick={() => onAdd(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
