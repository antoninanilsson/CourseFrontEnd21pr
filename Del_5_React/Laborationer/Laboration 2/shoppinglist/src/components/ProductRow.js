import React, { useState } from 'react'
import ProductEdit from './ProductEdit'

const ProductRow = ({product, deleteProductCb,editProductCb}) => {

    const toggleOrdered =()=>{
        editProductCb({...product,isOrdered:!product.isOrdered})
    }
    const [edit,setEdit]=useState(false)

    const toggleEdit =()=>{
        setEdit(prev=>!prev)
    }    

    return (
        <>
        { !edit

        
            ? <tr>
                            <th scope="row">
                                {/* { product.isOrdered
                                  ?  <button className="btn btn-success" onClick={toggleOrdered}><i className="bi bi-bag-check"></i></button>
                                  :  <button className="btn btn-secondary" onClick={toggleOrdered}><i className="bi bi-bag"></i></button>
                                } */}
                            <button className={`btn ${product.isOrdered ? 'btn-success' : 'btn-secondary'}`} onClick={toggleOrdered}><i className={`bi ${product.isOrdered ? 'bi-bag-check' : 'bi-bag'}`}></i></button>
                            </th>
                            <td className={`${product.isOrdered ? 'ordered' : ''}`}>{product.name}</td>
                            <td className={`text-center ${product.isOrdered ? 'ordered' : ''}`}>{product.quantity}</td>
                            <td className="text-end">
                                
                                <button className="btn btn-info me-2" onClick={toggleEdit}><i className="bi bi-pencil-square"></i></button>
                                <button className="btn btn-danger " onClick={()=>deleteProductCb(product)}><i className="bi bi-bag-x"></i></button>
                            </td>
              </tr>
            : <tr>
                                <ProductEdit product={product} toggleEdit={toggleEdit} editProductCb={editProductCb} />
              </tr>
        }    
       </>
    )
}

export default ProductRow


