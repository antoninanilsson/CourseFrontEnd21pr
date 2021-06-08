import React from 'react'
import BookRow from './BookRow'

const BookTable = ({books,addBookLike,deleteBookLike,isBookLiked}) => {
    return (
        <div className="container-md mt-3">
            
                {
                books.map( book=> {
                    return <BookRow book={book} key={book.id} addBookLike={addBookLike} deleteBookLike={deleteBookLike} isBookLiked={isBookLiked} />

                })
            }           
            
            
        </div> 
    )
}

export default BookTable
