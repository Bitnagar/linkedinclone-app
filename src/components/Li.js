import React from "react";
import Data from "../data"

export default function li(props) {

    const li = Data.data.buttonData.map((item, key) => {
        while(key < props.n) {
            return <li className="li-set-1" key={key}>{item.innerText}</li>
        }
    })

    return (
        li
    )
}