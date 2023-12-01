import { useState } from "react";

const Player = ({initialName, symbol, isActive}) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = () => {
        setIsEditing(editing => !editing);
        
        // if (isEditing) {
        //     onNameChange(symbol, playerName);
        // }
    }

    const changeNameHandler = (event) => { 
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={changeNameHandler}/>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>{isEditing ? "save" : "Edit"}</button>
        </li>
    )
}

export default Player;