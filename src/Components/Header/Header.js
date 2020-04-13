import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <p className={s.headerLogo}>Логотип</p>
                <button className={s.enterButton}>Войти в аккаунт</button>
            </div>
        </div>
    );
}

export default Header;