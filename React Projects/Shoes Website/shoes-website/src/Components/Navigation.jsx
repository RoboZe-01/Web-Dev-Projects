const Navigation = () => {
    return (
        <nav aria-label="Main navigation">
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul role="menubar">
          <li role="menuitem"><a href="#">Menu</a></li>
          <li role="menuitem"><a href="#">Location</a></li>
          <li role="menuitem"><a href="#">About</a></li>
          <li role="menuitem"><a href="#">Contact</a></li>
        </ul>
        <button>Login</button>
          </nav>
    );
};
export default Navigation;