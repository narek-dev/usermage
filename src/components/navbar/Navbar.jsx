import React from 'react'
import s from './navbar.module.css';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className={s.container}>
            <Link to='/users' className={s.logoContainer}>
                <div className={s.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <h2 className={s.title}> Usermage</h2>
            </Link>
        </div>
    )
}
