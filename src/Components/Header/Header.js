import React from 'react';
import s from './Header.module.css';
import { connect } from 'react-redux';
import { logoutTC } from '../../Redux/authReducer';

const Header = (props) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <p className={s.headerLogo}>Логотип</p>
                {props.isAuth ? <><p className={s.enterText}>Продукция</p>
                <p className={s.logoutButton} onClick={props.logoutTC}>Выйти из аккаунта</p></>
                : <p className={s.enterText}>Войти в аккаунт</p>}
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logoutTC })(Header);