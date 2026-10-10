function Header({ cartCount }) {
  return (
    <header>

      <h2>Shopping Site</h2>

      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>

        <a href="#">
          🛒 Cart ({cartCount})
        </a>
      </nav>

    </header>
  );
}

export default Header;