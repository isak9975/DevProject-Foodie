import React from "react";
import RestaurantComponent from "../components/RestaurantComponent";
import RegRestaurantComponent from "../components/RegRestaurantComponent";
function RestaurantList() {
    return(
        <div>
            <h1>맛집 리스트</h1>
            <RegRestaurantComponent/>
            <RestaurantComponent/>
        </div>
    );

}
export default RestaurantList;