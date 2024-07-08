import React from 'react';

function SetItems({ setItemsPerPage }: { setItemsPerPage: (num: number) => void }) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  return (
    <div className="flex justify-start items-center mt-4">
      <div className="relative">
        <select 
          id="itemsPerPage" 
          className="form-control border rounded px-2 py-1 appearance-none pr-8" 
          onChange={handleChange}
        >
          <option value="1">Show 1</option>
          <option value="2">Show 2</option>
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current text-gray-800" viewBox="0 0 20 20">
            <path d="M7 10l5 5 5-5H7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SetItems;
