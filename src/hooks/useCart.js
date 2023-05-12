import { useUIContext } from "../context/ui";
import { addCartItemToFirestore } from "../components/search/firebase/db";
import getCurrentUserId from "../components/search/firebase/db";

function useCart(product){
  const {cart, setCart} =useUIContext();
  
 

  const addToCart = () => {
    const existingItemIndex = cart.findIndex(c => c.id === product.id);
    if (existingItemIndex >= 0) {
      setCart(cart.filter(c => c.id !== product.id));
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCart(c => [...c, newCartItem]);
      addCartItemToFirestore(getCurrentUserId(), newCartItem); // replace user123 with actual user ID
    }
  };
  
  const addToCartText = cart.findIndex(c => c.id === product.id) >= 0 
    ? "Remove from Cart"
    : "Add to Cart";
  
  return { addToCart, addToCartText };
}

export default useCart;






