import React, { useState } from 'react';
import DataTable from './datatable';
import { FilterBar, SearchBar } from '../search/search';
import Pagination from '../pagination/Pagination';
import SetItems from '../setitems/SetItems';

function ViewCardTable(props: any) {
  const [value, setValue] = useState(props.value);
  const [origValue] = useState(props.value);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = value.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(value.length / itemsPerPage);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-lg leading-6 font-medium text-gray-900">{props.title}</div>
          <div className="flex space-x-2">
            <SearchBar origValue={origValue} value={value} setVal={setValue} />
            <FilterBar origValue={origValue} value={value} setVal={setValue} />
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <DataTable header={props.header} value={paginatedData} />
        <div className="flex justify-between items-center mt-4">
          <SetItems setItemsPerPage={setItemsPerPage} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export { ViewCardTable };
