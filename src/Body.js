import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos,deleteItem, isChecked,changeText } from "./redux/todoitems";
import { getinpvalue } from "./redux/inputvalue";
import { getSituation } from "./redux/filter";
import { changeRewritenStateTrue } from "./redux/todoitems";
import { changSecondeInpValue,getsecondinpvalue } from "./redux/secondinpvalue";
import { getsecondinpcolor,changesecondInpColor } from "./redux/secondinpvalue";
export function Body(){
    // debugger
const color = useSelector(getsecondinpcolor)
const todos = useSelector(getTodos)
const situation = useSelector(getSituation)
const dispatch = useDispatch()
const secondinpvalue = useSelector(getsecondinpvalue)
console.log(secondinpvalue)
const check = (str,arr)=>{
    // debugger
 if(str ==='All'){
    return arr
}
else if(str === 'Checked'){
    let filterTodos = arr.filter((el)=>{
            if(el.done===true){
                return true
            }
            else{
                return false
            }
        })
        return filterTodos
}
else if(str === 'Unchecked'){
    let filterTodos = arr.filter((el)=>{
        if(el.done===true){
            return false
        }
        else{
            return true
        }
    })
    return filterTodos
}
else if(str === 'Clear All'){
    return []
}
}
const todoitems = check(situation,todos)
let mapedtodos = todoitems.map((el,ind,mapedtodos)=>{
    if(el.isRewriten === true){
        return (
            <div className="item-container" key={el.id}>
            <input type="checkbox" className='checkinp' checked={el.done} onChange = {()=>{
                dispatch(isChecked(el.id))
            }}/>
            <div>
             <div className="date">{el.date}</div>   
            <input type='text' value={el.action} className='inp-depend'
            style={{
                borderBottomColor:color?'#731b79':'white'
            }}
            onFocus={()=>{
                dispatch(changesecondInpColor())
            }}
            onBlur={()=>{
                dispatch(changesecondInpColor())
            }}
            onChange={(e)=>{
               dispatch(changSecondeInpValue(e.target.value))
               dispatch(changeText(el.id,e.target.value))
            }}
            />
            </div>
           <div className="btn-icon-container">
           <i className="fa-solid fa-pen"onClick={
            (e)=>{
                dispatch(changeRewritenStateTrue(el.id,e.target.className))
            }
           }></i>
           <i className="fa-solid fa-floppy-disk"
           onClick={
            (e)=>{
                dispatch(changeRewritenStateTrue(el.id,e.target.className))
                dispatch(changSecondeInpValue(''))
            }
           }
           ></i>
           <button className="btn-delete" onClick={()=>{
                dispatch(deleteItem(el.id))
            }}>X</button>
           </div>
           </div>
         )
    }
    return (
       <div className="item-container" key={el.id}>
       <input type="checkbox" className='checkinp' checked={el.done} onChange = {()=>{
           dispatch(isChecked(el.id))
       }}/>
       <div>
        <div className="date">{el.date}</div>   
       <div className="item">{el.action}</div>
       </div>
      <div className="btn-icon-container">
      <i className="fa-solid fa-pen"onClick={
            (e)=>{
                dispatch(changeRewritenStateTrue(el.id,e.target.className))
            }
           }
      ></i>
      <i className="fa-solid fa-floppy-disk" onClick={
            (e)=>{
                dispatch(changeRewritenStateTrue(el.id,e.target.className))
            }
           }></i>
      <button className="btn-delete" onClick={()=>{
           dispatch(deleteItem(el.id))
       }}>X</button>
      </div>
      </div>
    )
   })
return (
     <>
      {mapedtodos}  
     </>
)
}