export default class ApiClient{
    constructor(apiUrl){
        if(!apiUrl){
            throw new Error('apiUrl is required');
        }

        this.apiUrl = apiUrl;

        if(!this.apiUrl.endsWith('/')){
            this.apiUrl += '/';
        }
    }

    setToken(token){
        if(!token){
            throw new Error('token is required');
        }

        this.token = token;
    }

    async login(user, password){
        let response = await fetch(`${this.apiUrl}login`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
              email: user,
              password: password
            })
          });
        
        return await response.json();
    }

    async getProducts(){
        const response = await fetch(`${this.apiUrl}products`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
              token: this.token
            })
          });

        return response.json();
    }
}