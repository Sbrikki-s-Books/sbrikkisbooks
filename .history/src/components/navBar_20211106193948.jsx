import React from 'react'
import * as styles from './navBar.module.scss'
import NavItem from '../atoms/navItem/navItem'

const menu = [
    {key: 0, title: "Read", link: "/read"},
    {key: 1, title: "Alcool", link: "/alcool"},
    {key: 2, title: "Pfizer", link: "/pfizer"},
];

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            {console.log(menu)}
            {menu.forEach((item, i) => {
                return <NavItem title={item.title} link={item.link} />
            })}
        </div>
    )
}

export default NavBar