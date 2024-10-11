import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{    

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        //dispatch an action
        dispatch(addItem(item));
    }
   return(
    <div>
        {items.map((item)=> (
            <div key={item.card.info.id} className="itemList">
                
                <div>
                    <div style={{paddingBottom:"2px"}}>
                        <span>{item.card.info.name}</span>
                        <span>-₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>

                    </div>
                    <p style={{fontSize:"12px"}}>{item.card.info.description}</p>
                </div>
                <div>
                    <button className="addButton" onClick={()=>handleAddItem(item)}>
                        Add +
                    </button>
                    <img src={CDN_URL+ item.card.info.imageId} style={{width:"68px"}}/>
                </div>
            </div>
        ))}
    </div>
   )
}
export default ItemList;