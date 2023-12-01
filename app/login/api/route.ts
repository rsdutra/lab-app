class LoginRequest{
    constructor(jsonRequest: any){
        this.login = jsonRequest.login;
        this.pwd = jsonRequest.pwd;
    }
    login: string;
    pwd: string;
}
export async function POST(request: any){
    
    let req = new LoginRequest(await request.json());
    let loginResponse = {"status": "fail"};
    if(req.login == "test@test.com" && req.pwd == "123"){
        loginResponse = {"status": "success"};
    }
    return Response.json(loginResponse);
    
}