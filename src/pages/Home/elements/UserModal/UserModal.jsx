import React from 'react';
import s from './UserModal.module.css';
import Btn from '../../../../components/btn/Btn';

export default function UserModal({user, modalEvents}) {
    if (!user) return null;
    return (
        <div className={s.background}>
            <div className={s.modal}>
                <span onClick={modalEvents.close} className={s.closeModal}>X</span>

                <img src={user.avatar} alt="User Avatar" />

                <h3>{user.first_name}</h3>
                <h3>{user.last_name}</h3>
                <p>{user.email}</p>

                <Btn type='action' label='Edit the user' event={() => modalEvents.action(user)} />
            </div>
        </div>
    )
}
