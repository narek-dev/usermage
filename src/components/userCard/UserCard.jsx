import React from 'react';
import s from './UserCard.module.css';

export default function UserCard({data, userClick}) {
    return (
        <div onClick={() => userClick(data)} className={s.card}>
            <div className={s.avatar}>
                <img src={data.avatar} alt={`${data.first_name}'s avatar`} />
            </div>

            <h4 className={s.fullName}>{`${data.first_name} ${data.last_name}`}</h4>
            <p className={s.email}>{data.email}</p>
        </div>
    )
}
