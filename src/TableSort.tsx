import React from "react";

export interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  columns: { key: string; label: string }[];
}

const TableSort: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border border-gray-300 p-2 text-left"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={"bg-gray-100"}>
              {columns.map((col) => (
                <td key={col.key} className="border border-gray-300 p-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSort;
