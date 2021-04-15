import axios from 'axios';

class Api {
    async login({email, password}) {        
        if (email === 'admin@admin.com' && password === '1234') {
            return true;
        }

        return false;
    }

    async getUsers() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=c8148d98d2d74fb8f5bb33488e938599');

        return response.data;
    }
}

export default new Api();