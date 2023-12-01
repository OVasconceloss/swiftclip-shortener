import axios from "axios";

const apiURL = `https://api-ssl.bitly.com/v4`;
const accessToken = `3efa4ee5f1698af4425d0836c930d78b4dcb32d4`;

const shortenURL = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
});

export default shortenURL;