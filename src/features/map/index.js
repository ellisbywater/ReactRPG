import React from 'react'
import { MAP_HEIGHT, MAP_WIDTH } from "../../config/constants";

function Map(props) {
    return (
        <div
            style={{
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                backgroundColor: 'green',
                border: '4px solid white',
                margin: '10px auto'
            }}
        />
    )
}

export default Map
