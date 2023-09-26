type Props = {
  img: string;
  height: number;
}

export const GaleryItem: React.FC<Props> = ({img, height}) => {
  return (
    <div 
      className="galery-item" 
      style={{
        backgroundImage: `url(${img})`,
        height: height
      }}
    >
        <div className="galery-item__content">
          <h3 className="galery-item__title">Масаж</h3>
          <p className="galery-item__description">Маса́ж — сукупність прийомів механічної 
          укупність прийомів механічної</p>
      </div>
    </div>
  )
}