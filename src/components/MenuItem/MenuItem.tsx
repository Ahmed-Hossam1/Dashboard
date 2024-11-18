import { MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
interface IProps {
  name: string;
  favicon: React.ReactNode;
}
const MenuItemComponent = ({ name, favicon }: IProps) => {
  return (
    <MenuItem>
      <NavLink
        to={`/${name}`}
        className="flex items-center space-x-3 capitalize text-sm"
      >
        <span>{favicon}</span>
        <span>{name}</span>
      </NavLink>
    </MenuItem>
  );
};

export default MenuItemComponent;
