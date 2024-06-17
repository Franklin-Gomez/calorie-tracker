import { createContext, useReducer } from "react"
import { activityReducer , initialState , activityActions , ActivityState} from "../reducers/activity-reducer"

type ActivityProviderProps = { 
    children : React.ReactNode
}

type ActivityContextPros = { 
    dispatch :  React.Dispatch<activityActions>,
    state : ActivityState
}

export const ActivityContext = createContext<ActivityContextPros>(null!)

export const ActivityProvider = ( { children } : ActivityProviderProps ) => { 

    const [ state , dispatch ] = useReducer( activityReducer , initialState)

    return (

        <ActivityContext.Provider
            value = {{
                dispatch , 
                state
            }}
        >
            { children }
        </ActivityContext.Provider>
    )
}