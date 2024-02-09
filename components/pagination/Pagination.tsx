import { useAppDispatch, useAppSelector } from "@/features/jobActions";

import { onChangePage, onShowPageOnPagination } from "@/features/jobReducer";
import Styles from "./Pagination.module.css";
import { DOTS, usePagination } from "@/utilites/usePagination";

export const Pagination = () => {
  const isMobile = window.matchMedia("(max-width:576px)").matches;
  const dispatch = useAppDispatch();

  const siblingCount = 1;

  const paginationRange = usePagination({
    siblingCount,
    isMobile,
  });

  const currentPageNumber = useAppSelector((state) => state.currentPage);

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  const onPageChange = (pageNumber: number) => {
    dispatch(onChangePage(pageNumber));
    dispatch(onShowPageOnPagination(pageNumber));
  };
  const onNextPage = () => {
    dispatch(onChangePage(currentPageNumber + 1));
  };

  const onPreviousPage = () => {
    dispatch(onChangePage(currentPageNumber - 1));
  };

  return (
    <div className={Styles.paginationContainer}>
      <div className={Styles.pagination}>
        <button
          className={
            currentPageNumber === 1
              ? `${Styles.disabledButton} ${Styles.pageButton} `
              : `${Styles.pageButton}`
          }
          disabled={currentPageNumber === 1}
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
                    pageNumber === currentPageNumber
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
            currentPageNumber === lastPage
              ? `${Styles.disabledButton} ${Styles.pageButton}`
              : `${Styles.pageButton}`
          }
          disabled={currentPageNumber === lastPage}
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
