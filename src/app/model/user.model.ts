import { Role } from "./role.model";

export class User{
    public user_id:number;
    public username:string ;
    public email:String;
    public password : string ;
    public roles:Role[];
    public confirmPassword: string;
    public code:string; 
    constructor(username?: string, email?: string, password?: string) {
       
        this.username = username;
        this.email = email;
        this.password = password;
       
      }
}