import React, {CSSProperties} from 'react';
import './Pagination.css';
import {PaginationType} from './types';
import {Select} from '../tableFilter/select/Select';

const PAGINATION_SELECT_STYLES: CSSProperties = {
    width: 80,
    fontSize: 16,
    cursor: 'pointer',
    marginLeft: 20,
    marginBottom: 30
}

export const Pagination = (
    {
        totalPages,
        currentPage,
        setPage,
        prevPage,
        nextPage,
        setContentPerPage,
        contentPerPage
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
        <div className="user-pagination">
            <div aria-label="...">
                <ul className="pagination">
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
            </div>
            <Select
                items={['10', '12']}
                initialValue={contentPerPage}
                setValue={setContentPerPage}
                disabled={false}
                style={PAGINATION_SELECT_STYLES}
            />
        </div>
    );
};