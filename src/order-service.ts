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
      console.log(`Notifying customer of order: ${order.id}` );
    }
  }