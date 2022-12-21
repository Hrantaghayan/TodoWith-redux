import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "./redux/filter";
import { clearall } from "./redux/todoitems";
import { getSituation} from "./redux/filter";
export  function Footer(){
    const dispatch = useDispatch()
    const situation = useSelector(getSituation)
    return (
        <div className="btn-container">
            <button className="general-btns" onClick={(e)=>{
              dispatch(changefilter(e.target.innerText))
            }}
            style={{
              borderBottomColor:situation==='All'?'#731b79':'white'
            }}
            >All</button>
            <button className="general-btns" onClick={(e)=>{
              dispatch(changefilter(e.target.innerText))
            }}
            style={{
              borderBottomColor:situation==='Checked'?'#731b79':'white'
            }}
            >Checked</button>
            <button className="general-btns" onClick={(e)=>{
              dispatch(changefilter(e.target.innerText))
            }}
            style={{
              borderBottomColor:situation==='Unchecked'?'#731b79':'white'
            }}
            >Unchecked</button>
            <button className="general-btns" onClick={(e)=>{
              dispatch(changefilter(e.target.innerText))
              dispatch(clearall())
            }}
            style={{
              borderBottomColor:situation==='Clear All'?'#731b79':'white'
            }}
            >Clear All</button>            
        </div>
    )
}