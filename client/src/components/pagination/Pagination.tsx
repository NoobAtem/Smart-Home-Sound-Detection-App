import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  const pages = [];
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);


  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-end items-center mt-4">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
        className="px-4 py-2 bg-gray-200 rounded-l disabled:bg-gray-300"
      >
        &lt;
      </button>
      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={`px-4 py-2 ${page === currentPage ? 'bg-gray-400' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
        className="px-4 py-2 bg-gray-200 rounded-r disabled:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
