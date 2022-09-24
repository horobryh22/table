import React from 'react';
import './Pagination.css';

export type PaginationType = {
    totalPages: number;
    currentPage: number;
    setPage: (value: number) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export const Pagination = (
    {
        totalPages,
        currentPage,
        setPage,
        prevPage,
        nextPage
    }: PaginationType) => {

    const pages = new Array(totalPages).fill(1).map((el, i) => i + 1);

    const mappedPages = pages.map(page => {
        return (
            <li
                key={page}
                className={`page-item ${currentPage === page && 'active'}`}
            >
                <button
                    onClick={() => setPage(page)}
                    className="page-link"
                >
                    {page}
                </button>
            </li>
        )
    })

    return (
        <nav aria-label="...">
            <ul className="pagination user-pagination">
                <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                    <button
                        disabled={currentPage === 1}
                        className="page-link"
                        onClick={() => prevPage()}
                    >
                        Previous
                    </button>
                </li>
                {mappedPages}
                <li className={` ${currentPage === totalPages && 'disabled'}`}>
                    <button
                        disabled={currentPage === totalPages}
                        className="page-link"
                        onClick={() => nextPage()}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};