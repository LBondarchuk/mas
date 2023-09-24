import { Button } from "./Button"

export const OpeningHours = () => {
  return (
    <section className="oppening-hours">
      <img src="images/2.jpeg" alt="" />
      <div className="oppening-hours__description">
         <h3 className="oppening-hours__description--title">Години роботи</h3>
         <p> Ви може записатись <br />
          онлайн або за телефоном</p>
        <ul className="oppening-hours__list">
            <li>Понеділок</li>
            <li>Вівторок</li>
            <li>Середа</li>
            <li>Четвер</li>
          </ul>
          <Button content="Заброонюй зараз" styles="button hovered"/>
      </div>
     
        
    </section>
  ) 
}