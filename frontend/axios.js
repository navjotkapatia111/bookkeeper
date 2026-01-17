import axios from "axios"

export const BaseUrl = axios.create({baseURL:`${import.meta.env.VITE_BASE_BACKEND}`})

BaseUrl.interceptors.request.use((config)=>{
    const authToken = localStorage.getItem('userAuth')
    const token = JSON.parse(authToken)?.token

    if(token) config.headers['Authorization'] = `Bearer ${token}`
    return config
})

BaseUrl.interceptors.response.use((response)=>response,(error)=>{
    if(error.response && error.response.status === 401){
        localStorage.removeItem('userAuth')
        window.location.href = '/login'
    }
})