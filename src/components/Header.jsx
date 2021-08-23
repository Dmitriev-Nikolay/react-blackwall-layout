import React from 'react';

// import groupballs from '../assets/img/groupballs.png';
// import rectangle from '../assets/img/rectangle.png';
// import ellipse from '../assets/img/ellipse.png';
// import videoBackground from '../assets/img/bg-video.webp';
// import videoPlay from '../assets/img/video-play.png';

// import mask from '../assets/svg/mask.svg';
// import infiniti from '../assets/svg/infiniti.svg';
// import ticket from '../assets/svg/ticket.svg';
// import photo from '../assets/svg/photo.svg';

import mainLogo from '../assets/svg/main-logo.svg';

const Header = () => {

    return (
        <header className="header">
            <div className="header__main-block">
                <img className="header__logo" src={mainLogo} alt="Main logo" width="114" height="32" />
                <nav className="header__navigation">
                    <a href="#">Home</a>
                    <a href="#">Feature</a>
                    <a href="#">Pricing</a>
                    <a href="#">Solution</a>
                    <a href="#">Faq</a>
                </nav>
            </div>
            <div className="header__sign-in-block">
                <button className="button" type="submit">Sign in</button>
                <button className="button" type="submit">Downlaod</button>
            </div>
        </header>
    );
};

export default Header;