import { FRExport, FRPlus } from "assets/svgs";
import Button from "shared/Button";

const PaymentHeader = () => {
  return (
    <div className="px-6 max-md:px-4 pt-6 max-md:pt-4 flex gap-4 flex-wrap items-center justify-between">
      <p className="text-[18px] max-md:text-[14px] font-medium">
        Transaction History
      </p>
      <div className="flex gap-2 items-center">
        <Button>
          <div className="flex items-center gap-2">
            <FRPlus />
            <p>Add Payment</p>
          </div>
        </Button>
        <Button>
          <div className="flex items-center gap-2">
            <FRExport />
            <p>Export</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PaymentHeader;
