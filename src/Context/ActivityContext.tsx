import { createContext, useMemo, useReducer } from "react"
import { activityReducer , initialState , activityActions , ActivityState} from "../reducers/activity-reducer"

type ActivityProviderProps = { 
    children : React.ReactNode
}

type ActivityContextPros = { 
    dispatch :  React.Dispatch<activityActions>,
    state : ActivityState,
    caloriasConsumed : number ,
    caloriasBurned : number ,
    total : number
}

export const ActivityContext = createContext<ActivityContextPros>(null!)

export const ActivityProvider = ( { children } : ActivityProviderProps ) => { 

    const [ state , dispatch ] = useReducer( activityReducer , initialState)

    // Contadores
    const caloriasConsumed = useMemo(() => state.activities.reduce( (total , activity ) => activity.category === 1 ? total + +activity.calorias : total, 0 ) , [state.activities])

    const caloriasBurned = useMemo(() => state.activities.reduce( (total , activity ) => +activity.category === 2 ? total + +activity.calorias : total, 0 ) , [state.activities])

    const total = caloriasConsumed - caloriasBurned
    
    return (

        <ActivityContext.Provider
            value = {{
                dispatch , 
                state , 
                caloriasConsumed ,
                caloriasBurned ,
                total
            }}
        >
            { children }
        </ActivityContext.Provider>
    )
}