import { Link } from "react-router-dom";

function Footer(props) {

  return (

    <footer className="footer">

      <div className="container">

        <p>
          © 2026 {props.company} | All Rights Reserved
        </p>

        <div className="footer-links">

          <Link to="/terms">
            Terms
          </Link>

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/blog">
            Blog
          </Link>

        </div>

      </div>

    </footer>

  );
}

export default Footer;