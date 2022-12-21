import React from "react";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { inpValReducer, inpval } from "./inputvalue";
import { todo,toDoReducer } from "./todoitems";
import { filter, filterReducer} from "./filter";
import { colorReducer, isColored} from "./dynamic";
import { chaneSecondinpcolorReducer, secondInpValue,secondInpValueReducer,secondinpcolor } from "./secondinpvalue";

const state = {
    inpval,
    todo,
    filter,
    isColored,
    secondInpValue,
    secondinpcolor
}

export const store = createStore(combineReducers({
    inpval:inpValReducer,
    todo:toDoReducer,
    filter:filterReducer,
    isColored:colorReducer,
    secondInpValue:secondInpValueReducer,
    secondinpcolor:chaneSecondinpcolorReducer
}),state)
