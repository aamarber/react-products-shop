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

    getCommonRequest(){
        return {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          };
    }

    setToken(token){
        if(!token){
            throw new Error('token is required');
        }

        this.token = token;
    }

    async login(user, password){
        let response = await fetch(`${this.apiUrl}login`,
        {
            ...this.getCommonRequest(),
            body: JSON.stringify({
              email: user,
              password: password
            })
        });
        
        return await response.json();
    }

    async getProducts(){
        const response = await fetch(`${this.apiUrl}products`, {
            ...this.getCommonRequest(),
            body: JSON.stringify({
              token: this.token
            })
          });

        return response.json();
    }

    async getProduct(id){
        const response = await fetch(`${this.apiUrl}products/${id}`, {
            ...this.getCommonRequest(),
            body: JSON.stringify({
              token: this.token
            })
          });

        return response.json();
    }

    async getReviews(productId){
        const response = await fetch(`${this.apiUrl}reviews/${productId}`, {
            ...this.getCommonRequest(),
            body: JSON.stringify({
              token: this.token
            })
          });

        return response.json();
    }
}