import logo from "../../images/World-Javascript.gif";
import "./header.css";

function Header() {
  return (
    <div>
      <header className="container_header">
        <img src={logo} alt="logo javascript" />
        <h1>
          Compreendendo o mundo javascript como um todo!
        </h1>
      </header>
    </div>
  );
}
export default Header;
