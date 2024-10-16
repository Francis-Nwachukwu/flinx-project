import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import React, { useMemo } from "react";
import NoData from "./Nodata";
import Button from "./Button";
import { FRArrowLeft, FRArrowRight } from "assets/svgs";

const Table = ({ columns, data, type }) => {
  data = useMemo(() => data, [data]);
  columns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {data?.length === 0 ? (
        <NoData type={type} />
      ) : (
        <div className="h-full w-full overflow-x-auto rounded-lg">
          <table className="w-full">
            <thead className="text-left  bg-[#F9FAFB] border-b border-[#EAECF0]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="py-4 max-md:py-2 px-6 max-md:px-4 text-[14px] max-md:text-[12px] font-medium text-[#2E2E2E] whitespace-nowrap"
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {table.getRowModel().rows.map((row) => (
                <tr className="relative border-b-[0.5px]" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="px-6 max-md:px-4 text-[14px] max-md:text-[12px] font-light py-4 text-[#2E2E2E]"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center gap-4 p-4">
            <Button>
              <div className="flex items-center gap-2">
                <FRArrowLeft />
                <p className="text-sm text-[#2E2E2E] font-semibold">Previous</p>
              </div>
            </Button>
            <div className="flex gap-9">
              <p className="text-[#5C5C5C] text-sm text-center">1</p>
              <p className="text-[#5C5C5C] text-sm text-center">2</p>
              <p className="text-[#5C5C5C] text-sm text-center">3</p>
              <p className="text-[#5C5C5C] text-sm text-center">...</p>
              <p className="text-[#5C5C5C] text-sm text-center">8</p>
              <p className="text-[#5C5C5C] text-sm text-center">9</p>
              <p className="text-[#5C5C5C] text-sm text-center">10</p>
            </div>
            <Button>
              <div className="flex items-center gap-2">
                <FRArrowRight />
                <p className="text-sm text-[#2E2E2E] font-semibold">Next</p>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
