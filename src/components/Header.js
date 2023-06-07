import logo from '../assets/img/logo_opus.svg'
import { Link } from 'react-scroll'
const Header = () => {
    return (
        <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="/">
                <img src={logo} alt='Opus Lab'/>
            </a>
            </h1>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                  <Link
                    to='investment'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0} duration={500}
                    className='nav-link'
                  >
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link
                    to='download'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0} duration={500}
                    className='nav-link'
                  >
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    to='partner'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0} duration={500}
                    className='nav-link'
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to='footer'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0} duration={500}
                    className='nav-link'
                  >
                    Contact
                  </Link>
                </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    )
}

export default Header