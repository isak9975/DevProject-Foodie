import React from "react";


// 한 맛집의 정보를 담은 컴포넌트 
function RestaurantComponent(props){
    const rest = props.rest;
    console.log("props")
    console.log(rest);
    return (
        <div className="RestaurantComponent">
            {/* <div>번호: 1</div>
            <div>맛집: 강남재벌</div>
            <div>위치: 원주 </div>
            <div>구분: 한식</div>
            <div>등록일: 20251121</div>
            <div>작성자: 신태균</div> */}
            <div>번호: {rest.id}</div>
            <div>위치: {rest.location}</div>
            <div>구분: {rest.style}</div>
            <div>등록일: {rest.regDate}</div>
            <div>작성자: {rest.writer}</div>
        </div>
    )
}
export default RestaurantComponent;