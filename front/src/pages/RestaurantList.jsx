import React, {useState} from "react";
import RestaurantComponent from "../components/RestaurantComponent";
import RegRestaurantComponent from "../components/RegRestaurantComponent";

function RestaurantList() {
    const [ restList, setRestList ] = useState([]);
    return(
        <div>
            <h1>맛집 리스트</h1>
            <RegRestaurantComponent restList={restList} setRestList={setRestList}/>
            { restList.map((item) => <RestaurantComponent rest={item}/>
            )}
        </div>
    );

}
export default RestaurantList;