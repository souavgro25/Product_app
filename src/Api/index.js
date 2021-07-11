import axios from "axios"

const url ="http://localhost:3002/products";

export const  fetchproduct =async ()=>{
    try {
        
    const response = await axios.get(url)
    return response.data
    } catch (error) {
        console.log(error)
    }
}

export const PostProduct =async(data)=>{
    try {
        await axios.post (url,{product:data})
    } catch (error) {
        
    }
}

export const ProductDelete=async(id)=>{
    try {
        await axios.delete(`${url}/${id}`)
    } catch (error) {
        
    }
}

export const ProductUpdate =async(id,data)=>{
    try {
        await axios.patch(`${url}/${id}`,{product:data})
    } catch (error) {
        
    }
}