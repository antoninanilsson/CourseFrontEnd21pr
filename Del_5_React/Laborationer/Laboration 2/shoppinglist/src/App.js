import { useState,useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'


import './App.css';
import Navbar from './components/Navbar'
import ProductTable from './components/ProductTable';
import ProductInput from './components/ProductInput';

function App() {

  //id, name, quantity,isOrdered

  const [productList,setProductList]= useState([])



  // sortera produkter
  const sortList=(_list)=>{
    if (_list.length>0) {
      return _list.sort((a,b)=>a.isOrdered-b.isOrdered) 
    }
    else
      return []
  }

  const addProductCb = _product=>{
    let newList=[{id:uuidv4(),isOrdered:false, ..._product}, ...productList];
    setProductList(newList)
  }

  const editProductCb=_product =>{
    let newList=productList.map(p=>{
      if (p.id===_product.id) {
         p=_product;
         return p
        }
         return p
    })
    setProductList(sortList(newList));
  }

 //radera ptoduct från list
  const deleteProductCb=_product => {
    const newList=productList.filter(p=>p.id!==_product.id)
    setProductList(newList)
  }


// rensa listan
  const clearListCb =()=>{
    
    setProductList([]);
  }

//Läsa listan från l.storage

  useEffect(()=> {
    const storedProductList = JSON.parse(localStorage.getItem('productlist'));
    if(storedProductList) {
      setProductList(sortList(storedProductList))
    }
  },[])

// spara listan till l.storage
  useEffect(() => {
    localStorage.setItem('productlist', JSON.stringify(productList))    
  }, [productList])


  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
          <ProductInput addProductCb={addProductCb} />
          { !productList.length
              ? <h3 className="text-center">Din Lista är tom </h3>
              : <ProductTable productList={productList}  deleteProductCb={deleteProductCb} editProductCb={editProductCb} clearListCb ={clearListCb} />
          }
      </div>
    </div>
  );
}

export default App;
