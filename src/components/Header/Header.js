import './Header.scss';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">HoundDog AI</h1>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/upload" className="nav__link-item">
              {<FaPlus />}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link-item">
              {<FaEye />}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/delete/" className="nav__link-item">
              {<FaTrashAlt />}
            </Link>
          </li>
          </ul>
      </nav>
    </header>
  )
};
