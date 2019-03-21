import React from 'react';
import { connect } from 'react-redux'
import playerSprite from './BODY_male_Epic_armors_Golden.png'
import playerMovement from './movement'

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${playerSprite}')`,
                backgroundPosition: '-8px 1px',
                width: '40px',
                height: '60px'
            }}
         />
    )
}

function mapStateToProps(state){
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(playerMovement(Player))
