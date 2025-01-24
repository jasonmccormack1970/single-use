export class OrderProcessor {
  processOrder(order: any) {
    console.log(`Processing order: ${order.id}`);
  }
}

export class OrderRepository {
  saveOrder(order: any) {
    console.log(`Saving order: ${order.id}`);
  }
}

export class CustomerNotifier {
  notifyCustomer(order: any) {
    console.log(`Notifying customer of order: ${order.id}`);
  }
}

export class OrderService {
  private orderProcessor: OrderProcessor;
  private orderRepository: OrderRepository;
  private customerNotifier: CustomerNotifier;

  constructor(
    orderProcessor: OrderProcessor,
    orderRepository: OrderRepository,
    customerNotifier: CustomerNotifier
  ) {
    this.orderProcessor = orderProcessor;
    this.orderRepository = orderRepository;
    this.customerNotifier = customerNotifier;
  }

  processOrder(order: any) {
    this.orderProcessor.processOrder(order);
    this.orderRepository.saveOrder(order);
    this.customerNotifier.notifyCustomer(order);
  }
}
