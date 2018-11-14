export interface IUser
{
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picture: {};
    prefLocation: string;
    department: {
      departmentId: number;
      role: string;
      handler: {};
      hibernateLazyInitializer: {};
    }
}