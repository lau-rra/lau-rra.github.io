import logo from '/images/logo.png';

function Header() {
  return (
    <>
        <div className="header">
              <a href="/" className="logo-link">
                  <img src={logo} className="logo" alt="Logo" />
              </a>
          </div>
    </>
  )
}

export default Header;