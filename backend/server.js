const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const products = [
  {
    id: 1,
    name: "Kanjivaram Saree",
    price: 1999,
    image: "http://localhost:3000/images/kanjivaram.jpg"
  },
  {
    id: 2,
    name: "Art Silk Saree",
    price: 9999,
    image: "http://localhost:3000/images/artsilk.jpg"
  },
  {
    id: 3,
    name: "Banarasi Saree",
    price: 6699,
    image: "http://localhost:3000/images/banarasi.jpg"
  },
  {
    id: 4,
    name: "Cotton Saree",
    price: 999,
    image: "http://localhost:3000/images/cotton.jpg"
  },
    {
    id: 5,
    name: "Fancy Saree",
    price: 1399,
    image: "http://localhost:3000/images/fancy.jpg"
  },
  {
    id: 6,
    name: "Length Saree",
    price: 3999,
    image: "http://localhost:3000/images/lengthsaree.jpg"
  },
  {
    id: 7,
    name: "Printed Saree",
    price: 4999,
    image: "http://localhost:3000/images/printed.jpg"
  },
  {
    id: 8,
    name: "Silk Sareee",
    price: 2999,
    image: "http://localhost:3000/images/silk.jpg"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/checkout", (req, res) => {
  const { cartItems } = req.body;
  res.json({ message: "Order placed successfully!", order: cartItems });
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
