
import { useUIContext } from "../context/ui";


function useCart(product){
    const {cart, setCart} =useUIContext();

    const addToCart =() => {
        cart.findIndex(c => c.id === product.id) >=0 
        ? setCart(cart.filter(c => c.id !==product.id))
        : setCart(c => [...c, product]);
    }

    const addToCartText = cart.findIndex ((c)=> c.id === product.id) >=0 
    ? "Remove from Cart" : "Add to Cart";

    let cart_items = JSON.parse(localStorage.getItem("cart_items"))? JSON.parse(localStorage.getItem("cart_items")): [];

    if(addToCartText === "Remove from Cart"){
      let count = 1;
      cart_items.forEach((item) => {
        if(item.id === product.id){
          count++;
          return;
        }
      });
      if(count === 1){
        cart_items.push(product);
      }
    }else{
        cart_items = cart_items.filter((item) => item.id !== product.id);
    }
    localStorage.setItem("cart_items", JSON.stringify(cart_items));

    return {addToCart, addToCartText}
}

export default useCart;
