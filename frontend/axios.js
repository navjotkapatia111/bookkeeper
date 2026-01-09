import axios from "axios"

export const BaseUrl = axios.create({baseURL:`${import.meta.env.VITE_BASE_BACKEND}`})