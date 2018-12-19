import axios from 'axios';
const API_KEY = '17fAwUh2SsmshDnl8bsZcd8stpEcp1KJSE8jsnH9yE5DYNn4Vm'

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
    timeout: 2000,
    headers: { 'X-Mashape-Key': API_KEY }
});

export const searchTracks = singerName => {

    return axiosInstance.get(`search?q=${singerName}`).then(response => response.data.data.map((item) => item.album))
}