import { FRExport } from "assets/svgs";
import React from "react";
import { toast } from "react-toastify";
import Button from "shared/Button";

const TransactionDetailsModal = ({ details, onClose }) => {
  return (
    <div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
        <div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Date Created
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.dateCreated}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Amount Paid
            </p>
            <p className="text-[18px] max-md:text-[14px]">N{details?.amount}</p>
          </div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Recipient Bank
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.recipientBank}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Transaction Id
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.transactionId}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Description
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.description}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Recipient Account Number
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.accountNumber}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Customer
            </p>
            <p className="text-[18px] max-md:text-[14px]">
              {details?.customer}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-faintGray text-[14px] max-md:text-[12px]">
              Payment Status
            </p>
            <p
              className={`${
                details?.status === "error" || details?.status === "failed"
                  ? "text-textRed bg-lightRedBg"
                  : "text-green bg-lightGreenBg"
              } w-fit px-2 py-1 font-medium rounded-3xl capitalize text-[18px] max-md:text-[14px]`}
            >
              {details?.status}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            toast.success("Your file has been successfully downloaded");
            onClose();
          }}
          className={"!bg-[#F1F6FE] !border-none"}
        >
          <div className="flex items-center gap-2">
            <FRExport color={"#075AAA"} />
            <p className="text-blue">Export as CSV</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TransactionDetailsModal;
