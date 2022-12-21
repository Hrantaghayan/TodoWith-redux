import React from "react";
export const filter = 'All'
export function filterReducer(state={},action){
  if(action.type === 'changesituation'){
   return action.payload.situation
  }
    return state
}
export function getSituation(state){
   return state.filter
}
export function changefilter(sit){
    return{
        type:'changesituation',
        payload:{
         situation:sit
        }
    }
}
