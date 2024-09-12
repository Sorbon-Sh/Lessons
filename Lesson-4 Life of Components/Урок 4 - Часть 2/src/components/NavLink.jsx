const NavLink = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default NavLink;
