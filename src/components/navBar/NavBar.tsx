
import c from './navBar.module.css'
import classes from '../app/App.module.css'

const NavBar = () => {
    return (
        <div className={c.navBar}>
            <div className={classes.container}>
                <nav className={c.nav}>
                    <div className={c.logo}>DMYTRO D.</div>
                    <ul className={c.menuList}>
                        <li className={c.menuItem}>
                            <a href="#" className={c.menuLink}>Main</a>
                        </li>
                        <li className={c.menuItem}>
                            <a href="#" className={c.menuLink}>Technologies</a>
                        </li>
                        <li className={c.menuItem}>
                            <a href="#" className={c.menuLink}>Projects</a>
                        </li>
                        <li className={c.menuItem}>
                            <a href="#" className={c.menuLink}>Contacts</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default NavBar;