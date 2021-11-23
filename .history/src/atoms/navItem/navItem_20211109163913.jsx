import React from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <a className={styles.item} onClick={props.onClick} href="">
            {props.text}
        </a>
    );
}

export default NavItem