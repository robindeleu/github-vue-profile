import api from './api';

export default {
    resource: 'users',
        getUser(username){
        return api().get(`/users/${username}`);
    }
}