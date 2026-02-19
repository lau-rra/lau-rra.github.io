import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="footer">
      <p>Updated 18-02-2026 |
        <Link className="link" target="_blank" to="https://www.linkedin.com/in/lauralumijarvi/">
          {/*If I want to add the icon later: <img
            src="/images/linkedin.svg"
            alt="Linkedin logo"
            className="linkedin"
          />*/}
          Linkedin
        </Link>
        | Have a nice day&lt;3
      </p>
    </div>
    </>
  )
}

export default Footer;