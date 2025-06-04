import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import logo from '../assets/images/logo/travel-logo.png';
import UserMenu from './UserMenu';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <nav className="nav">
            <div className="nav-logo">
                <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>

            {/* Nút hamburger cho mobile */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>

            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className="linkPage"><NavLink to='/'>{t('nav.home')}</NavLink></li>
                    <li className="linkPage"><NavLink to='/travel'>{t('nav.travel')}</NavLink></li>
                    <li className="linkPage"><NavLink to='/products'>{t('nav.products')}</NavLink></li>
                    <li className="linkPage"><NavLink to='/news'>{t('nav.news')}</NavLink></li>
                    <li className="linkPage"><NavLink to='/about'>{t('nav.about')}</NavLink></li>

                    {/* Thêm nav-right vào đây khi responsive */}
                    <li className="nav-mobile-only"><NavLink to='/message'>{t('nav.message')}</NavLink></li>
                    <li className="nav-mobile-only">
                        {user ? <UserMenu user={user} setUser={setUser} /> : <NavLink to='/login'>{t('nav.login')}</NavLink>}
                    </li>
                </ul>
            </div>

            <div className={`nav-right ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className="linkPage"><NavLink to='/message'>{t('nav.message')}</NavLink></li>
                    {!user && (
                        <li className="linkPage">
                            <NavLink to='/login'>{t('nav.login')}</NavLink>
                        </li>
                    )}

                    {user && (
                        <li className="">
                            <UserMenu user={user} setUser={setUser} />
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;