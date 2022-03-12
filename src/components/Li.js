import React from "react";
import Data from "../data"

export default function li() {

    // const style = {
    //     width: 'fit-content',
    //     padding: '1rem',
    //     height: '3.5rem',
    //     textAlign: 'center',
    //     borderRadius: '8rem',
    //     backgroundColor: '$bc-blue',
    //     fontSize: '1.2rem',
    //     cursor: 'pointer'
    // }

    const li = Data.data.buttonData.map(item => {
        return <li className="li-set-1">{item.innerText}</li>
    })

    return (
        li
    )
}