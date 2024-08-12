interface User {
    // Define properties of the user object if needed
  }
  
  interface Data {
    accessToken: string;
    expires: string;
    user: User;
  }
  
  export default interface SessionType {
    data: Data;
    status: string;
  }