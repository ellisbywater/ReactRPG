import React from 'react'
import {MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE} from "../../config/constants";

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'dirt'
        case 1:
            return 'grass'
        case 2:
            return 'wood_floor'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
        case 10:
            return 'stone_wall'
        default:
            return 'wood_wall'
    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    >{props.tile}</div>
}

function MapRow(props) {
    return <div className="row">
        {
            props.tiles.map(tile => <MapTile tile={tile} />)
        }
    </div>
}

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
        >
            {
                props.tiles.map(row => <MapRow tiles={row}/>)
            }
        </div>
    )
}

export default Map
