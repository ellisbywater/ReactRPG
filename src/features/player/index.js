import React from 'react';
import { connect } from 'react-redux'
import playerSprite from 'BODY_male_Epic_armors_Golden.png'

function Player(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${playerSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px'
            }}
         />
    )
}

function mapStateToProps(state){
    return {
        ...state.player
    }
}

export default connect(mapStateToProps())(Player)
