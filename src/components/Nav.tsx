import { Link } from 'react-router-dom';

type Props = {
  showNav: boolean;
}

const NavBar:React.FC<Props> = ({showNav}) => {
  return (
    <nav className="nav">
      <ul 
        className='nav__list'
        style={{
          left: `${showNav ? 0 : '-150%' }`
        }}
      >
        <li >
          <Link to="/" className='nav__item'>Головна</Link>
        </li>
        <li>
          <Link to="about" className='nav__item'>Про Нас</Link>
        </li>
        <li>
          <Link to="servises" className='nav__item'>Послуги</Link>
        </li>
        <li>
          <Link to="tel:+380689262855" className='nav__item phone'>
            <img src="images/pohone.png" alt="icon-phone" width={40} />
            +380689262855
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
