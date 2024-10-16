import { CiMenuFries } from "react-icons/ci";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <div className="py-6 px-6 flex items-center justify-between">
      <div>
        <div className="mb-4 max-md:mb-2">
          <p className="text-[12px] text-neutralGray">
            Dashboard <span className="text-black">`&gt;` Payments</span>
          </p>
        </div>
        <div>
          <p className="text-neutralBlack text-[20px] max-lg:text-[17px] max-md:text-[14px]">
            Payments
          </p>
        </div>
      </div>
      <div>
        <div
          onClick={() => setIsSidebarOpen(true)}
          className="hidden max-md:block"
        >
          <CiMenuFries />
        </div>
      </div>
    </div>
  );
};

export default Header;
