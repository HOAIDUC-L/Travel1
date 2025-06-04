import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserMenu.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const UserMenu = ({ user }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    // Đóng dropdown nếu click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="user-menu" ref={menuRef}>
            <img
                src={user.avatar}
                alt="avatar"
                className="avatar"
                onClick={() => setIsOpen((prev) => !prev)}
            />
            <ul className={`dropdown ${isOpen ? 'active' : ''}`}>
                <li>
                    <div className="locales">
                        <LanguageSelector />
                    </div>
                </li>

                <li>
                    <div className="link-to-profile">
                        <Link to="/profile">
                            {t('nav.profile')}
                        </Link>
                    </div>
                </li>

                <li onClick={handleLogout}>
                    <div className="link-to-logout">
                        <Link to="/logout">
                            {t('nav.logout')}
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="mode">
                        {t('nav.theme')}<ThemeToggle />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;