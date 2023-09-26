import { useContext } from "react"
import { MyContext } from "../App"

export const CallUs = () => {
  const {setShowPopUp} = useContext(MyContext)
  return (
  <div className="call-us">
    <img 
      src="images/call.png" 
      alt="icon call-us" 
      width={70} 
      height={70}
      className="call-us__icon"
      onClick={() => setShowPopUp(true)}
    />
  </div>
  )
}