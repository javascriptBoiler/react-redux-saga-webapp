// get your own key from unsplash please 😇
import axios from 'axios';
import { apiPath } from '../utils/config'
import cloneDeep from 'lodash.clonedeep'

const KEY =
    '?client_id=bd1d37a507538209b06354730105e93bed1d254bd55cfce409cc17afb86d66cd';
const URL = `https://api.unsplash.com/photos/`;


const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchIT = (options) => {
    let { method = 'get', data, url } = options

    const domain = apiPath
    url = domain + url
    const cloneData = cloneDeep(data)

    switch (method.toLowerCase()) {
        case 'get':
            return axios.get(url, {
                params: cloneData,
            })
        case 'delete':
            return axios.delete(url, {
                data: cloneData,
            })
        case 'post':
            return axios.post(url, cloneData, { crossDomain: true })
        case 'put':
            return axios.put(url, cloneData, { crossDomain: true })
        case 'patch':
            return axios.patch(url, cloneData, { crossDomain: true })
        default:
            return axios(options)
    }
}

const fetchData = async (options) => {


    const jwttoken = localStorage.getItem('authorized') || '';
    axios.defaults.headers.common['Authorization'] = "Bearer " + jwttoken;
    axios.defaults.headers.common['Accept'] = "application/json";
    axios.defaults.headers.common['Content-Type'] = "application/json";

    try {
        const response = await fetchIT(options)
        const sampleObj = { success: true, data: response.data }
        return sampleObj;
    }
    catch (e) {
        if (e.response.status >= 400) {
            const {data = {}} = e.response
            throw new Error(data.error);
        }else{
            throw new Error(e.message);
        }
    }

    // if (e.response.status >= 400) {
    //     throw new Error("fuck");
    //     const sampleObj = { success: false, data: response.errors }
    //     return sampleObj;
    // }
    // const sampleObj = { success: true, data: response }
    // return sampleObj;
}

export { fetchImageStats, fetchData };
