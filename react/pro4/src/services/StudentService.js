import axios from "axios";

const apiUrl = "http://localhost:4200/student";

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

export {saveData, getData, getDataById, updateData, deleteData};