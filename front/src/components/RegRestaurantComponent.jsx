import React, { useState } from "react";


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
        rest.id = num; 
        rest.name = restName;
        rest.writer = writer;
        rest.location = location;
        rest.style = style;
        rest.regDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        setRestList([...restList, rest]);

        setNum(num+1);
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
                        <td><input type="text" value={style} onChange={(event) => {
                            setStyle(event.target.value);
                        }}></input></td>
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