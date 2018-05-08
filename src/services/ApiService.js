import AuthService from './AuthService';
class ApiService {
    constructor() {
        this.configPromise = fetch('/config.json')
            .then(res => res.json())
            .then(
                conf => {
                    this.conf = conf;
                },
                error => error
            );
    }
    fetch(url, opts) {
        if (AuthService.isAuthenticated()) {
            if (!opts.headers) {
                opts.headers = {};
            }
            opts.headers.Authorization = `Bearer ${AuthService.getToken()}`;
        }
        return this.configPromise
            .then(
                () => fetch(`${this.conf.apiUrl}${url}`, opts),
                error => error
            );
    }
}

export default new ApiService();
