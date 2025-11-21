import React from "react";
import { useState } from "react";


function RegRestaurantComponent(){
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>식당: </label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>작성자: </label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>위치: </label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>구분: </label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                         <td><button>등록</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RegRestaurantComponent;