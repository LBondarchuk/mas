import { BestPricesItem } from "./BestPricesItem"

export const BestPrices = () => {
  return (
    <div className="best-prices">
      <h1 className="best-prices__title">Найкращі пропозиції</h1>
      <div className="best-prices__list">
        <BestPricesItem />
        <BestPricesItem />
        <BestPricesItem />
        <BestPricesItem />
        <BestPricesItem />
        <BestPricesItem />
      </div>
    </div>
    
  )
}