import './Header.scss';

function Header() {
  return (
    <header className="mb-4">
      <h1 className="d-flex align-items-baseline gap-1">
        todo
        <span className="dot"></span>
      </h1>
    </header>
  );
}

export default Header;
