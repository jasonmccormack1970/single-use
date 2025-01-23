import express, { Application, Request, Response } from "express";
import { OrderService } from "./order-service";
// import { OrderService, OrderProcessor, OrderRepository, CustomerNotifier } from "./order-service-classes";

const app = express();
const port: number = 3000;

app.get("/", (re: Request, res: Response) => {
  res.send("Order Server Running");
});

app.listen(port, () => {

console.log(`Application listening on port ${port}`);
const orderService = new OrderService();
orderService.processOrder({ id: 1, item: 'Book', quantity: 2 });

// const orderProcessor = new OrderProcessor();
// const orderRepository = new OrderRepository();
// const customerNotifier = new CustomerNotifier();
// const orderService = new OrderService(orderProcessor, orderRepository, customerNotifier);

// const order = { id: 1, item: 'Book', quantity: 2 };
// orderService.processOrder(order);

});
