import { useEffect, useState } from "react"

export default function Players() {
const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);


    return (
        <div className="card">
            <h1>Player: </h1>
            <ol>
            {
                players.map(player => <li>{player.name}</li>)
            }
            </ol>
        </div>
    )
}
