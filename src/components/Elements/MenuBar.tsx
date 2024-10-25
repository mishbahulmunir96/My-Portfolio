import Menu from "./Menu";

const MenuBar = () => {
  return (
    <div className="my-5">
      <ul className="flex list-none">
        <Menu href={"/"}>Home</Menu>
        <Menu href={"/about-me"}>About</Menu>
        <Menu href={"/portfolio"}>Portfolio</Menu>
        <Menu href={"/servise"}>Service</Menu>
        <Menu href={"/blog"}>Blog</Menu>
      </ul>
    </div>
  );
};

export default MenuBar;
