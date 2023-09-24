type Props = {
  img : string;
  title: string;
  description: string;
}

export const Servise: React.FC<Props> = ({title, description, img}) => {
  return (
    <article className="our-servises__item">
      <div className="our-servises__img">
        <img src={img} alt="servises" />
      </div>
      <div className="our-servises__description">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </article>

  )
}