const Header = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Food Panda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav text-white">
        <li className="nav-item">
          <a className="nav-link" href="#">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Help</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Sign In</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>  
      </ul>
    </div>
  </div>
</nav>
    
    
    
    );
}
export default Header;