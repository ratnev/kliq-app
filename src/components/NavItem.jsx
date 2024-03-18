/* eslint-disable react/prop-types */
export default function NavItem({ Icon, title, path }) {
  return (
    <a href={path} className="nav-item">
      <Icon />
      <span>{title}</span>
    </a>
  );
}
