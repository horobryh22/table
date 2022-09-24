import React from 'react';

export type SearchInputType = {
    value: string;
}

export const SearchInput = ({value}: SearchInputType) => {
    return (
        <div className="input-group  mb-3 mt-3" style={{width: 400}}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter something ..."
                value={value}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                Button
            </button>
        </div>
    );
};