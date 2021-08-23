import React from 'react';

import airbnbLogo from '../assets/svg/airbnb-logo.svg';
import hubspotLogo from '../assets/svg/hubspot-logo.svg';
import googleLogo from '../assets/svg/google-logo.svg';
import microsoftLogo from '../assets/svg/microsoft-logo.svg';
import walmartLogo from '../assets/svg/walmart-logo.svg';
import fedExLogo from '../assets/svg/fedEx-logo.svg';

import heart from '../assets/svg/heart.svg';
import star from '../assets/svg/star.svg';

import sale from '../assets/svg/sale.svg';
import medal from '../assets/svg/medal.svg';
import check from '../assets/svg/check.svg';

import mainBg from '../assets/img/main-bg.png';

const Home = () => {
    return (
        <div className="content">
            <div className="container">
                <section className="start-block">
                    <div className="start-block__inner">
                        <h1 className="start-block__title">The best video online meeting software.</h1>
                        <p className="start-block__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                        <button className="start-block__btn">Start for free</button>
                    </div>
                    <img className="main-bg" src={mainBg} alt="Main" width="768" height="518" />
                </section>
                <section className="info-block">
                    <div className="info-block__text">
                        <h2>Collaborate 2M+ startup and international companies ueses since 2018 </h2>
                    </div>
                    <div className="info-block__stats">
                        <div className="info-block__active-downloads">
                            <div className="value-stats">15k</div>
                            <div className="grade-icons">
                                <img className="heart" src={heart} alt="Heart" width="16" height="14" />
                                <img className="heart" src={heart} alt="Heart" width="16" height="14" />
                                <img className="heart" src={heart} alt="Heart" width="16" height="14" />
                                <img className="heart" src={heart} alt="Heart" width="16" height="14" />
                                <img className="heart" src={heart} alt="Heart" width="16" height="14" />
                            </div>
                            <div>Active Downloads</div>
                        </div>
                        <div className="info-block__rating">
                            <div>4.9</div>
                            <div className="grade-icons">
                                <img className="star" src={star} alt="Star" width="17" height="16" />
                                <img className="star" src={star} alt="Star" width="17" height="16" />
                                <img className="star" src={star} alt="Star" width="17" height="16" />
                                <img className="star" src={star} alt="Star" width="17" height="16" />
                                <img className="star" src={star} alt="Star" width="17" height="16" />
                            </div>
                            <div>2,938 Rating</div>
                        </div>
                    </div>
                </section>
                <section className="company-block">
                    <img className="logo" src={airbnbLogo} alt="Airbnb logo" width="152" height="32" />
                    <img className="logo" src={hubspotLogo} alt="Hubspot logo" width="152" height="32" />
                    <img className="logo" src={googleLogo} alt="Google logo" width="152" height="32" />
                    <img className="logo" src={microsoftLogo} alt="Microsoft logo" width="152" height="32" />
                    <img className="logo" src={walmartLogo} alt="Walmart logo" width="152" height="32" />
                    <img className="logo" src={fedExLogo} alt="FedEx logo" width="152" height="32" />
                </section>
                <section className="features-block">
                    <div className="features-block__desc">
                        <h2>our special features</h2>
                        <div>
                            We are familiar with offline speed dating flow so we designed out online
                            platform considering all the requirements
                        </div>
                    </div>
                    <div className="features-block__list">
                        <div className="list-item">
                            <img className="item-icon" src={sale} alt="Sale" width="152" height="32" />
                            <h4 className="item-title">Affordable Pricing</h4>
                            <p className="item-text">
                                A dictionary of over 200 Latin words,with
                                a handful of model sentence. structures,
                                to generate Lorem Ipsum
                            </p>
                            <a className="item-more" href="#">Learn more</a>
                        </div>
                        <div className="list-item">
                            <img className="item-icon" src={medal} alt="Medal" width="152" height="32" />
                            <h4 className="item-title">Seamless Reliability</h4>
                            <p className="item-text">
                                A dictionary of over 200 Latin words,with
                                a handful of model sentence. structures,
                                to generate Lorem Ipsum
                            </p>
                            <a className="item-more" href="#">Learn more</a>
                        </div>
                        <div className="list-item">
                            <img className="item-icon" src={check} alt="Check" width="152" height="32" />
                            <h4 className="item-title">Secure Collaboration</h4>
                            <p className="item-text">
                                A dictionary of over 200 Latin words,with
                                a handful of model sentence. structures, 
                                to generate Lorem Ipsum
                            </p>
                            <a className="item-more" href="#">Learn more</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;