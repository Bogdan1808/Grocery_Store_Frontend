const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: "http://192.168.1.104:1337/api"
})

const getCategory=()=>axiosClient.get('/categories?populate=*');

const getSLiders=()=> axiosClient.get('/slider?populate=*').then(resp=>{
    return resp.data.data
})

export default{
    getCategory,
    getSLiders
}