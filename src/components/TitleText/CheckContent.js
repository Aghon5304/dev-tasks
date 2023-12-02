import React,{useState} from 'react'
export const CheckContent = () =>(
    MyButton()
);   
function MyButton() {
    const [turnedOn, setTurnedOn] = useState(false);
  
    const handleClick = () => {
      setTurnedOn(!turnedOn);
    };
    return(
        <>
        <p style={turnedOn? {border:"2px solid red"}:{border:"2px solid green"}}>{turnedOn ?("turned on"):("turned off")}</p>
        <button onClick={handleClick}>{turnedOn ?("turn off"):("turn on")}</button>
        </>
    )
}