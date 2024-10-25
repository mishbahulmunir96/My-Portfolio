import { FC } from "react";

interface MenuProps {
  href: string;
  children: string;
}

const Menu: FC<MenuProps> = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="rounded-lg px-6 py-3 font-normal text-gray-500 no-underline transition-all duration-300 ease-in-out hover:bg-red-600 hover:font-bold hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};

export default Menu;
