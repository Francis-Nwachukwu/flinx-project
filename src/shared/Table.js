import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import React, { useMemo } from "react";
import NoData from "./Nodata";

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
        </div>
      )}
    </div>
  );
};

export default Table;
