import axios from 'axios';


class Api {
  
    async getUsers() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movies/day?api_key=c8148d98d2d74fb8f5bb33488e938599');

        return response.data;
    }

    async searchMovies() {
        const resposta = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=c8148d98d2d74fb8f5bb33488e938599&query=batman");
        
        return resposta.data;
    }
}

export default new Api();