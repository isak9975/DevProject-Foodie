import React, {useState} from "react";
import RestaurantComponent from "../components/RestaurantComponent";
import RegRestaurantComponent from "../components/RegRestaurantComponent";

// 맛집 리스트 페이지
function RestaurantList() {
    // 임시로 배열에 저장
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