import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="footer">
      <p>Updated 29-03-2025 |
        <Link className="link" target="_blank" to="https://www.linkedin.com/in/lauralumijarvi/">
          {/*If I want to add the icon later: <img
            src="/images/linkedin.svg"
            alt="Linkedin logo"
            className="linkedin"
          />*/}
          LinkedIn
        </Link>
        | Have a nice day&lt;3
      </p>
    </div>
    </>
  )
}

export default Footer;