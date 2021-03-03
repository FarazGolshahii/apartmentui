import axios from "axios"
import BaseAPIUrl from "./APIConfig";
import { toast } from 'react-toastify';

const errorMessage = "مشکل در اتصال به سرور";

axios.interceptors.response.use( 
    (respone) => respone.data.data,
    (error) => toast.error(errorMessage, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
);

export const DeleteData = (url, data) => axios.delete(BaseAPIUrl + url,JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
export const PostData = (url, data) => axios.post(BaseAPIUrl + url, JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
export const PutData = (url, data) => axios.put(BaseAPIUrl + url, JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
export const GetData = (url) => axios.get(BaseAPIUrl + url);