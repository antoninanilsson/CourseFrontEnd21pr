import React from 'react'
import ProductRow from './ProductRow'
import { useEffect,useState } from 'react'

const ProductTable = ({productList,deleteProductCb,editProductCb,clearListCb}) => {

    const [total,setTotal]=useState('');

    useEffect(() => {
        let _total=0;

        productList.forEach(p=>{
            _total+=Number(p.quantity);
        })
        setTotal(_total)
      }, [productList])

   


    return (
        <div>
                       <button className="btn btn-danger" onClick={clearListCb}><i className="bi bi-trash"></i> Rensa listan</button>
              
                 
                        <table className="table table-hover caption-top mt-3 shadow">
                        
                       
                                <thead>
                                    <tr>
                                        <th scope="col">Inköpt</th>
                                        <th scope="col">Namn</th>
                                        <th scope="col" className="text-center">Antal</th>
                                        <th scope="col"></th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                    {
                                        productList.map(product => (
                                            <ProductRow product={product} key={product.id} deleteProductCb={deleteProductCb} editProductCb={editProductCb} />
                                        ))
                                    }
                                
                                
                                    </>
                                </tbody>
                                <tfoot>
                                     <tr>
                                      <th></th>   
                                      <td colSpan="3">Totalt antal produkter - {total}</td>
                                      
                                      

                                     </tr>
                                   
                                </tfoot>
                                </table>
                
          
            
        </div>
    )
}

export default ProductTable
