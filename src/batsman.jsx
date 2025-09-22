import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const [single, setSingle] = useState(0);

    const handelSingles = () => {
        const updatedRuns = runs + 1;
        const updateSingle = single + 1; 
        setSingle(updateSingle)
        setRuns(updatedRuns);
    }


    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1; 
        setFours(updatedFours);
        setRuns(updatedRuns);
    }


    const handelSix = () => {
        const handelSix = runs + 6;
        const updatedSixs = sixes + 1; 
        setSixes(updatedSixs)
        setRuns(handelSix);
    }


    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Sixs:{sixes} </small></p>
            <p><small>Fours: {fours} </small></p>
            <p><small>Singles: {single} </small></p>
            {
                runs > 50 && <p>Half Century Done 🎉</p>
            }
            <h1>Score:{runs} </h1>

            <button onClick={handelSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}