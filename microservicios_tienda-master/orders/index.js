const express = require("express");
const app = express();
const port = 3002;

const orders = [
  { id: 1, product_id: 1, quantity: 2, status: "paid" },
  { id: 2, product_id: 2, quantity: 1, status: "pending" }
];

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servicio de Pedidos está activo. Visita /orders para ver los pedidos.");
});

// Ruta para pedidos
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(port, () => {
  console.log(`Orders service running on port ${port}`);
});
