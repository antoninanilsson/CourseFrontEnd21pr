import React from 'react'
import { useState, useEffect } from 'react'

const ProductEdit = ({product, toggleEdit,editProductCb}) => {

    const [name,setName]=useState('');
    const [quantity,setQuantity]=useState(1);

    useEffect(() => {
        setName(product.name);
        setQuantity(product.quantity)
      }, [product])

    const saveChanges =()=>{
        if (name.trim()!=='') {
            editProductCb({...product, name:name,quantity:quantity});
            toggleEdit();
        }

    }
    const discardChanges=()=>{
        toggleEdit();
    }

    return (
        <>
             <th scope="row">
             { product.isOrdered
                                  ?  <button className="btn btn-success"  disabled><i className="bi bi-bag-check"></i></button>
                                  :  <button className="btn btn-secondary" disabled><i className="bi bi-bag"></i></button>
                                }            
             </th>
             <td className="ps-0"><input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} /></td>
             <td className="px-0 position-relative"><input type="number" min="1" className=" position-absolute top-50 start-50 translate-middle form-control text-center "  value={quantity} onChange={e=>setQuantity(e.target.value)}></input></td>
             <td className="text-end">
                                
                <button className="btn btn-success me-2" onClick={saveChanges}><i className="bi bi-save"></i></button>
                <button className="btn btn-secondary " onClick={discardChanges} ><i className="bi bi-arrow-counterclockwise"></i></button>
            </td>
        </>
    )
}

export default ProductEdit
