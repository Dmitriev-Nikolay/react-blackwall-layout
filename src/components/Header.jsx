import React from 'react';

import mainLogo from '../assets/svg/main-logo.svg';

import { BurgerMenu } from '../components';

const Header = () => {
    const navItems = ['Home', 'Feature', 'Pricing', 'Solution', 'Faq'];
    const headerButtons = ['Sign in', 'Downlaod'];

    return (
        <header className="header">
            <div className="container-header">
                <div className="header__main-block">
                    <img className="header__logo" src={ mainLogo } alt="Main logo" width="114" height="32" />
                    <nav className="header__navigation">
                        {
                            navItems.map((item, i) => {
                                return (
                                    <a href="#/" key={ `${ item }_${ i }` }>{ item }</a>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="header__sign-in-block">
                    {
                        headerButtons.map((button, i) => {
                            return (
                                <button className="button" type="submit" key={ `${ button }_${ i }` }>{ button }</button>
                            )
                        })
                    }
                </div>
                <BurgerMenu items={ navItems } buttons={ headerButtons } />
            </div>
        </header>
    );
};

export default Header;