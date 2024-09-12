import { useCapitalize } from "../lib/hooks";
import Button from "./Button";
import NavLink from "./NavLink";

const Header = ({ userRole, setRole }) => {
  const role = useCapitalize(userRole);

  return (
    <header className="flex justify-between px-12 py-4 bg-indigo-100">
      <a href="">Logo</a>
      <div className="flex gap-4">
        <NavLink handleClick={() => setRole("user")}>User</NavLink>
        <NavLink handleClick={() => setRole("admin")}>Admin</NavLink>
        <NavLink handleClick={() => setRole("guest")}>Guest</NavLink>
        <div className="ms-4 font-bold flex gap-2 items-center">
          <p>{role}</p>
          {userRole === "admin" && <Button>Add user</Button>}
          {userRole !== "guest" && <Button>Profile</Button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
