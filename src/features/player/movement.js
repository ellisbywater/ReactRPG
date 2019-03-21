import store from '../../config/store'
import {SPRITE_STRIDE} from "../../config/constants";

export default function playerMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch(direction){
            case 'WEST':
                return [oldPos[0] - SPRITE_STRIDE, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_STRIDE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_STRIDE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_STRIDE]
        }

    }

    function dispatchMove(direction) {
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeydown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 87:
                return dispatchMove('NORTH')
            case 65:
                return dispatchMove('WEST')
            case 83:
                return dispatchMove('SOUTH')
            case 68:
                return dispatchMove('EAST')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', e => {
        handleKeydown(e)
    })
    return player
}
