import React from "react";
export const isColored = false
export function colorReducer(state={},action){
if(action.type==='change-isColored'){
    return !state
}
return state
}
export function getIscolored(state){
    return state.isColored
}
export function changeColor(){
    return {
        type:'change-isColored'
    }
}