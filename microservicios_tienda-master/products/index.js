const express = require("express");
const app = express();
const port = 3001;

const products = [
  { id: 1, name: "Zapatos", price: 50 },
  { id: 2, name: "Camisa", price: 30 }
];

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servicio de Productos está activo. Visita /products para ver los productos.");
});

// Ruta para productos
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Products service running on port ${port}`);
});

