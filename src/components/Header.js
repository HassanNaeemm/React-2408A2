import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
         <header id="header" className="header fixed-top">

    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a
              >contact@example.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a  className="facebook"><i className="bi bi-facebook"></i></a>
          <a className="instagram"><i className="bi bi-instagram"></i></a>
          <a className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="branding d-flex align-items-cente">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a  className="logo d-flex align-items-center">
         
           <img src="assets/img/logo.webp" alt=""/>
          <h1 className="sitename">Clinic</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/depart">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/api">API Record</Link></li>
            <li className="dropdown"><a ><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            
            </ul>
            </li>
           
           
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>
        </>
    )
}
export default Header;