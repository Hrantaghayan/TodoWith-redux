import React from "react";
import './ToDo.css'
import { getinpvalue,changeInpValue } from "./redux/inputvalue";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/todoitems";
import { changeColor,getIscolored } from "./redux/dynamic";
import { changefilter } from "./redux/filter";
import { getSituation } from "./redux/filter";
export function Header(){
    const dispatch = useDispatch()
    const inpvalue = useSelector(getinpvalue)
    const color = useSelector(getIscolored)
    const situation =useSelector(getSituation)
    return (
        <div className="inp-container">
        <input type='text' className="inp" placeholder="Write your todo" value={inpvalue} 
         style={{
            borderBottomColor:color?'#731b79':'white'
        }}
        onChange={(e)=>{
        dispatch(changeInpValue(e.target.value))
        }}
        onKeyDown={(e)=>{
            if(e.code==='Enter'){
                dispatch(addItem(inpvalue))
                dispatch(changeInpValue(''))
            }
        }}
        onFocus={()=>{
            dispatch(changeColor())
            dispatch(changefilter('All'))
        }}
        onBlur={()=>{
            dispatch(changeColor())
        }}
        />
        <button className="add" onClick={()=>{
            dispatch(addItem(inpvalue))
            dispatch(changeInpValue(''))
        }} >Add</button>
        </div>
    )
}