import logo from '../assets/img/logo_opus.svg'
const Header = () => {
    return (
        <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
    
          <h1 class="logo me-auto">
            <a href="/">
                <img src={logo} />
            </a>
            </h1>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Highlights</a></li>
              <li><a class="nav-link scrollto" href="#about">Download</a></li>
              <li><a class="nav-link scrollto" href="#services">Partners</a></li>
              <li><a class="nav-link   scrollto" href="#portfolio">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    )
}

export default Header