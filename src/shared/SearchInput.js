import { CiSearch } from "react-icons/ci";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        placeholder="Search by amount, payment method..."
        className="!h-[40px] !pl-10 !rounded-lg max-sm:!w-[200px] max-lg:!w-[220px] !w-[400px] py-2 bg-[#FBFBFB] outline-none"
      />
      <CiSearch className="absolute top-3 left-3 w-5 h-5" />
    </div>
  );
};

export default SearchInput;
