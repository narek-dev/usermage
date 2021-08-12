import React from 'react';
import s from './Pagination.module.css';

export default function Pagination({pagescount, currentPage, event}) {
    const buttons = [];

    for(let i = 1; i <= pagescount; i++) {
        let activeClassName = ' ' + s[currentPage === i ? 'active' : ''];
        buttons.push(
            <button key={i} onClick={() => event(i)} className={s.paginButton + activeClassName}>
                {i}
            </button>
        )
    };

    return (
        <div className={s.container}>
            {buttons}        
        </div>
    )
}
