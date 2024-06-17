import { createContext, useMemo, useReducer } from "react"
import { activityReducer , initialState , activityActions , ActivityState} from "../reducers/activity-reducer"
import { categories } from "../db/categorias"
import { Activity } from "../types"


type ActivityProviderProps = { 
    children : React.ReactNode
}

type ActivityContextPros = { 
    dispatch :  React.Dispatch<activityActions>,
    state : ActivityState,
    caloriasConsumed : number ,
    caloriasBurned : number ,
    total : number,
    isEmptyActivities: boolean,
    categoryName: (category: Activity['category']) => any[]

}

export const ActivityContext = createContext<ActivityContextPros>(null!)

export const ActivityProvider = ( { children } : ActivityProviderProps ) => { 

    const [ state , dispatch ] = useReducer( activityReducer , initialState)

    // CaloriaTraker
    // Contadores
    const caloriasConsumed = useMemo(() => state.activities.reduce( (total , activity ) => activity.category === 1 ? total + +activity.calorias : total, 0 ) , [state.activities])

    const caloriasBurned = useMemo(() => state.activities.reduce( (total , activity ) => +activity.category === 2 ? total + +activity.calorias : total, 0 ) , [state.activities])

    const total = caloriasConsumed - caloriasBurned


    // ActivityList
    // formatear categoria de 1 : comida  2 : ejercicio
    const categoryName = useMemo( () => (category : Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '') , [state.activities]);

    const isEmptyActivities = useMemo( () => state.activities.length === 0 , [ state.activities ])
    
    
    return (

        <ActivityContext.Provider
            value = {{
                dispatch , 
                state , 
                caloriasConsumed ,
                caloriasBurned ,
                total,
                categoryName,
                isEmptyActivities
            }}
        >
            { children }
        </ActivityContext.Provider>
    )
}