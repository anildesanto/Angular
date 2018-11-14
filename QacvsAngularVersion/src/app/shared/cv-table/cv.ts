export interface ICv
{
    cvId: number;
    cvLink: {};
    fileType: string;
    fileName: string;
    creationDate: Date;
    status: string;
    user: {
        userId:number;
        firstName: string;
        lastName: string;
        email: string;  
    };

}