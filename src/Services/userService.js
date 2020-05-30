import axios from 'axios';
import environment from "./env";

const Url = `${environment.local}`;

class userService {

    static login = (user) => {
        return axios.post(`${Url}users/login`,user);
    }

    static register = (data) => {
        return axios.post(`${Url}users/register`,data);
    }

}

export default userService;