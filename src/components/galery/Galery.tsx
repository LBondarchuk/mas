import { GaleryItem } from "./GaleryItem"
function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const Galery = () => {
  return (
  <div className="galery">
    <h1 className="galery__title">Наша галерея</h1>
    <div className="galery__list">
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/card.jpeg" height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/card.jpeg" height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/card.jpeg" height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
      <GaleryItem img="images/2.jpeg"  height={randomInteger(300,450)}/>
    </div>
  </div>
  )
}