import React from "react";
export const secondInpValue = ''
export const secondinpcolor = false
export function secondInpValueReducer(state={},action){
    if(action.type==='change-secondInpvalue'){
        return action.payload.text
    }
    return state
}
export function getsecondinpvalue(state){
    return state.secondInpValue
}
export function changSecondeInpValue(newval){
    return {
        type:'change-secondInpvalue',
        payload:{
            text:newval
        }
    }
}
export function chaneSecondinpcolorReducer(state={},action){
    debugger
    if(action.type==='changeColor'){
        return !state
    }
    return state
    }
    export function getsecondinpcolor(state){
        return state.secondinpcolor
    }
    export function changesecondInpColor(){
        return {
            type:'changeColor'
        }
    }