import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Search from "./components/Search";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      {" "}
      <Logo />
      {children}
    </nav>
  );
}
