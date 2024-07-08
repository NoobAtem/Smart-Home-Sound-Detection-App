import React from 'react';

function DataTable(props: any) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {props.header.map((name: string, index: number) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.value.map((items: { [key: string]: any }, indexCol: number) => (
            <tr key={indexCol}>
              {props.header.map((name: string, indexRow: number) => (
                <td key={indexRow} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {items[name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
