type Props = {
  children: JSX.Element[];
}

export const Form: React.FC<Props> = ({children}) => {
  return (
    <form action="submit" className="form">
      {children}
      <button className="form__submit">Надіслати</button>
    </form>
  
  )
}