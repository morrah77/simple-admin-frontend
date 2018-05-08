class AuthService {
    constructor() {
        this.authenticated = false;
        this.token = null;
    }
    authenticate(token) {
        this.authenticated = true;
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new AuthService();
