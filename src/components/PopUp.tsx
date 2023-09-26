import React from "react";
import { useContext } from "react"
import { MyContext } from "../App"

type Props = {
  children: JSX.Element;
}

export const PopUp:React.FC<Props> = ({children}) => {
  const {setShowPopUp, showPopUp} = useContext(MyContext)
  return (
    <div 
      className="pop-up"
      style={{
        display: showPopUp ? 'block' : 'none' 
      }}
      >
      <div className="pop-up__opacity"></div>
      <div className="pop-up__contant">
        <img 
          src="images/close.png" 
          alt="close form" 
          width={30} 
          height={30}
          className="pop-up__close"
          onClick={() => setShowPopUp(false)}
        />
        {children}
      </div>
    </div>
  )
}