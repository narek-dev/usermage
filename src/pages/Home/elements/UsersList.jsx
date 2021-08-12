import React from 'react';
import UserCard from '../../../components/userCard/UserCard';
import style from '../Home.module.css';

export default function UsersList({users, userClick}) {
    let renderedUsers = null;

    if (users) {
        renderedUsers = users.map( (user, index) => (
            <UserCard
                key={user.id}
                data={user}
                userClick={userClick}
            />
            
        ))
    }
    return (
        <div className={style.usersList}>
            {renderedUsers}
        </div>
    )
}
