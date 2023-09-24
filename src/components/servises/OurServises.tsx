import { Servise } from "./Service"

export const OurServises = () => {
  return (
    <section className="our-servises">
      
      <h1 className="our-servises__title">Наші послуги чи якийсь текст</h1>
      <Servise 
      title="Title"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis pariatur in nemo consequuntur quaerat cumque fugit unde amet error mollitia, esse beatae earum omnis. Similique ad veniam tempore suscipit odit"
      img="images/servises/1.jpeg"
      />
      <Servise 
      title="Title"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis pariatur in nemo consequuntur quaerat cumque fugit unde amet error mollitia, esse beatae earum omnis. Similique ad veniam tempore suscipit odit"
      img="images/servises/1.jpeg"
      />
      <Servise 
      title="Title"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis pariatur in nemo consequuntur quaerat cumque fugit unde amet error mollitia, esse beatae earum omnis. Similique ad veniam tempore suscipit odit"
      img="images/servises/1.jpeg"
      />
    </section>
  )
}