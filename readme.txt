classes single responsibility

import { OrderService, OrderProcessor, OrderRepository, CustomerNotifier } from "./order-service-classes";

// USAGE
const orderProcessor = new OrderProcessor();
const orderRepository = new OrderRepository();
const customerNotifier = new CustomerNotifier();
const orderService = new OrderService(orderProcessor, orderRepository, customerNotifier);

const order = { id: 1, item: 'Book', quantity: 2 } as Order;
orderService.processOrder(order);


function SR

import * as user from "./handleUserOperations"

USAGE
user.handleUserOperations('user123');
