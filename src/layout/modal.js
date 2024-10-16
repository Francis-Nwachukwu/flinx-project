import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";

const FlinxModal = ({
  open,
  onClose,
  children,
  className,
  title = "Flinx Realty",
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className={`bg-white overflow-y-auto max-h-[550px] outline-0 w-[90%] ${className} mt-[20%] lg:mt-[5%] mx-auto md:w-[70%] lg:w-[60%] px-8 py-6 max-md:px-8 max-md:py-4 border-0 rounded-lg shadow-lg flex flex-col outline-none focus:outline-0`}
      >
        <div className="flex justify-between items-center pb-8">
          <div className="flex items-center gap-1">
            <p className="font-medium text-[18px] max-md:text-[14px]">
              {title}
            </p>
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <IoMdClose />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Modal>
  );
};

export default FlinxModal;
