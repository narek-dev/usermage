import React from 'react';
import UserCard from '../../../components/userCard/UserCard';
import style from '../Home.module.css';

export default function UsersList({users, userClick, lastElementRef}) {
    let renderedUsers = null;

    if (users) {
        renderedUsers = users.map( (user, index) => {
            if (users.length === index + 1) {
                return ( <UserCard
                    key={user.id}
                    data={user}
                    userClick={userClick}
                    lastElementRef={lastElementRef}
                />)
            }
            return ( <UserCard
                key={user.id}
                data={user}
                userClick={userClick}
            />)
        })
    }
    return (
        <div className={style.usersList}>
            {renderedUsers}
        </div>
    )
}
