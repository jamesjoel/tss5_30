import axios from "axios";

const apiUrl = "http://localhost:4200/api/signup";
const apiUrlLogin = "http://localhost:4200/api/login";

let saveData = (obj)=>{
    return axios.post(apiUrl, obj)
}
let getData = ()=>{
    return axios.get(apiUrl)
}
let updateData = (id, obj)=>{
    return axios.put(apiUrl+"/"+id, obj)
}
let getDataById = (id)=>{
    return axios.get(apiUrl+"/"+id)
}
let deleteData = (id)=>{
    return axios.delete(apiUrl+"/"+id)
}
let doLogin = (obj)=>{
    return axios.post(apiUrlLogin, obj);
}


export {saveData, getData, getDataById, updateData, deleteData, doLogin};