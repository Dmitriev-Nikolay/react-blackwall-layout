import React from 'react';

import styled from 'styled-components';

const StyledBurger = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 15;

    &:focus {
        outline: none;
    }

    div {
        width: 30px;
        height: 3px;
        background: ${({ open }) => open ? '#fff' : '#18216D'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :nth-of-type(1) {
            width:100%;
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        
        :nth-of-type(2) {
            width: ${({ open }) => open ? '100%' : '75%'};
            transform: ${({ open }) => open ? 'translate(0, 5px) rotatez(-45deg)' : 'rotate(0)'};
        }
    }
`

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #18216D;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    min-height: 100%;
    width: 100%;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    @media (max-width: 576px) {
        width: 100%;
    }

    a {
        font-size: 24px;
        font-family: "Inter-Regular", sans-serif;
        text-transform: uppercase;
        padding: 30px;
        font-weight: 500;
        letter-spacing: 5px;
        color: white;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 20px;
            text-align: center;
        }

        &:active {
            color: #343078;
        }
    }
`

const BurgerBtnMenu = styled.button`
        padding: 15px 40px;
        color: white;
        transition: color 0.3s linear;
        border-radius: 6px;
        width: 100%;
        margin-bottom: 15px;
        cursor: pointer;
        border: none;
        font-size: 20px;
        font-family: "Inter-Regular", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 5px;
        border-style: none;
        cursor: pointer;
        color: #18216D;
        background: #fff;

        &:active {
            transform: translate(1px, 1px);
        }
`

const Menu = ({ open, items, buttons }) => {
    return (
        <StyledMenu className="burger-nav" open={ open }>
            {
                items.map((item, i) => {
                    return (
                        <a href="#/" key={ `${ item }_${ i }` }>{ item }</a>
                    )
                })
            }
            {
                buttons.map((button, i) => {
                    return (
                        <BurgerBtnMenu key={ `${ button }_${ i }` }>
                            { button }
                        </BurgerBtnMenu>
                    )
                })
            }
        </StyledMenu>
    );
};

const Burger = ({ open, setOpen }) => {

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // do not scroll the body
        }
        else {
            document.body.style.overflow = "auto";
        };
    }, [open])
    return (
        <StyledBurger className="burger-btn" open={ open } onClick={ () => setOpen(!open) }>
            <div />
            <div />
        </StyledBurger>
    );
};

const BurgerMenu = ({ items, buttons }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="burger-menu">
            <Burger open={ open } setOpen={ setOpen } />
            <Menu open={ open } setOpen={ setOpen } items={ items } buttons={ buttons } />
        </div>
    );
};

export default BurgerMenu;
