import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div style={{textAlign:"center", margin:"10px", padding:"10px", fontFamily:"arial"}}>
            <h1>Cart</h1>
            <div style={{width:"50%", margin:"auto"}}>
                <button style={{padding:"2px", margin:"2px", backgroundColor:"black",color:"white",borderRadius:"2px"}}
                 onClick={handleClearCart}>Clear Cart</button>
                 {cartItems.length === 0 && <h1>Cart is empty. Please Add items to the cart.</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;
