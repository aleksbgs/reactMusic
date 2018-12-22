import axios from 'axios';
import _ from 'lodash';
const API_KEY = '17fAwUh2SsmshDnl8bsZcd8stpEcp1KJSE8jsnH9yE5DYNn4Vm'

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
    timeout: 2000,
    headers: { 'X-Mashape-Key': API_KEY }
});

export const searchTracks = singerName => {

    return axiosInstance.get(`search?q=${singerName}`).then(response => {
        const albums = response.data.data.map(item => item.album)
        const uniqueAlbums = _.uniqBy(albums, 'title');
        return uniqueAlbums;
    })
}
export const getAlbumTracks = albumId => {

    return axiosInstance.get(`album/${albumId}`).then(response => response.data.tracks.data);

}