import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RKwK4ts9ne6cNUtCjq5Zlbze6H4V-mRqpEFyDNepkXk'
    }
});