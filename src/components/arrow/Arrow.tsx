import React from 'react';
import './Arrow.css';
import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';

export type ArrowType = {
    sort: 'asc' | 'desc';
}

export const Arrow = ({sort}: ArrowType) => {
    return (
        <>
            {
                sort === 'desc'
                    ? <img className={"arrow"} src={upArrow} alt="up"/>
                    : <img className={"arrow"} src={downArrow} alt="down"/>
            }
        </>
    )
};