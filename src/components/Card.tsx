import { Button } from "./Button"

export const Card = () => {
  return (
    <div className="card">
      <img src="images/card.jpeg" alt="img" className="card__img"/>
      <div className="card__container">
        <h1 className="card__title">Title</h1>
        <div className="card__description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet saepe </p>
        </div>
        <Button content="Дізнатися більше" styles="button hovered" />
        
      </div>
    </div>
  )
}