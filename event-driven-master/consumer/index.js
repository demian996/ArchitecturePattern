const amqp = require("amqplib");

async function consumeEvent() {
  const queue = "pedidos";

  try {
    const conn = await amqp.connect("amqp://rabbitmq");
    const channel = await conn.createChannel();
    await channel.assertQueue(queue);
    console.log("🎧 Esperando eventos...");

    channel.consume(queue, msg => {
      const content = JSON.parse(msg.content.toString());
      console.log("Evento recibido:", content);
      channel.ack(msg);
    });
  } catch (err) {
    console.error("Error en el consumidor:", err);
  }
}

consumeEvent();
