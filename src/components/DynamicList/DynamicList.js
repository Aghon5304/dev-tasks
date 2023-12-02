import React from "react";
export default function DynamicList(props) {
    const stos = [];
    for (let index = 1; index < props.n ; index++) {
        stos.push(<li key={index}>List element {index}</li>)
    }
    return(
        <>
        <ul>
            {stos}
        </ul>
        </>
    );

}