import store from '../../config/store'
import {MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE, SPRITE_STRIDE} from "../../config/constants";

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
        const oldPos = store.getState().player.position
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: observeBoundaries(oldPos, getNewPosition(direction))
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

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE * 1.5)
            ? newPos : oldPos
    }

    window.addEventListener('keydown', e => {
        handleKeydown(e)
    })
    return player
}
