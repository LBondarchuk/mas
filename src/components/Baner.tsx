import { Button } from "./Button"

export const Baner = () => {
  return (
    <section className="baner">
      <h1>МАССАЖ</h1>
      <h2>оздоровча процедура, що передбачає мануальний (ручний) або апаратний вплив</h2>
      <div className="baner__button">
        <Button content="Записатись"/>
      </div>
    </section>
  )
}