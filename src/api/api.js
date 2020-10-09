import axios from 'axios';

export default () => {
    //npm install dotenv -- save
    //console.log(`TOKEN ${process.env.VUE_APP_API_TOKEN}`)

    let api = axios.create({
        //baseURL: 'http://localhost:3000'
        baseURL: 'https://api.github.com',
        headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`
        }
    });
    return api
};
