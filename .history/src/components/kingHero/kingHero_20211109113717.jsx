import React, { useState } from 'react'
import * as styles from './kingHero.module.scss'

const KingHero = () => {

    const [numPlayers, setNumPlayers] = useState(5);

    const decreasePlayers = () => {
        if(numPlayers > 0){
            setNumPlayers(numPlayers-1)
        }
    }

    const increasePlayers = () => {
        if(numPlayers <= 10){
            setNumPlayers(numPlayers+1)
        }
    }

    return (
        <div className={styles.kingHero} id="/king">
            <h1>Mbare let's play King</h1>

            <div className={styles.players}>
                <h2>How many players?</h2>

                <div className={styles.countPlayers}>
                    <button onClick={decreasePlayers}>
                        <p>-</p>
                    </button>
                    <p>{numPlayers}</p>
                    <button onClick={increasePlayers}>
                        <p>+</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KingHero