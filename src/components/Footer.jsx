import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
       <div className="container footer__container">
           <div className="footer__top">
                <ul className="footer__categories">
                    <li className="footer__item">
                       <Link to='/posts/categories/Pragramming' className="footer__link">
                          Programmation
                       </Link>
                    </li>
                    <li className="footer__item">
                       <Link to='/posts/categories/Brainstorm' className="footer__link">
                          Brainstorm
                       </Link>
                    </li>
                    <li className="footer__item">
                       <Link to='/posts/categories/Education' className="footer__link">
                         Education
                       </Link>
                    </li>
                </ul>
           </div>
           <div className="footer__bottom">
              <span className="footer__copy">
                 Copyright @2024
              </span>
           </div>
       </div>
    </div>
  )
}

export default Footer