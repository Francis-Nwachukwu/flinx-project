import { createColumnHelper } from "@tanstack/react-table";
import { FRExport, FREyeOpen } from "assets/svgs";
import FlinxModal from "layout/modal";
import React, { useState } from "react";
import { toast } from "react-toastify";
import InputSelect from "shared/InputSelect";
import SearchInput from "shared/SearchInput";
import Table from "shared/Table";
import TransactionDetailsModal from "./transDetailsModal";
import { samplePaymentData } from "utils/data";

const PaymentTable = ({ tableData, setTableData }) => {
  const [status, setStatus] = useState("all");
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const StatusOptions = [
    { id: 1, text: "All payments", value: "all" },
    { id: 2, text: "Success", value: "success" },
    { id: 1, text: "Failed", value: "failed" },
  ];

  const { accessor } = createColumnHelper();

  const columns = [
    accessor(" ", {
      header: (
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRows([...tableData]);
            } else {
              setSelectedRows([]);
            }
          }}
        />
      ),
      cell: (info) => (
        <input
          type="checkbox"
          checked={
            selectedRows?.find(
              (selectedRow) => selectedRow.id === info.row.original?.id
            ) || info.row.original?.id === selectedRow?.id
          }
          onChange={() => {
            if (setSelectedRows) {
              if (
                selectedRows.find(
                  (selectedRow) => selectedRow.id === info.row.original?.id
                )
              ) {
                setSelectedRows(
                  selectedRows.filter(
                    (selectedRow) => selectedRow.id !== info.row.original?.id
                  )
                );
              } else {
                setSelectedRows([...selectedRows, info.row.original]);
              }
            }
          }}
        />
      ),
    }),
    accessor("dateCreated", {
      header: "Date Created",
      cell: (info) => info.getValue(),
    }),
    accessor("transactionId", {
      header: "Transaction ID",
      cell: (info) => info.getValue(),
    }),
    accessor("customer", {
      header: "Customer",
      cell: (info) => info.getValue(),
    }),
    accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
    }),
    accessor("status", {
      header: "Status",
      cell: (info) => (
        <p
          className={`${
            info.row.original?.status === "error" ||
            info.row.original?.status === "failed"
              ? "text-textRed bg-lightRedBg"
              : "text-green bg-lightGreenBg"
          } w-fit px-2 py-1 font-medium rounded-3xl capitalize`}
        >
          {info.getValue()}
        </p>
      ),
    }),
    accessor("", {
      header: "Actions",
      cell: (info) => (
        <div className="flex gap-4 items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectedRow(info.row.original);
              setIsOpen(true);
            }}
          >
            <FREyeOpen />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              toast.success("Your file has been successfully downloaded")
            }
          >
            <FRExport />
          </div>
        </div>
      ),
    }),
  ];

  return (
    <div className="flex flex-col gap-6">
      <FlinxModal
        title="Transaction Details"
        open={isOpen}
        onClose={() => {
          setSelectedRow(null);
          setIsOpen(false);
        }}
        children={
          <TransactionDetailsModal
            details={selectedRow}
            onClose={() => {
              setSelectedRow(null);
              setIsOpen(false);
            }}
          />
        }
      />
      <div className="px-6 max-md:px-4 flex gap-6">
        {StatusOptions.map(({ id, text, value }) => (
          <div
            key={id}
            onClick={() => {
              if (value === "all") {
                setTableData(samplePaymentData);
              } else {
                setTableData(() =>
                  samplePaymentData.filter(({ status }) => status === value)
                );
              }
              setStatus(value);
            }}
            className={`${
              status === value
                ? "text-blue border-b-2 border-blue"
                : "text-[#5C5C5C] border-none"
            } cursor-pointer`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="px-6 max-md:px-4 flex gap-4 flex-wrap justify-between">
        <div className="flex gap-4 items-center">
          <div className="">
            <InputSelect
              options={[]}
              optionsHolder={"Date range"}
              name="status"
              required
              onChange={() => {}}
              value={""}
            />
          </div>
          <div className="">
            <InputSelect
              options={[
                { title: "All payment", value: "all" },
                { title: "Success", value: "success" },
                { title: "Failed", value: "failed" },
              ]}
              optionsHolder={"Status"}
              name="status"
              required
              onChange={(e) => {
                if (e.target.value === "all") {
                  setTableData(samplePaymentData);
                } else {
                  setTableData(() =>
                    samplePaymentData.filter(
                      ({ status }) => status === e.target.value
                    )
                  );
                }
                setStatus(e.target.value);
              }}
              value={status}
            />
          </div>
        </div>
        <div>
          <div>
            <SearchInput
              value={searchInput}
              onChange={(e) => {
                setTableData(
                  samplePaymentData.filter(({ amount }) =>
                    amount.includes(e.target.value)
                  )
                );
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="">
        <Table
          columns={columns}
          data={tableData}
          type="You don’t have any payment. Add a payment to get started"
        />
      </div>
    </div>
  );
};

export default PaymentTable;
