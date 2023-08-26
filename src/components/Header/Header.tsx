import { useTranslation } from "react-i18next";
import { LanguageChange } from "../LanguageChange";
import { NavLink, useLocation } from "react-router-dom";
import user from '../../images/user.png';
import portrait from '../../images/user-portrait.png';
import './Header.scss';

export const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const isActiveRoute = (route: string) => {
        return location.pathname === route;
    };

    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav__logo">
                    <div className="header__nav__title">
                        <NavLink to={`/`}>
                            <h1>Job Search</h1>
                        </NavLink>
                    </div>
                    <div>
                        <LanguageChange />
                    </div>
                </div>

                <nav className="header__nav__menu">
                    <div>
                        <NavLink to={'/offers'}>
                            <button className={isActiveRoute('/offers') || isActiveRoute('/') ? 'activeNav' : ''}>
                                {t("offers")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/companies'}>
                            <button className={isActiveRoute('/companies') ? 'activeNav' : ''}>
                                {t("companies")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/employers'}>
                            <button className={isActiveRoute('/employers') ? 'activeNav' : ''}>
                                {t("employers")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/help'}>
                            <button className={isActiveRoute('/help') ? 'activeNav' : ''}>
                                {t("help")}
                            </button>
                        </NavLink>
                    </div>
                </nav>
                <div className="header__nav__user">
                    <img src={user} alt="" />
                    <img src={portrait} alt="" />
                </div>
            </div>
            <div className="header__img-text">
                <div className="header__img-text__text">
                    <div>
                        <div>
                            <div className="header__img-text__text">
                                <h1>{t("headerH1")}</h1>
                                <h3>{t("headerH3")}</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header__img-text__doctor">

                </div>
            </div>
        </header>
    );
}
