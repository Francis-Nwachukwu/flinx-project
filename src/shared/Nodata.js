import { FlinxNoData } from "assets/images";

const NoData = ({ type, header }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mb-0 w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]">
        <img
          src={FlinxNoData}
          alt="header"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[24px] max-md:text-[16px] font-semibold">{header}</p>
      <p className="text-[18px] max-md:text-[12px] text-[#3B5877]">{type}</p>
    </div>
  );
};

export default NoData;
