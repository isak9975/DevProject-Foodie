import React, { useRef, useState } from "react";

{/* 맛집 정보를 입력받는 컴포넌트 */}
function RegRestaurantComponent(props){
    const restList = props.restList;
    const setRestList = props.setRestList;

    const [ num, setNum ] = useState(1);
    const [ restName, setRestName ] = useState("");
    const [ writer, setWriter ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ style, setStyle ] = useState("");

    const addRestList = () => {
        let rest = {};
        const today = new Date();
        rest.id = num;              // 식당 id 
        rest.name = restName;       // 식당 이름
        rest.writer = writer;       // 글 작성자
        rest.location = location;   // 식당 위치
        rest.style = style;         // 식당 구분(한식, 중식, ...)
        rest.regDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;   // 등록일
        setRestList([...restList, rest]);

        // 식당 id 1 증가
        setNum(num+1);

        // 인풋 초기화
        setRestName("");
        setWriter("");
        setLocation("");
        setStyle("");

        restList.forEach((item) => {
            console.log(item);
        })
    }
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>식당: </label></td>
                        <td><input type="text" value={restName} onChange={(event) => {
                            setRestName(event.target.value);
                        }}></input></td>
                    </tr>
                    <tr>
                        <td><label>작성자: </label></td>
                        <td><input type="text" value={writer} onChange={(event) => {
                            setWriter(event.target.value);
                        }}></input></td>
                    </tr>
                    <tr>
                        <td><label>위치: </label></td>
                        <td><input type="text" value={location} onChange={(event) => {
                            setLocation(event.target.value);
                        }}></input></td>
                    </tr>
                    <tr>
                        <td><label>구분: </label></td>
                        {/* <td><input type="text" value={style} onChange={(event) => {
                            setStyle(event.target.value);
                        }}></input></td> */}
                        <td>
                            <select value={style} className="select" onChange={(event) => {
                                setStyle(event.target.value);
                            }}>
                                <option value={""}>----------선택----------</option>
                                <option value={"korean"}>한식</option>
                                <option value={"chinese"}>중식</option>
                                <option value={"japanese"}>일식</option>
                                <option value={"american"}>양식</option>
                                <option value={"etc"}>기타</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                         <td><button onClick={addRestList}>등록</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RegRestaurantComponent;