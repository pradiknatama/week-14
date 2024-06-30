import { getBooks } from "@/services/bookService";
import { useState,useEffect } from "react";



const Book = ()=>{
    const [ books, setBook ] = useState([]);
    
    useEffect(()=>{
        fetchBooks();
    },[]);

    const fetchBooks = async ()=>{
        const data = await getBooks();
        setBook(data);
    }
    
    return (
        <div>
            Books
            <ul>
                {books.map((book)=>{
                    <li>
                        {book.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Book;