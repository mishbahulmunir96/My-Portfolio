import Button from "./Elements/Button";
import Logo from "./Elements/Logo";
import MenuBar from "./Elements/MenuBar";
const Navbar = () => {
  return (
    <header className="fixed z-50 flex min-h-16 w-full items-center bg-white">
      <nav className="container m-auto flex h-full items-center justify-between">
        <Logo />

        <MenuBar />

        <Button />
      </nav>
    </header>
  );
};

export default Navbar;
