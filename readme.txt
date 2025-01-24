Definition
The Single Responsibility Principle (SRP), the first of the five principles of SOLID, is a fundamental concept in object-oriented software development.
This principle states that a class should have only one reason to change, meaning it should be responsible for only one part of the software’s functionality.
You should apply this principle not only to classes but also to functions, modules, etc.

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
