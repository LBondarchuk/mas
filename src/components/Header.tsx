import { Button } from "./Button"
import NavBar from "./Nav"
import { useScroll } from "../utils/hooks/useScrol"
import { useState } from "react"
export const Header = () => {
  const scroll = useScroll()
  const [showNav, setShowNav] = useState(false)
  
  return (
    <header 
      className={`header ${scroll && 'shadow'}`}
      style={{padding: scroll ?  '10px 20px' : '', backgroundColor: scroll ? '#b8b2b4' : '' }}
      >
        <img 
        src={`images/${!showNav ? "menu.png" : "close.png"}`}
        width="50" 
        height="50" 
        alt="menu-icon" 
        className="menu-icon"
        onClick={() => setShowNav(!showNav)}
        />
      <NavBar showNav={showNav} setShowNav={setShowNav}/>
      <div className="header__button" style={{position: `${showNav ? 'absolute' : "static"}`}}>
        <Button content="Замовити дзвінок" />
      </div>
      
      
    </header>
  )
}