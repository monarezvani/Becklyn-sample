import { useAppDispatch } from "@/features/jobActions";

import { onPagination } from "@/features/jobReducer";
import Styles from "./Pagination.module.css";
import { useState } from "react";
import { DOTS, usePagination } from "@/utilites/usePagination";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = window.matchMedia("(max-width:576px)").matches;
  const dispatch = useAppDispatch();

  const siblingCount = 1;

  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    isMobile,
  });

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    dispatch(onPagination(pageNumber));
  };
  const onNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const onPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className={Styles.paginationContainer}>
      <div className={Styles.pagination}>
        <button
          className={
            currentPage === 1
              ? `${Styles.disabledButton} ${Styles.pageButton} `
              : `${Styles.pageButton}`
          }
          disabled={currentPage === 1}
          onClick={onPreviousPage}
        >
          <span className={Styles.backPageImage}></span>

          <span className={Styles.PageText}>Vorherige</span>
        </button>
        <div>
          <>
            {paginationRange?.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <button
                    key={pageNumber}
                    className={`${Styles.DotButton} ${Styles.paginationButton}`}
                  >
                    &#8230;
                  </button>
                );
              }

              return (
                <button
                  key={pageNumber}
                  className={
                    pageNumber === currentPage
                      ? `${Styles.selectedPaginationButton} ${Styles.paginationButton}`
                      : `${Styles.paginationButton}`
                  }
                  onClick={() => onPageChange(Number(pageNumber))}
                >
                  {pageNumber}
                </button>
              );
            })}
          </>
        </div>
        <button
          className={
            currentPage === lastPage
              ? `${Styles.disabledButton} ${Styles.pageButton}`
              : `${Styles.pageButton}`
          }
          disabled={currentPage === lastPage}
          onClick={onNextPage}
        >
          <span className={Styles.PageText}>Nächste</span>
          <span className={Styles.nextPageArrow}></span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
