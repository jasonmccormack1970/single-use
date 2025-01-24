/// <reference path="./types.ts" />
import express, { Application, Request, Response } from "express";
import { OrderService } from "./order-service";
import { handleUserOperations } from "./order-service";
import { Order } from "./types";

const app: Application = express();
const port: number = 3000;

app.get("/", (re: Request, res: Response) => {
  res.send("Order Server Running");
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
  const orderService = new OrderService();
  orderService.processOrder({ id: 1, item: "Book", quantity: 2 } as Order);
  handleUserOperations('user123');
  console.log("Done ........");
});
