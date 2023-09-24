import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src="images/logo.png" alt="logo" width={100} height={100}/>
      </Link>
      
      <nav className="footer__nav">
      <ul 
        className='footer__nav--list'
      >
        <li >
          <Link to="/" className='footer__nav--item'>Головна</Link>
        </li>
        <li>
          <Link to="about" className='footer__nav--item'>Про Нас</Link>
        </li>
        <li>
          <Link to="servises" className='footer__nav--item'>Послуги</Link>
        </li>
        <li>
          <Link to="tel:+380689262855" className='footer__nav--item phone'>
            <img src="images/pohone.png" alt="icon-phone" width={40} />
            +380689262855
          </Link>
        </li>
      </ul>
    </nav>

      <div className="footer__social-media">
        <Link to="/">
          <img src="images/telegram.png" alt="telegram" className="footer__social-media--item" width={50}/>
        </Link>
        
      
         
        <Link to="/">
          <img src="images/insagram.png" alt="insagram" className="footer__social-media--item" width={50}/>
        </Link>
         
        <Link to="/">
          <img src="images/facebook.webp" alt="facebook" className="footer__social-media--item" width={50}/>
        </Link>
         
      </div>
    </footer>
  )
}