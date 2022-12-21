import React from "react";
const inpval = ''
function inpValReducer(state={},action){
    if(action.type==='change-inpvalue'){
        return action.payload.newinpval
    }
   return state
}
function getinpvalue(state){
    return state.inpval
}
function changeInpValue(newval){
    return {
        type:'change-inpvalue',
        payload:{
            newinpval:newval
        }
    }
}
export{inpValReducer,inpval,getinpvalue,changeInpValue}