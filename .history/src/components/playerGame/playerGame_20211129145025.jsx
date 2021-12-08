import React, { useState } from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;

    let array = [];

    const [points, setPoints] = useState(0);

    for (i = 1; i <= props.rounds; i++) {
        array.push(i);
    }

    const addPoints = (checked, idNum) => {
        if (checked) {
            setPoints(points * 1 + 10 + document.getElementById(idNum).value * 1);
            document.getElementById(idNum).disabled = true;
        }
        else {
            setPoints(points * 1 - 10 - document.getElementById(idNum).value * 1);
            document.getElementById(idNum).disabled = false;
        }
    }

    const createRange = ((end) => {
        let array = [];
        for (let i = 0; i <= end; i++) {
            array.push(i);
        }
        return array;
    });

    const checkCheckbox = (id) => {
        return document.getElementById(id).checked;
    }

    return (
        <>
            <table className={styles.playerGame}>
                <tbody>
                    <tr>
                        <td>
                            <p className={styles.name}>
                                <strong>{props.name}</strong> (Points: <strong>{points}</strong>)
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.round}>
                            {
                                array.map((elem, i) => {
                                    return (
                                        <div className={styles.win}>
                                            <h5>Won?</h5>
                                            {i === props.currentRound - 1 ?
                                                <input
                                                    type="checkbox"
                                                    id={"check" + props.name + elem}
                                                    onChange={(e) => addPoints(e.target.checked, "num" + props.name + elem)}
                                                />
                                                :
                                                <input
                                                    type="checkbox"
                                                    id={"check" + props.name + elem}
                                                    onChange={(e) => addPoints(e.target.checked, "num" + props.name + elem)}
                                                    disabled
                                                />
                                            }
                                        </div>
                                    )
                                })
                            }
                            {
                                array.map((elem, i) => {
                                    return (
                                        <div className={styles.bet}>
                                            <h5>Bet</h5>
                                            {i === props.currentRound - 1 && !checkCheckbox("check" + props.name + elem) ?
                                                <select
                                                    id={"num" + props.name + elem}
                                                    placeholder="0"
                                                >
                                                    {
                                                        createRange(elem).map((index) => {
                                                            return (
                                                                <option
                                                                    key={index}
                                                                    value={index}
                                                                > {index} </option>
                                                            );
                                                        })
                                                    }
                                                </select>
                                                :
                                                <select
                                                    id={"num" + props.name + elem}
                                                    placeholder="0"
                                                    disabled
                                                >
                                                    {
                                                        createRange(elem).map((index) => {
                                                            return (
                                                                <option
                                                                    key={index}
                                                                    value={index}
                                                                > {index} </option>
                                                            );
                                                        })
                                                    }
                                                </select>
                                            }
                                            <h6>Round {elem}</h6>
                                        </div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PlayerGame