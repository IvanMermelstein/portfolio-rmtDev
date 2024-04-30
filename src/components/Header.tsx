const Header = ({ children }) => {
  return <header className="header">{children}</header>;
};

export const HeaderTop = ({ children }) => {
  return <div className="header__top">{children}</div>;
};

export default Header;
