import axios from "axios"
import BaseAPIUrl from "./APIConfig";

export const PostData = async (url, data) =>
{
    try 
    {
        return await axios.post(BaseAPIUrl + url, JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
    }
    catch(e)
    {
        alert(e);
        return undefined;
    }
}

export const PutData = async (url, data) =>
{
    try 
    {
        return await axios.put(BaseAPIUrl + url, JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
    }
    catch(e)
    {
        alert(e);
        return undefined;
    }
}

export const GetData = async (url) =>
{
    try 
    {
        const {data : result} = await axios.get(BaseAPIUrl + url);
        return result;
    }
    catch(e)
    {
        alert(e);
        return undefined;
    }
}

export const DeleteData = async (url, data) =>
{
    try 
    {
        return await axios.delete(BaseAPIUrl + url,JSON.stringify(data), {headers:{'Content-Type' : 'text/json' }});
    }
    catch(e)
    {
        alert(e);
        return undefined;
    }
}