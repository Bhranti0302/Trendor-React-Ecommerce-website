import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Helper for responsive page numbers
  const getPageNumbers = () => {
    if (window.innerWidth < 640) return []; // small screens: only Prev/Next
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-8 gap-2 flex-wrap py-12">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page numbers for larger screens */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`px-3 py-1 border rounded ${
            currentPage === num ? "bg-gray-800 text-white" : ""
          }`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
