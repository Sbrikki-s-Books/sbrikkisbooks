import React, { useEffect, useRef } from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {
    let blocked = useRef(false);
    let action = useRef(props.startBlocked);

    useEffect(()=>{
         if(!blocked.current) {
            action.current();
            blocked.current = true;
        }
    }, [])
    

    return (
        <div className={styles.kingPage}>
            <button 
                className={props.isBlocking? styles.buttonBlocked : styles.buttonUnblocked} 
                onClick={props.toggleIsBlocking}
            >
                {
                props.isBlocking?
                    "Click to allow exit"
                :
                    "Click to block exit"
                }
            </button>
            <p>
                <strong>King</strong> is a very good <strong>card game</strong> mbare.<br/>
                In this section you <strong>cannot</strong> play, but it's a <strong>scorer</strong> 
            </p>
            <KingHero />
        </div>
    )
}

export default King