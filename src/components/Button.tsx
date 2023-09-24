type Props = {
  content: string
  styles?: string
}

export const Button: React.FC<Props> = ({content, styles = "button"}) => {
  return  (
    <button className={styles}>{content}</button>
  )
}