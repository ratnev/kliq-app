import logo from "../assets/Logo.png";
import IconSidebar from "../assets/icons/icon-sidebar";
import Search from "./Search";
import NavItem from "./NavItem";
import { menuItems } from "../constants/MenuItems";
import SettingsIcon from "../assets/icons/SettingsIcon";
import UserIcon from "../assets/icons/UserIcon";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo kliq" className="logo-img" />
        <IconSidebar />
      </div>
      <Search />
      <div className="nav-container">
        {menuItems.map((item) => (
          <NavItem
            title={item.title}
            Icon={item.icon}
            path={item.path}
            key={item.title}
          />
        ))}
      </div>
      <hr className="divider" />
      <div className="box"></div>
      <div className="bottom-menu">
        <a href="/Settings" className="nav-item">
          <SettingsIcon />
          Settings
        </a>
        <a href="/Settings" className="nav-item">
          <UserIcon />
          User Name
        </a>
      </div>
    </div>
  );
}
