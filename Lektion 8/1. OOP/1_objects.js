const product1={
    productName:'Product 1',
    description:'This is product',
    price: 100,
    summary:function(){
        return `The product ${this.productName} cost ${this.price} kr`; 
    }
}
const product2 ={
    productName: 'Product 2',
    description: ' This is a product',
    price: 200,
  
    summary: function() {
      return `The product ${this.productName} costs ${this.price} kr.`
    }
  }
  product1.productName='Produkt 11';
console.log(product1.summary());
console.log(product2.summary());
