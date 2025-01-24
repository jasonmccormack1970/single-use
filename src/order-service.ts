export class OrderService {
  processOrder(order: any) {
    console.log(`Processing order: ${order.id}`);
    this.saveOrder(order);
    this.validateOrder(order);
    this.notifyCustomer(order);
  }

  saveOrder(order: any) {
    console.log(`Saving order: ${order.id}`);
  }

  validateOrder(order: any) {
    console.log(`Validating order: ${order.id}`);
  }

  notifyCustomer(order: any) {
    console.log(`Notifying customer of order: ${order.id}`);
  }
}

export function handleUserOperations(userId: string): void {

  if (!userId || userId.trim() === '') {
    throw new Error('Invalid user ID');
  }

  const userData = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  const transformedData = {
    ...userData,
    timestamp: new Date().toISOString()
  };

  const message = `User Data: ${transformedData.name}, Email: ${transformedData.email}, Timestamp: ${transformedData.timestamp}`;
  console.log(message);
}
