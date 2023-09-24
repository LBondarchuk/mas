import { Button } from "../Button"

export const BestPricesItem = () => {
  return (
    <div className="best-price">
      <h3 className="best-price__name">Name <span>500 UAH</span></h3>
      <p className="best-price__description">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="best-price__button">
        <Button content="Замовити"/>
      </div>
     
    </div>
  )
}