import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './Footer.scss';

export const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <footer className='footer'>
            <div className='footer-one'>
                <div className="footer-one__logo">
                    <NavLink to={`/`}>
                        <h1>Job Search</h1>
                    </NavLink>
                </div>
                <nav className="footer-one__nav__menu">
                    <div>
                        <NavLink to={'/offers'}>
                            <button>
                                {t("offers")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/companies'}>
                            <button>
                                {t("companies")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/employers'}>
                            <button>
                                {t("employers")}
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/help'}>
                            <button>
                                {t("help")}
                            </button>
                        </NavLink>
                    </div>
                </nav>
                <div className='footer-one__right'>
                    <div>
                        <h5>{t("network")}</h5>
                        <a target="_blank" href="https://github.com/pavel-ironfoot">gH</a>
                        <a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">lD</a>
                        <a target="_blank" href="https://www.facebook.com/pavel.orlov.1272">fB</a>
                        <a target="_blank" href="https://www.instagram.com/slim_dwarf/">iG</a>
                    </div>
                    <div>
                        <h5>8 800 010 88 12</h5>
                        <p>{t("freeLine")}</p>
                    </div>
                </div>
            </div>
            <div className='footer-two'>
                <p>{t("allrights")}</p>
                <p>{t("politics")}</p>
                <p>{t("social")}</p>
                <p>front-end dev: PAVEL IRONFOOT</p>
            </div>
        </footer>
    );
}