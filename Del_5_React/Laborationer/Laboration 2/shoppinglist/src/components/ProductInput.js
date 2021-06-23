import React from 'react'
import { useState, useRef } from 'react'

const ProductInput = ({addProductCb}) => {

    const [name,setName]=useState('');
    const [quantity,setQuantity]=useState(1);
    const [error,setError]=useState(undefined);

    const inputRef=useRef();

   const handleSubmit=(e)=> {
        e.preventDefault();
        if (name.trim()!=='') {
            addProductCb({name:name,quantity:quantity});
            clearInput();
            inputRef.current.focus();

        } else {
            setError('Du behöver ange produktnamn ')
        }

    }

    const clearInput=()=>{
        setName('');
        setQuantity(1);
        setError(undefined);

    }

    return (
        <form className="shadow" onSubmit={handleSubmit}> 
           <div className="input-group mb-3 ">
            <input type="text" className="form-control " placeholder="Produkt namn" ref={inputRef} value={name} onChange={e=>setName(e.target.value)} />
            <input type="number" min="1" className="form-control text-end" placeholder="Antal produkter" value={quantity} onChange={e=>setQuantity(e.target.value)}></input>
            <button className="btn btn-secondary " type="submit"><i className="bi bi-bag-plus-fill"></i></button>
            </div>
            <p className="text-danger text-center">{error}</p>
        </form>
    )
}

export default ProductInput
