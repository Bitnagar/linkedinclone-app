import React from "react";
import Data from "../data"

export default function li(props) {

    const li2 = Data.data.buttonData2.map((item, key) => {
        while(key < props.n) {
            return <li className="li-set-1" key={key}>{item.innerText}</li>
        }
    })

    return (
        li2
    )
}