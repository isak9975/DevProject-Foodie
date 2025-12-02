import React from "react";


// 한 맛집의 정보를 담은 컴포넌트 
function RestaurantComponent(props){
    // const rest = props.rest;
    const { rest, deleteRest } = props;
    console.log("props")
    console.log(rest);

    function setStyleValue(rest){
        switch(rest.style){
            case "korean":
                return "한식";
            case "chinese":
                return "중식";
            case "japanese":
                return "일식";
            case "american":
                return "양식";
            case "etc":
                return "기타";
        }
    }

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
            <div>구분: {setStyleValue(rest)}</div>
            <div>등록일: {rest.regDate}</div>
            <div>작성자: {rest.writer}</div>
            <div><button onClick={() => deleteRest(rest.id)}>삭제</button></div>
        </div>
    )
}
export default RestaurantComponent;