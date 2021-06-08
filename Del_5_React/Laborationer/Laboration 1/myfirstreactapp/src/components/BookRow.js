import React from 'react'
import './BookRow.css'

const BookRow = ({book, addBookLike,deleteBookLike, isBookLiked}) => {

    const handleAdd=()=>{       
        addBookLike(book.id);
    }
    const handleDelete=()=>{
        deleteBookLike(book.id);
    }
    return (
        // isBookLiked(book.id)?"liked":null} 
      
           
            
        <div className={`card shadow mb-3 book-row ${isBookLiked(book.id) ? "liked":""}`} >
                    
           <div className="row g-0">
                    <div className="col-md-4 col-xl-3 p-3 text-center ">
                        <img src={ book.img } alt="Bok omslag" />
                    </div>
                    <div className="col-md-8 col-xl-9 p-3">
                        <div className="card-body">
                            <h5 className="card-title">{ book.title }</h5>
                            <p className="card-text"><span className="fw-bold">Författare: </span> 
                            {
                                book.author.map((author,index)=>
                                   ( (index===0) ? ( <span key={index}> {author}  </span>  ):( <span key={index}>& {author} </span>  )))
                                                               
                            }
                            </p>
                            <p className="card-text">{ book.desc.substr(0,600) }...</p>
                            
                        </div>
                    </div>
                    
           </div>
           <div className="card-footer bg-body">
            <ul className="list-group list-group-horizontal align-items-center ">
              { isBookLiked(book.id) ? 
                    (<li className="list-group-item flex-fill border-0" onClick={handleDelete}><i className="bi bi-heart-fill fs-3 " /></li>):
                    (<li className="list-group-item flex-fill border-0" onClick={handleAdd}><i className="bi bi-heart fs-3 " /></li>)
                }

                <li className="list-group-item border-0 " ><span className="fw-bold">Sidor: </span> { book.pages }</li>
                <li className="list-group-item border-0"><span className="fw-bold">År: </span>{ book.year }</li>
                <li className="list-group-item border-0"><span className="fw-bold">Kategori: </span>{ book.cathegory }</li>
                <li className="list-group-item border-0"><span className="fw-bold">ISBN: </span>{ book.ISBN }</li>
            </ul>
                
          
           </div>


        </div>
    )
}


export default BookRow

