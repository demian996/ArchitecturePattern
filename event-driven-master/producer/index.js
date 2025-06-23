const amqp = require("amqplib");

const queue = "pedidos";

async function connectWithRetry(retries = 5) {
  while (retries) {
    try {
      const connection = await amqp.connect("amqp://rabbitmq");
      const channel = await connection.createChannel();
      await channel.assertQueue(queue);

      setInterval(() => {
        const pedido = {
          id: Date.now(),
          product_id: 1,
          status: "creado",
        };
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(pedido)));
        console.log("Evento enviado:", pedido);
      }, 3000);
      break; // se conectó exitosamente

    } catch (err) {
      console.error("❌ Error en el productor:", err.message);
      retries--;
      console.log(`Reintentando en 5 segundos... (${retries} intentos restantes)`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

connectWithRetry();
