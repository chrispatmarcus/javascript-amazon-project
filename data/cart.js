 export const  cart =[];
 export function addTOCart(productId){
    let matchingItem;
    cart.forEach((item) =>{
     if (productId === item.productId){ 
       matchingItem = item;
     }
    });
    if (matchingItem){
      matchingItem.quantity += 1;
      return
    }
     else {
       cart.push({ //stores the prodect ID and quantity as object properties to the cart array
         productId: productId,
         quantity:1
       });
      
    }
    console.log(cart);
  }