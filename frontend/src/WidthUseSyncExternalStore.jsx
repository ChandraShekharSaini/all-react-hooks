import React, { useSyncExternalStore } from 'react'

const WidthUseSyncExternalStore = () => {
    return (
        <div>
            <h1>Width of Screen</h1>
            <Width />
        </div>
    )
}


function Width() {


    function subscribe(notify) {
        window.addEventListener('resize', notify);

        return () => {
            window.removeEventListener('resize', notify);
        }
    }

    function getSnapShort() {
        return window.innerWidth
    }


    const width = useSyncExternalStore(subscribe, getSnapShort)

    return (
        <p style={{ fontSize: "30px", fontWeight: "700", color: "red" }}>Width:{width}</p>
    )
}


export default WidthUseSyncExternalStore