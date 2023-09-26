import { useContext } from "react"
import { MyContext } from "../App"


type Props = {
  content: string
  styles?: string
}

export const Button: React.FC<Props> = ({content, styles = "button"}) => {
  const {setShowPopUp} = useContext(MyContext)
  return  (
    <button 
      className={styles}
      onClick={() => setShowPopUp(true)}
    >
      {content}
    </button>
  )
}