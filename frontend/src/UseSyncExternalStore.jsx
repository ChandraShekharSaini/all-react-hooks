import React, { useSyncExternalStore } from 'react'

let score = 20
let emmit = null

const UseSyncExternalStore = () => {

    function updateScore() {
    
        score++;
        console.log(score)
        emmit()
    }


    return (
        <div style={{ border: "1px solid red", width: "50%", margin: "auto" }}>
            <div style={{ fontSize: "40px", fontWeight: "700" }}>UseSyncExternalStore</div>
            <Score />

            <button onClick={updateScore} style={{ padding: "10px 20px", borderRadius: "5px", outline: "none", border: "none", backgroundColor: "red", color: "white" }}>Update Score</button>
        </div>
    )
}



const Score = () => {

    function subscribe(notify) {
        emmit = notify
    }

    function getSnapShot() {
        return score
    }


    const updatedValue = useSyncExternalStore(subscribe, getSnapShot)

    return (
        <p style={{ fontSize: "40px", fontWeight: "700" }}>  Score Is:<strong style={{ color: "red" }}>{updatedValue}</strong></p>
    )
}


export default UseSyncExternalStore

