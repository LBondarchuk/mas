import { Button } from "./Button"

export const Card = () => {
  return (
    <div className="card">
      <img src="/images/card.jpeg" alt="img" className="card__img"/>
      <div className="card__container">
        <h1 className="card__title">Масаж</h1>
        <div className="card__description">
          <p>Маса́ж — сукупність прийомів механічної і рефлекторної дії на тканини і органи, у вигляді розтирання </p>
        </div>
        <Button content="Дізнатися більше" styles="button hovered" />
        
      </div>
    </div>
  )
}