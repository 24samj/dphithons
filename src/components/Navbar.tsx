import dphiLogo from "../assets/pngs/dphi-logo.png";

const Navbar = () => {
  return (
    <div className="border-26 flex h-16 w-full items-center px-12 md:px-24">
      <img
        src={dphiLogo}
        alt="dphi logo"
        className="h-auto w-20 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
