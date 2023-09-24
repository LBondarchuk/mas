import { Card } from "./Card"

export const TypesOfMAssage = () => {
  return (
    <div className="types-massage">
      <h1 className="types-massage__title"> Види масажів</h1>
      <section className="types-massage__list">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}