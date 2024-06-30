import axios from "axios";

const API_URL = 'http://localhost:8000/books';

export const getBooks = async ()=>{
    const res = await axios.get(API_URL);
    return res.data;
}

export const getBooksById = async (id)=>{
    const res = await axios.get(API_URL+'/'+id);
    return res.data;
}