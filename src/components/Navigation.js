import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "New Comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav className="bg-slate-200 p-5 rounded-lg font-bold">
      <ul className="flex items-center gap-x-5">
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
