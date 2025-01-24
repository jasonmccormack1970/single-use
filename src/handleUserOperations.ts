export function validateUserId(userId: string): void {
    if (!userId || userId.trim() === '') {
      throw new Error('Invalid user ID');
    }
  }
  
  export function fetchUserData(userId: string) {
    // Mock function to simulate fetching user data
    return {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  }
  
  export function transformUserData(userData: any): any {
    return {
      ...userData,
      timestamp: new Date().toISOString()
    };
  }
  
  export function generateMessage(transformedData: any): string {
    return `User Data: ${transformedData.name}, Email: ${transformedData.email}, Timestamp: ${transformedData.timestamp}`;
  }
  
  export function displayMessage(message: string): void {
    console.log(message);
  }
  
  export function handleUserOperations(userId: string): void {
    validateUserId(userId);
    
    const userData = fetchUserData(userId);
    
    const transformedData = transformUserData(userData);
    
    const message = generateMessage(transformedData);
    
    displayMessage(message);
  }
  
 
  