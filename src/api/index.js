
const fakeDatabase = {
  products: [
    {
      id: 1,
      text: "Azus Zenphone 3",
      price: 300,
      quantity:5
    },
    {
      id: 2,
      text: "Samsung",
      price: 400,
      quantity:2
    },
    {
      id: 3,
      text: "IPhone",
      price: 500,
      quantity:3
    },
    {
      id: 4,
      text: "Nokia",
      price: 250,
      quantity:5
    },
  ]
};

const delay=(ms)=>
      new Promise(resolve=>setTimeout(resolve,ms))

export const fetchProducts=() =>
  delay(500).then(() => {
      return fakeDatabase.products;
  })


  export const updateProduct =(id) =>
    delay(500).then(()=>{

      const productToUpdate=fakeDatabase.products.find(t=>t.id===id)
    //  console.log(productToUpdate);
      const pos=fakeDatabase.products.findIndex(t=>t.id===id)
      let isUpdated=false
      if(productToUpdate.quantity>0){
        isUpdated=true
        productToUpdate.quantity=productToUpdate.quantity-1
        fakeDatabase.products=[...fakeDatabase.products.slice(0,pos),
          productToUpdate,
          ...fakeDatabase.products.slice(pos+1)
        ]
      }
      console.log("mes produits",fakeDatabase.products);
      return {products: fakeDatabase.products,isUpdated}
    })
