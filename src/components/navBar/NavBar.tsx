
import Logo from "../logo/Logo";
import Burger from "../burger/Burger";
import BurgerMenu from "../burgerMenu/BurgerMenu";


import c from './navBar.module.css'
import classes from '../app/App.module.css'
import {useState} from "react";
import LinkNavbarList from "../linkNavbarList/LinkNavbarList";

const NavBar = () => {

    const [stateBurger, setStateBurger] = useState<boolean>(false)

    const burgerCallback = (state: boolean) => {
        setStateBurger(state)
    }

    return (
        <div className={c.navBar}>
            <div className={classes.container}>
                <div className={c.menuBlock}>
                    <Logo/>
                    <LinkNavbarList position='' stateBurger={stateBurger}/>
                </div>

                <div className={c.burgerBlock}>
                    <Burger stateBurger={stateBurger} burgerCallback={burgerCallback}/>
                    <BurgerMenu burgerCallback={burgerCallback} stateBurger={stateBurger}/>
                </div>

            </div>
        </div>
    );
};

export default NavBar;