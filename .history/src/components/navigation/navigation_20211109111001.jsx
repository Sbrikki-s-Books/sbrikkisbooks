import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = () => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" link="/" />
                <NavItem text="King" link="/king" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" link="/" />
                <NavItem text="King" link="/king" />
            </div>
        </>
    )
}

export default Navigation