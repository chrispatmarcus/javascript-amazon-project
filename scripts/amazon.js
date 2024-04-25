import { cart, addTOCart} from "../data/cart.js";
import { products } from "../data/products.js";

let productsHtml = "";
products.forEach((product) => {
  productsHtml += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-40.png">
        ${product.rating.stars * 10}
      <div class="product-rating-count link-primary">
      $${(product.priceCents / 100).toFixed(2)} 
      </div>
    </div>

    <div class="product-price">
      $20.95
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary
    js-add-to-cart"
    data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`;
});

function incrementCart(value) {
  // function to increment the number of items added to the chart
  document.querySelector(".cart-quantity").innerHTML = value; // adds the number of item in the selected div section
}

// console.log(productsHtml);
document.querySelector(".js-products-grid").innerHTML = productsHtml;
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;// produce all data in the button element speciffically the product ID
    addTOCart(productId)//calls the functions which is found in the cart.js file
    incrementCart(cart.length)//increments the number of cartitems according to the array(that is cart) lenght

    //this comments below is a different way of adding an item to a chart
    // cart.map(item=>{
    //   if(item.productName ===productName )
    //   {
    //    return {...item,quantity :item.quantity +1}
    //   }
    //   console.log('...')
    // cart.push({
    //   productName,
    //   quantity:1
    // })
    // })

    //Find the item if present in the cart
   // const itemFound = cart.find((item) => item.productName === productName);

    /*if (itemFound) {
      itemFound.quantity = itemFound.quantity + 1;
      const itemIndex = cart.findIndex(
        (item) => item.productName === productName
      );
      cart[itemIndex] = itemFound;
      incrementCart(cart.length);
      return;
    }
    cart.push({
      productName,
      quantity: 1,
    });
    incrementCart(cart.length);

    console.log(cart);*/
  });
});
