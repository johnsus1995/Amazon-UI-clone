import React, {createContext, useContext,useReducer} from 'react'

//prepare the data layer
export const StateContext = createContext();

//this will wrap the app and provide the data layer to every component inside the app
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//this will pull infos from the data layer
export const useStateValue = () => useContext(StateContext)


