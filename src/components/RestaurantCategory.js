import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    const [showItems, setShowItems] = useState(false);
    const handleClicked = () =>{
        setShowItems(!showItems);
    }
    return(
        <div>
            {/* Header */}
            <div className="accordian-container">
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}} onClick={handleClicked}>
                    <span style={{fontWeight:"bold"}}>{data.title}({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                
                {showItems && <ItemList items={data.itemCards}/>}

            </div>
            {/* Body */}

        </div>
    )
}
export default RestaurantCategory;
