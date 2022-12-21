import React from "react";
export const todo = [
    {action:'Buy milk',done:true, id:Math.random(),date:new Date().toLocaleTimeString(),isRewriten:false},
    {action:'Buy egg',done:false, id:Math.random(),date:new Date().toLocaleTimeString(),isRewriten:false},
    {action:'Do my homeworks',done:false, id:Math.random(),date:new Date().toLocaleTimeString(),isRewriten:false}
]

export function toDoReducer(state={},action){
    if(action.type==='add'){
        return [ 
        {action:action.payload.item,done:false,id:Math.random(),date:new Date().toLocaleTimeString()},
        ...state
        ]
    }
    else if(action.type === 'delete'){
     let newtodos = state.filter((el)=>{
        if(el.id!==action.payload.deletedElId){
            return true
        }
        else{
            return false
        }
      })
      return newtodos
    }
    else if(action.type==='ischecked'){
      function check(arr){
        let res = []
        for(let i = 0;i<arr.length;i++){
            if(arr[i].id === action.payload.newElId){
                arr[i].done = !arr[i].done
                res.push(arr[i])
            }else{
                res.push(arr[i])
            }
        }
        return res
      }
        return check(state)
    }
    else if(action.type==='clearall'){
        return []
    }
    else if(action.type==='makeRewriten'){
        function check(arr){
            let res = []
            for(let i = 0;i<arr.length;i++){
                if(arr[i].id === action.payload.rewritenid){
                    if(action.payload.text==='fa-solid fa-floppy-disk'){
                        arr[i].isRewriten = false
                        res.push(arr[i]) 
                    }
                    else if(action.payload.text==="fa-solid fa-pen"){
                        arr[i].isRewriten = true
                        res.push(arr[i])
                    }
                }
                else{
                    res.push(arr[i])
                }
            }
            return res
          }
            return check(state)
    }
    else if(action.type==='changeinnertext'){
        function check(arr){
            let res = []
            for(let i = 0;i<arr.length;i++){
                if(arr[i].id === action.payload.textid){
                    arr[i].action = action.payload.text
                    res.push(arr[i])
                }else{
                    res.push(arr[i])
                }
            }
            return res
          }
            return check(state)
    }
    return state
}
export function getTodos(state){
    return state.todo
}
export function addItem(newitem){
    return {
        type:'add',
        payload:{
            item:newitem
        }
    }
}
export function deleteItem(id){
    return {
        type:'delete',
        payload:{
            deletedElId:id
        }

    }
}
export function isChecked(id){
    return {
        type:'ischecked',
        payload:{
            newElId:id
        }

    }
}
export function clearall(){
    return {
        type:'clearall'
    }
}
export function changeRewritenStateTrue(id,string){
    return {
        type:'makeRewriten',
        payload:{
            rewritenid:id,
            text:string
        }
    }
}
export function changeText(id,string){
    debugger
    return {
       type:'changeinnertext',
       payload:{
        text:string,
        textid:id
       }
    }
}

