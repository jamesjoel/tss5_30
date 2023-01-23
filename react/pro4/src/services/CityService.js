import axios from "axios";

const apiUrl = "http://localhost:4200/api/city";


let getData = ()=>{
    return axios.get(apiUrl)
}


export {getData};