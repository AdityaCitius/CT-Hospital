export class SignInData{
    private username: any;
    private password: any;

    constructor(username:any,password:any){
        this.username = username;
        this.password = password;
    }

    getusername(){
        return this.username;
    }
    getpassword(){
        return this.password;
    }
}