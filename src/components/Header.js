import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" navigation-bar navbar navbar-expand-sm bg-black navbar-dark text-white">
      <div className="container-fluid">
        <h4 className="navbar-brand">Food Paradise</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/support">Help</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  );
}
export default Header;