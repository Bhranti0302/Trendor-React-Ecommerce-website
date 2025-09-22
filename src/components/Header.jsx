import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";
import DarkModeToggle from "./DarkMode";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 gap-5 shadow-md dark">
      <Logo />
      <SearchBar />
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Account />
      </div>
    </header>
  );
}

export default Header;
